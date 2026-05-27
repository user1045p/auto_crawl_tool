function waitForPromise(promise, timeout) {
    // 创建一个在指定时间后 reject 的 Promise
    const timeoutPromise = new Promise((resolve, reject) => {
      setTimeout(() => reject(new Error('Timeout1')), timeout);
    });
   
    // 使用 Promise.race 来确定哪个 Promise 先完成
    return Promise.race([promise, timeoutPromise]);
}
   
  // 使用示例
  const promise = new Promise((resolve, reject) => {
    // 假设这是一个需要很长时间才返回的异步操作
    setTimeout(() => resolve('Promise resolved'), 100000);
  });
   
  // 只等待 500 毫秒
  waitForPromise(promise, 500)
    .then(result => console.log(result))
    .catch(error => console.log(error.message));