// import axios, { AxiosError } from 'axios';

// 配置
const API_URL = 'http://127.0.0.1:8000/v1/chat/completions'; // 使用 127.0.0.1 代替 localhost
const USER_TOKEN = '3BFvhhjomHiKlzaFaYCPNrNYtY5lWWG7vgVxMHXJK/aOr8nTySkSY8S1RJvokB7w'; // 你的 token
const MODEL = 'deepseek'; // 使用正确的模型名称

// 自定义日志函数
const logger = {
  info: (message: string, data?: any) => console.log(`[INFO] ${message}`, data),
  error: (message: string, error?: any) => console.error(`[ERROR] ${message}`, error)
};

// // 创建 axios 实例
// const apiClient = axios.create({
//   baseURL: API_URL,
//   timeout: 60000, // 60秒超时
//   headers: {
//     'Content-Type': 'application/json',
//     'Authorization': `Bearer ${USER_TOKEN}` // 添加 Bearer 前缀
//   }
// });

// // 请求拦截器
// apiClient.interceptors.request.use(
//   (config) => {
//     logger.info(`发起请求: ${config.method?.toUpperCase()} ${config.url}`);
//     if (config.data) {
//       logger.info('请求体:', JSON.stringify(config.data, null, 2));
//     }
//     return config;
//   },
//   (error) => {
//     logger.error('请求拦截器错误:', error);
//     return Promise.reject(error);
//   }
// );

// // 响应拦截器
// apiClient.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error: AxiosError) => {
//     if (error.response) {
//       logger.error(`请求失败: ${error.response.status}`, error.response.data);
//     } else if (error.request) {
//       logger.error('无响应:', error.message);
//     } else {
//       logger.error('请求错误:', error.message);
//     }
//     return Promise.reject(error);
//   }
// );
export async function sendChatRequest(conversationId: string, question: string): Promise<Map<string, any>> {
  return null;
}

// 发送聊天请求
// export async function sendChatRequest(conversationId: string, question: string): Promise<Map<string, any>> {
//   const requestBody = {
//     model: MODEL, // 使用正确的模型名称
//     conversation_id: conversationId || '',
//     messages: [
//       {
//         role: "user",
//         content: question
//       }
//     ],
//     stream: false,
//     temperature: 0.7,
//     max_tokens: 2048
//   };
//   if (conversationId) {
//     requestBody.conversation_id = conversationId;
//   }
//   try {
//     // 使用正确的响应类型
//     const response = await apiClient.post<DeepSeekResponse>('', requestBody);

//     // 检查响应结构并提取内容
//     if (response.data.choices && response.data.choices.length > 0) {
//       const content = response.data.choices[0].message.content;
//       logger.info('成功获取响应内容:', content);

//       let map = new Map<string, string>();
//       map.set('content', content);
//       map.set('conversationId', response.data.id);
//       return map;
//     }
//     throw new Error('响应中没有找到有效内容');
//   } catch (error) {
//     if (axios.isAxiosError(error)) {
//       logger.error('API 请求失败', {
//         message: error.message,
//         code: error.code,
//         status: error.response?.status,
//         data: error.response?.data
//       });

//       // 检查连接问题
//       if (error.code === 'ECONNREFUSED') {
//         logger.error('无法连接到服务，请确保:');
//         logger.error('1. DeepSeek 服务已启动');
//         logger.error('2. 服务在 127.0.0.1:8000 上运行');
//         logger.error('3. 使用命令检查端口: netstat -ano | findstr :8000');
//       }
//     } else {
//       logger.error('未知错误', error);
//     }
//     throw new Error('请求失败: ' + (error as Error).message);
//   }
// }


// 定义 DeepSeek 响应结构
interface DeepSeekResponse {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: Array<{
    index: number;
    message: {
      role: string;
      content: string;
    };
    finish_reason: string;
  }>;
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}