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



