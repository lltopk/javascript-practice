//每个正常任务(宏任务macrotask)之后，引擎会立即执行微任务microtask队列中的所有任务，然后再执行其他的宏任务，或渲染，或进行其他任何操作。

setTimeout(() => console.log("timeout"));//宏任务

Promise.resolve()
  .then(() => console.log("promise"));//微任务

console.log("code");//当前

//这里的执行顺序是怎样的？
// code 首先显示，因为它是常规的主程序, 是同步调用, Promise不会阻塞主程序。
// promise 第二个出现，因为 then 会通过微任务队列，并在当前代码之后执行。
// timeout 最后显示，因为它是一个宏任务。


//更详细的事件循环图示如下,  主程序 > 微任务(promise对.then/catch/finally 处理程序的执行) > 宏任务(事件/ setTimeout) > DOM渲染Render