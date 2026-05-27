import { Injectable, Logger, OnModuleInit, BadRequestException } from '@nestjs/common';
import { SchedulerRegistry } from '@nestjs/schedule';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TaskEntity } from './task.entity';
import { ITaskConfig } from './task.interface';
// import axios from 'axios';
import { URLSearchParams } from 'url';

// 由于CronJob不是从@nestjs/schedule直接导出的，我们需要这样导入
import { CronJob } from 'cron';

@Injectable()
export class TaskService implements OnModuleInit {
  private readonly logger = new Logger(TaskService.name);

  constructor(
    @InjectRepository(TaskEntity)
    private readonly taskRepository: Repository<TaskEntity>,
    private readonly schedulerRegistry: SchedulerRegistry,
  ) { }

  /**
   * 当模块初始化时调用
   */
  async onModuleInit() {
    // 应用启动时初始化所有已启用的任务
    await this.initScheduler();
  }

  /**
   * 添加定时任务
   * @param config 任务配置
   */
  async addTask(config: ITaskConfig): Promise<TaskEntity> {
    // 验证cron表达式
    if (config.cron) {
      this.validateCronExpression(config.cron);
    }

    const task = this.taskRepository.create({
      ...config,
      params: config.params ? JSON.stringify(config.params) : null,
      headers: config.headers ? JSON.stringify(config.headers) : null
    });

    const savedTask = await this.taskRepository.save(task);

    // 如果任务是启用状态，立即调度它
    if (savedTask.enabled) {
      try {
        this.scheduleTask(savedTask);
      } catch (error) {
        this.logger.error(`调度任务 "${savedTask.name}" 失败: ${error.message}`);
      }
    }

    return {
      ...savedTask,
      params: savedTask.params ? JSON.parse(savedTask.params) : null,
      headers: savedTask.headers ? JSON.parse(savedTask.headers) : null
    } as TaskEntity;
  }

  /**
   * 获取所有任务
   */
  async getAllTasks(): Promise<TaskEntity[]> {
    const tasks = await this.taskRepository.find();
    // 解析存储的JSON字符串
    return tasks.map(task => ({
      ...task,
      params: task.params ? JSON.parse(task.params) : null,
      headers: task.headers ? JSON.parse(task.headers) : null
    }));
  }

  /**
   * 根据ID获取任务
   * @param id 任务ID
   */
  async getTaskById(id: number): Promise<TaskEntity> {
    const task = await this.taskRepository.findOne({ where: { id } });
    if (!task) {
      return null;
    }

    // 解析存储的JSON字符串
    return {
      ...task,
      params: task.params ? JSON.parse(task.params) : null,
      headers: task.headers ? JSON.parse(task.headers) : null
    };
  }

  /**
   * 更新任务
   * @param id 任务ID
   * @param updates 更新内容
   */
  async updateTask(id: number, updates: Partial<ITaskConfig>): Promise<TaskEntity> {
    // 如果更新包含cron表达式，验证其有效性
    if (updates.cron) {
      this.validateCronExpression(updates.cron);
    }

    // 先获取原始任务信息
    const originalTask = await this.getTaskById(id);

    // 准备更新数据
    const updateData: any = { ...updates };
    if (updates.params) {
      updateData.params = JSON.stringify(updates.params);
    }
    if (updates.headers) {
      updateData.headers = JSON.stringify(updates.headers);
    }

    // 更新任务
    await this.taskRepository.update(id, updateData);
    const updatedTask = await this.getTaskById(id);

    // 如果任务状态发生改变，相应地调度或取消调度任务
    try {
      if (originalTask.enabled !== updatedTask.enabled) {
        if (updatedTask.enabled) {
          // 任务从禁用变为启用，需要调度
          this.scheduleTask(updatedTask);
        } else {
          // 任务从启用变为禁用，需要取消调度
          this.unscheduleTask(id);
        }
      } else if (updatedTask.enabled && originalTask.cron !== updatedTask.cron) {
        // 如果任务是启用状态且cron表达式发生变化，重新调度任务
        this.unscheduleTask(id);
        this.scheduleTask(updatedTask);
      }
    } catch (error) {
      this.logger.error(`更新任务 "${updatedTask.name}" 调度失败: ${error.message}`);
    }

    return updatedTask;
  }

  /**
   * 删除任务
   * @param id 任务ID
   */
  async deleteTask(id: number): Promise<void> {
    // 删除任务前先取消调度
    this.unscheduleTask(id);
    await this.taskRepository.delete(id);
  }

  /**
   * 启用任务
   * @param id 任务ID
   */
  async enableTask(id: number): Promise<TaskEntity> {
    const task = await this.getTaskById(id);

    // 启用任务前验证cron表达式（如果存在）
    if (task.cron) {
      this.validateCronExpression(task.cron);
    }

    const updatedTask = await this.updateTask(id, { enabled: true });
    // 启用任务后立即调度
    try {
      this.scheduleTask(updatedTask);
    } catch (error) {
      this.logger.error(`启用任务 "${updatedTask.name}" 失败: ${error.message}`);
    }
    return updatedTask;
  }

  /**
   * 禁用任务
   * @param id 任务ID
   */
  async disableTask(id: number): Promise<TaskEntity> {
    const task = await this.updateTask(id, { enabled: false });
    // 禁用任务后取消调度
    this.unscheduleTask(id);
    return task;
  }

  /**
   * 初始化任务调度器
   */
  async initScheduler(): Promise<void> {
    try {
      const tasks = await this.getAllTasks();
      let scheduledCount = 0;

      for (const task of tasks) {
        if (task.enabled) {
          try {
            this.scheduleTask(task);
            scheduledCount++;
          } catch (error) {
            this.logger.error(`初始化调度任务 "${task.name}" 失败: ${error.message}`);
          }
        }
      }

      this.logger.log(`任务调度器初始化完成，共调度 ${scheduledCount} 个任务`);
    } catch (error) {
      this.logger.error(`任务调度器初始化失败: ${error.message}`);
    }
  }

  /**
   * 调度单个任务
   * @param task 任务实体
   */
  private scheduleTask(task: TaskEntity): void {
    try {
      // 检查任务是否已经调度
      try {
        if (this.schedulerRegistry.doesExist('cron', `task_${task.id}`)) {
          this.unscheduleTask(task.id);
        }
      } catch (e) {
        // 如果任务不存在，忽略错误
      }

      // 创建新的定时任务
      const job = new CronJob(task.cron, () => {
        this.logger.log(`执行任务: ${task.name}`);
        // 实际的任务执行逻辑
        this.executeTask(task);
      });

      this.schedulerRegistry.addCronJob(`task_${task.id}`, job);
      job.start();

      this.logger.log(`已调度任务: ${task.name} (Cron: ${task.cron})`);
    } catch (error) {
      this.logger.error(`调度任务 "${task.name}" 失败: ${error.message}`);
      throw new BadRequestException(`无效的Cron表达式: ${task.cron}`);
    }
  }

  /**
   * 取消调度任务
   * @param taskId 任务ID
   */
  private unscheduleTask(taskId: number): void {
    try {
      if (this.schedulerRegistry.doesExist('cron', `task_${taskId}`)) {
        const job = this.schedulerRegistry.getCronJob(`task_${taskId}`);
        job.stop();
        this.schedulerRegistry.deleteCronJob(`task_${taskId}`);
        this.logger.log(`已取消调度任务 ID: ${taskId}`);
      }
    } catch (e) {
      // 如果任务不存在，忽略错误
      this.logger.warn(`尝试取消调度不存在的任务 ID: ${taskId}`);
    }
  }

  /**
   * 执行具体任务
   * @param task 任务实体
   */
  private async executeTask(task: TaskEntity): Promise<void> {
    try {
      // 检查是否是HTTP请求任务
      if (task.url && task.method) {
        this.logger.log(`执行HTTP请求任务: ${task.name}`);

        // 准备请求配置
        const config: any = {
          method: task.method,
          url: task.url,
          headers: task.headers || {}
        };

        // 根据方法类型设置参数
        if (task.method.toUpperCase() === 'GET' && task.params) {
          config.params = task.params;
        } else if (['POST', 'PUT', 'PATCH'].includes(task.method.toUpperCase()) && task.params) {
          // 对于表单数据，使用URLSearchParams
          if (config.headers['Content-Type'] === 'application/x-www-form-urlencoded') {
            const params = new URLSearchParams();
            for (const [key, value] of Object.entries(task.params)) {
              params.append(key, value as string);
            }
            config.data = params.toString();
          } else {
            // 默认作为JSON发送
            config.data = task.params;
          }
        }

        // 执行HTTP请求
        // const response = await axios(config);

        // this.logger.log(`HTTP请求任务 "${task.name}" 执行完成，状态码: ${response.status}`);
      } else {
        // 默认任务执行逻辑
        this.logger.log(`任务执行中: ${task.name}`);

        // 示例：模拟任务执行
        await new Promise(resolve => setTimeout(resolve, 3000));

        this.logger.log(`任务执行完成: ${task.name}`);
      }
    } catch (error) {
      this.logger.error(`任务 "${task.name}" 执行失败: ${error.message}`);
    }
  }

  /**
   * 验证Cron表达式有效性
   * @param cron Cron表达式
   */
  private validateCronExpression(cron: string): void {
    try {
      // 尝试创建一个CronJob来验证表达式是否有效
      new CronJob(cron, () => { });
    } catch (error) {
      throw new BadRequestException(`无效的Cron表达式: ${cron}`);
    }
  }
}