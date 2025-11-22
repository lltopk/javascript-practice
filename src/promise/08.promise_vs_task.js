//Promise 的回调函数不是正常的异步任务，而是微任务（microtask）。

// 区别在于，正常任务如setTimeout追加到下一轮事件循环，微任务promise追加到本轮事件循环。

// 这意味着，微任务的执行时间一定早于正常任务。


setTimeout(function() {
  console.log(1);
}, 0);

new Promise(function (resolve, reject) {
  resolve(2);
}).then((result)=>{
    console.log('result',result);
})

console.log(3);
