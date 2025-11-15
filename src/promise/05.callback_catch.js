//如果我们只对 error 感兴趣，那么我们可以使用 null 作为第一个参数：.then(null, errorHandlingFunction)。
let promise = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});
promise.then(
    null,
    (reject)=>{
        console.log("promise",reject)
    }
)


// 或者我们使用语义更加明确的 .catch(errorHandlingFunction)，
let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});
promise2.catch((reject)=>{
    console.log("promise2",reject)
}); // 1 秒后显示 "Error: Whoops!"