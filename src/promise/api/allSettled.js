//我们想要获取（fetch）多个用户的信息。即使其中一个请求失败，我们仍然对其他的感兴趣。

//Promise.allSettled 等待所有的 promise 都被 settle，无论结果如何。结果数组会是这样的：
//对成功的响应，结果数组对应元素的内容为 {status:"fulfilled", value:result}，
//对出现 error 的响应，结果数组对应元素的内容为 {status:"rejected", reason:error}。

let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://no-such-url'
];

Promise.allSettled(urls.map(url => fetch(url)))
  .then(results => { // (*)
    results.forEach((result, num, array) => {
      if (result.status == "fulfilled") {
        console.log(`${urls[num]}: ${result.value.status}`);
      }
      if (result.status == "rejected") {
        console.log(`${urls[num]}: ${result.reason}`);
      }
    });
  });

//上面的 (*) 行中的 results 将会是：
// [
//   {status: 'fulfilled', value: ...response...},
//   {status: 'fulfilled', value: ...response...},
//   {status: 'rejected', reason: ...error object...}
// ]
// 所以，对于每个 promise，我们都得到了其状态（status）和 value/ err reason。