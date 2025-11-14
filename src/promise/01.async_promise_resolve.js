//实践一下, 成功案例
let promise = new Promise((resolve, reject)=> {
  // 当 promise 被构造完成时，自动执行此函数,并带有结果 "done"
  setTimeout(() => resolve("done"), 1000);
});
//立刻打印, promise尚且没有执行完, 状态为pending
console.log(promise); // Promise {<pending>}
// 1秒后，promise 状态变为 "fulfilled"，结果变为 "done"
setTimeout(() => console.log(promise), 2000); // Promise {<fulfilled>: "done"}

