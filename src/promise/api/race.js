//Promise.race只等待第一个 settled 的 promise 并获取其结果（或 error）。

//只要是settled即可, 不要求fullfilled或者error

//语法：

//let promise = Promise.race(iterable);

Promise.race([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 3000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 500)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 1000))
]).then((reslove, reject) => {
    if (reject) {
        console.log(reject)
    }else{
        console.log(reslove)
    }
}); // Error: Whoops!