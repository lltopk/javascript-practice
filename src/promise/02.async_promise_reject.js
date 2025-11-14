//实践一下, 失败案例
let promise = new Promise((resolve, reject)=> {
  // 1 秒后发出工作已经被完成的信号，并带有 error
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});
//立刻打印, promise尚且没有执行完, 状态为pending
console.log(promise); // Promise {<pending>}
// 1秒后，promise 状态变为 "rejected"，结果变为 "error"
setTimeout(() => console.log(promise), 2000); 

