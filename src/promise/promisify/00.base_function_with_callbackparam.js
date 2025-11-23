//这是个简单的函数定义, 用于接收一个回调函数并触发之, 并且遵循“错误优先回调”（error-first callback）约定, 即
// 第一个参数是 err（如果有错误）
// 第二个参数是 result（成功时的数据）
//但注意, 这个版本并不是promise
function loadScript(src, callback) {
    if(!src){
        callback(new Error(`Script load error for ${src}`));
        return ;
    }
    //底层拼接参数
    let script = 'baseRoot/' + src;

    callback(null, script);
}

// 用法：
loadScript('path/script.js', (err, script) => {
    console.log('success output err',err)
    console.log('success output full script path',script)
})
loadScript('', (err, script) => {
    console.log('fail output err',err)
    console.log('fail output script',script)
})