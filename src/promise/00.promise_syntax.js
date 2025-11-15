//请注意，JavaScript 的本质上是单线程的，因此在任何时刻，只有一个任务会被执行，
// 只是控制权可以在不同的 Promise 之间切换，从而看起来像是新的线程承载了Promise任务一样. 但属于异步不假
//  这是JavaScript与Java等多线程语言的一个重要区别。




// resolve and reject are functions provided by JavaScript engine
let promise1 = new Promise(function(resolve, reject) {
    // executor (the producing code, "singer")
    // tips: must execute the resolve or reject function once
  }
);


//arrors
let promise2 = new Promise((resolve, reject) =>{
    // executor (the producing code, "singer")
    // must execute the resolve or reject function once
  }
);


//example
let promise3 = new Promise((resolve, reject) =>{
        // after 1 second signal that the job is done with the result "done"
        setTimeout(() => resolve("done!"), 1000);
    }
);

// resolve runs the first function in .then
// 重要区分: 
// 如果说定义promise的resolve函数和reject函数是JavaScript引擎提供的, 则"真实用户(回调函数提供者)"是JavaScript本身
// 那么在调用promise的then方法时, 传入的回调函数result和error则是我们自己事先提供的.则"真实用户(回调函数提供者)"是我们自己
promise3.then(
    function(result) { console.log(result); }, // shows "done!" after 1 second
    function(error) { console.log(error); }   // doesn't run
);



