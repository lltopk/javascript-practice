//promise完整对象形如Promise 
// {[[PromiseState]]: 'fulfilled', [[PromiseResult]]: 'xxx', Symbol(async_id_symbol): 5, Symbol(trigger_async_id_symbol): 1}
// {[[PromiseState]]: 'pending', [[PromiseResult]]: 'xxx', Symbol(async_id_symbol): 5, Symbol(trigger_async_id_symbol): 1}

//如果想确切的获取promise返回的result, 除了使用then回调结果之外, 还可以明确的通过await promise方式
async function syncCheck(){
  let promise = await checkTime();
  console.log("......")
  console.log("promise:",promise)
  if(promise == 'checked'){
    console.log("has checked")
  }
}


async function checkTime(){
  return new Promise((resolve, reject)=> {
    setTimeout(() => resolve("checked"), 5000);
  });
}

syncCheck();