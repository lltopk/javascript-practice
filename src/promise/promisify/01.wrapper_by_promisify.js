// promisify有一个应用场景, 就好比element-ui的表单验证:this.$refs[formName].validate((valid) => {})就等价于这里的loadScript(src, callback)
        // this.$refs[formName].validate((valid) => {
        //   if (valid) {
        //     alert('submit!');
        //   } else {
        //     console.log('error submit!!');
        //     return false;
        //   }
        // });
        //因为validate回调中不支持await, 无法同步内部的请求逻辑(如果有的话)
        //  我们可以对其进行promisify化, 将await validatePromisify()验证结果, 与之后的处理逻辑进行代码上的解耦
        // let validatePromisify = function validForm(){
        //     return new Promise((resolve, reject) => {
        //         this.$refs[formName].validate((valid) => {
        //             if (valid) {
        //                 resolve(valid)
        //             } else {
        //                 reject('error')
        //             }
        //         });
        //     })
        // }

//准备被promisify的函数对象 loadScript, 这个基础的函数对象必须支持回调参数callback, 这是promisify的前提
function loadScript(src, callback) {
    if(!src){
        callback(new Error(`Script load error for ${src}`));
        return ;
    }
    //底层拼接参数
    let script = 'baseRoot/' + src;

    callback(null, script);
}

// 下面开始promise化, promisify并不改变原有语义, 但必须基于一个支持回调参数的函数loadScript
// 下面除了包装loadScript的回调参数之外(err, script) => {}, 是否额外添加参数src取决于基础函数定义loadScript
// 注意 promisify的本意是不需要用户传递回调函数,  所以在promisify内部提前帮我们把回调函数的逻辑写好, 用户只需要在then中等待接收回调的返回值即可
let loadScriptPromise = function(src) {
  //promise接收一个函数, 这个函数接收两个参数, 这两个参数也都是函数
  return new Promise((resolve, reject) => {
    loadScript(src, (err, script) => {
      if (err) {
        console.log('err')
        reject(err)
      }
      else {
        console.log('success')
        resolve(script)
      }
    });
  });
};

// 用法：当promise完成之后, then里面的两个参数都是函数
loadScriptPromise('path/script.js').then(
      resolve=>{console.log('success output full script path',resolve)},
      reject=>{console.log('success output err',reject)} 
);
loadScriptPromise('').then(
      resolve=>{console.log('fail output err',resolve)},
      reject=>{console.log('fail output script',reject)}
);
