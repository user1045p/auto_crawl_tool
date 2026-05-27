import { Controller, Get, Post, Body, Param, ParseIntPipe, Put, Delete } from '@nestjs/common';
import { TaskService } from '../service/task/task.service';
import { ITaskConfig } from '../service/task/task.interface';
import { TaskEntity } from '../service/task/task.entity';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  /**
   * 创建新任务
   * @param taskConfig 任务配置
   */
  @Post()
  async createTask(@Body() taskConfig: ITaskConfig): Promise<TaskEntity> {
    return await this.taskService.addTask(taskConfig);
  }

  /**
   * 获取所有任务
   */
  @Get()
  async getAllTasks(): Promise<TaskEntity[]> {
    return await this.taskService.getAllTasks();
  }

  /**
   * 根据ID获取任务
   * @param id 任务ID
   */
  @Get(':id')
  async getTaskById(@Param('id', ParseIntPipe) id: number): Promise<TaskEntity> {
    return await this.taskService.getTaskById(id);
  }

  /**
   * 更新任务
   * @param id 任务ID
   * @param updates 更新内容
   */
  @Put(':id')
  async updateTask(
    @Param('id', ParseIntPipe) id: number,
    @Body() updates: Partial<ITaskConfig>,
  ): Promise<TaskEntity> {
    return await this.taskService.updateTask(id, updates);
  }

  /**
   * 删除任务
   * @param id 任务ID
   */
  @Delete(':id')
  async deleteTask(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return await this.taskService.deleteTask(id);
  }

  /**
   * 启用任务
   * @param id 任务ID
   */
  @Post(':id/enable')
  async enableTask(@Param('id', ParseIntPipe) id: number): Promise<TaskEntity> {
    return await this.taskService.enableTask(id);
  }

  /**
   * 禁用任务
   * @param id 任务ID
   */
  @Post(':id/disable')
  async disableTask(@Param('id', ParseIntPipe) id: number): Promise<TaskEntity> {
    return await this.taskService.disableTask(id);
  }
}