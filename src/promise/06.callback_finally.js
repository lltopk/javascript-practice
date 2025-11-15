let promise = new Promise((resolve, reject) => {
  /* 做一些需要时间的事，之后调用可能会 resolve 也可能会 reject */
  setTimeout(() => {
    resolve("value")
  }, 1000);
})

// 在 promise 为 settled 时运行，无论成功与否
promise
.then((result)=>{
    console.log("处理结果:",result)
})
.finally(() => {
    console.log("清理工作，比如隐藏加载指示器");
})
