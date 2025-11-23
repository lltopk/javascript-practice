// 有一个特殊的函数 queueMicrotask(func)，它对.then/catch/finally 处理程序进行排队，以在微任务队列中执行。
// 因此promise 的处理程序 .then、.catch 和 .finally 都是异步的。
// 这样, 即便一个 promise 立即被 resolve，.then、.catch 和 .finally 下面 的代码也会在主程序(同步代码不会被阻塞)之后执行
let promise = Promise.resolve();//tips: 这是Promise自带的工具类, let promise = new Promise(resolve => resolve(value));
promise.then(() => console.log("promise done!"));
console.log("code finished"); // 这个 alert 先显示


// 如果执行顺序对我们很重要该怎么办？我们怎么才能让 code finished 在 promise done 之后出现呢？
console.log('\n')
Promise.resolve()
  .then(() => console.log("promise done!"))
  .then(() => console.log("code finished"));