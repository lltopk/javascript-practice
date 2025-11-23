
function loadScriptCallBackOneReturn(src, callback) {
    if(!src){
        callback(new Error(`Script load error for ${src}`));
        return ;
    }
    //底层拼接参数
    let script1 = 'baseRoot1/' + src;
    let script2 = 'baseRoot2/' + src;
    let script3 = 'baseRoot3/' + src;

    callback(null, [script1,script2,script3]);
}

function loadScriptCallBackMultiReturns(src, callback) {
    if(!src){
        callback(new Error(`Script load error for ${src}`));
        return ;
    }
    //底层拼接参数
    let script1 = 'baseRoot1/' + src;
    let script2 = 'baseRoot2/' + src;
    let script3 = 'baseRoot3/' + src;

    callback(null, [script1,script2,script3]);
}

// promisify(f, true) 来获取结果数组
function promisify(f, manyArgs = false) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      function callback(err, ...results) { // 我们自定义的 f 的回调
        if (err) {
          console.log('err')
          reject(err);
        } else {
          console.log('success')
          // 如果 manyArgs 被指定，则使用所有回调的结果 resolve
          resolve(manyArgs ? results : results[0]);
        }
      }

      args.push(callback);

      f.call(this, ...args);
    });
  };
}

// 回调单返回值用法：
// let loadScriptPromise1 = promisify(loadScriptCallBackOneReturn);
// loadScriptPromise1('path/script.js').then(
//       resolve=>{console.log('success output full script path',resolve)},
//       reject=>{console.log('success output err',reject)} 
// );
// let loadScriptPromise2 = promisify(loadScriptCallBackOneReturn);
// loadScriptPromise2('').then(
//       resolve=>{console.log('fail output err',resolve)},
//       reject=>{console.log('fail output script',reject)}
// );

// 回调多返回值用法：
// f = promisify(f, true);
let loadScriptPromise3 = promisify(loadScriptCallBackOneReturn,true);
loadScriptPromise3('path/script.js').then(
      arrayOfResults =>{console.log('success output full script path', arrayOfResults)},
      reject=>{console.log('success output err',reject)} 
);
let loadScriptPromise4 = promisify(loadScriptCallBackOneReturn,true);
loadScriptPromise4('').then(
      arrayOfResults =>{console.log('fail output err',arrayOfResults )},
      reject=>{console.log('fail output script',reject)}
);
