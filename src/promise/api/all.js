//假设我们希望并行执行多个 promise，并等待所有 promise 都准备就绪。

//例如，并行下载几个 URL，并等到所有内容都下载完毕后再对它们进行处理。
//这就是 Promise.all 的用途。
//语法：
//let promise = Promise.all(iterable);

Promise.all([
  new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
  new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
  new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
]).then((reslove,reject)=>{
    console.log("all resolve",reslove)
}); // 1,2,3 当上面这些 promise 准备好时：每个 promise 都贡献了数组中的一个元素


//一个常见的技巧是，将一个任务数据数组映射（map）到一个 promise 数组，然后将其包装到 Promise.all。
let names = ['iliakan', 'remy', 'jeresig'];

let requests = names.map(name => fetch(`https://api.github.com/users/${name}`));

Promise.all(requests)
  .then(responses => {
    // 所有响应都被成功 resolved
    for(let response of responses) {
      console.log("map to Promise.all raw response",response); 
    //   console.log("map to Promise.all",`${response.url}: ${response.status}`); // 对应每个 url 都显示 200
    }

    return responses;
  })
  // 将响应数组映射（map）到 response.json() 数组中以读取它们的内容
  .then(responses => Promise.all(responses.map(r => r.json())))
  // 所有 JSON 结果都被解析："users" 是它们的数组
  .then(users => users.forEach(user => console.log("map from Promise.then",user.name)));