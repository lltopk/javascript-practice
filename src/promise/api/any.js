//Promise.any 只等待第一个 fulfilled (成功)的 promise，并将这个 fulfilled 的 promise 返回
// 语法如下：

//let promise = Promise.any(iterable);

Promise.any([
    //虽然第一个Error更快settled, 500ms, 但他是error状态, 不是fulfilled状态, 所以Promise.any会忽略
  new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 500)),
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).then((reslove)=>{
    console.log(reslove)
}); // 1



//如果给出的 promise 都 rejected，那么返回的 promise 会带有 AggregateError —— 一个特殊的 error 对象，在其 errors 属性中存储着所有 promise error。
// Promise.any([
//   new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ouch!")), 1000)),
//   new Promise((resolve, reject) => setTimeout(() => reject(new Error("Error!")), 2000))
// ]).catch(error => {
//   console.log(error.constructor.name); // AggregateError
//   console.log(error.errors[0]); // Error: Ouch!
//   console.log(error.errors[1]); // Error: Error!
// });


//then(function(resolve),function(reject))的两个参数, 是两个回调函数,  用function(reject)回调函数是等价于catch的回调的
Promise.any([
  new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ouch!")), 1000)),
  new Promise((resolve, reject) => setTimeout(() => reject(new Error("Error!")), 2000))
]).then(
    null,
    reject => {
        console.log(reject.constructor.name); // AggregateError
        console.log(reject.errors[0]); // Error: Ouch!
        console.log(reject.errors[1]); // Error: Error!
});