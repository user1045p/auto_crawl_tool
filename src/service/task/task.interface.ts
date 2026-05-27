export interface ITaskConfig {
  /**
   * 任务名称
   */
  name: string;
  
  /**
   * Cron表达式
   */
  cron: string;
  
  /**
   * 任务描述
   */
  description?: string;
  
  /**
   * 是否启用
   */
  enabled?: boolean;

  /**
   * HTTP请求URL
   */
  url?: string;

  /**
   * HTTP请求方法
   */
  method?: string;

  /**
   * HTTP请求参数
   */
  params?: Record<string, any>;

  /**
   * HTTP请求头
   */
  headers?: Record<string, string>;
}