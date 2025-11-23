
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

//在实际开发中，我们可能需要 promise 化很多函数，所以使用一个 helper（辅助函数）很有意义。
// function promisify(f) {
//   return function (...args) { // 返回一个包装函数（wrapper-function） (*)
//     return new Promise((resolve, reject) => {
//         f(...args, (err, script) => {
//         if (err) {
//             console.log('err')
//             reject(err)
//         }
//         else {
//             console.log('success')
//             resolve(script)
//         }
//         });
//     });
//   };
// }


//上面的promisify helper没问题, 但其对于普通参数, 和回调参数的区分不是特别的明细
// 下面通过先单独定义callback逻辑, 然后通过args.push(callback)追加回调进参数,  最后通过f.call(this, ...args)执行目标函数
function promisify(f) {
  return function (...args) { // 返回一个包装函数（wrapper-function） (*)
    return new Promise((resolve, reject) => {
      function callback(err, result) { // 我们对 f 的自定义的回调 (**)
        if (err) {
          console.log('err')
          reject(err);
        } else {
          console.log('success')
          resolve(result);
        }
      }

    //如果`...args`一开始就能获取`callback`参数，那就意味着用户在调用`loadScriptPromise`时必须传递一个`callback`，
    //这样会这违背了Promise化的初衷（用户应该用`.then()`而非回调, 回调提前在promisify中定义好了执行逻辑）。
    //因此这里我们手动将callback添加到args中
      args.push(callback); // 将我们的自定义的回调附加到 f 参数（arguments）的末尾

      f.call(this, ...args); // 调用原始的函数
    });
  };
}



// 用法：
let loadScriptPromise1 = promisify(loadScript);
loadScriptPromise1('path/script.js').then(
      resolve=>{console.log('success output full script path',resolve)},
      reject=>{console.log('success output err',reject)} 
);
let loadScriptPromise2 = promisify(loadScript);
loadScriptPromise2('').then(
      resolve=>{console.log('fail output err',resolve)},
      reject=>{console.log('fail output script',reject)}
);