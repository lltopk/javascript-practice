//Promise 对象的 state 和 result 属性都是内部的。我们无法直接访问它们。
//但我们可以对它们使用 .then/.catch/.finally 方法。在其中, 底层给我们提供了回调函数(当然也包括现成的回调参数了)
// promise.then(
//   function(result) { /* handle a successful result */ },
//   function(error) { /* handle an error */ }
// );
let promise1 = new Promise(function(resolve, reject) {
  setTimeout(() => resolve("done!"), 1000);
});

// resolve 运行 .then 中的第一个函数
promise1.then(
  // 1 秒后显示 "done!"
  (result) => {
    console.log("promise1",result)
  }, 
  // 不运行
  (error) => {
    console.log("promise1",error)
   } 
);

//下面回调reject
let promise2 = new Promise((resolve, reject)=> {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});

// reject 运行 .then 中的第二个函数
promise2.then(
  result => console.log("promise2",result), // 不运行
  error => console.log("promise2",error) // 1 秒后显示 "Error: Whoops!"
);



//如果我们只对成功完成的情况感兴趣，那么我们可以只为 .then 提供一个函数参数：
let promise3 = new Promise(resolve => {
  setTimeout(() => resolve("done!"), 1000);
});

promise3.then((result)=>{
  console.log("promise3",result)
}); // 1 秒后显示 "done!"