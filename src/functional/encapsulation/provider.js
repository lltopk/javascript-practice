/**
 * Mocking client-server processing
 */
const _products = [
  { 'id': 1, 'title': 'iPad 4 Mini', 'price': 500.01, 'inventory': 200000 },
  { 'id': 2, 'title': 'H&M T-Shirt White', 'price': 10.99, 'inventory': 10 },
  { 'id': 3, 'title': 'Charli XCX - Sucker CD', 'price': 19.99, 'inventory': 5 }
]

  //provider(_products) with callback, execute callback function :cb
const getProducts1 =(cb)=> {
    console.log('商品加载中')
    setTimeout(() => {
        cb(_products)
        console.log('商品加载完成')
    }, 1000);
};
  // pure provider, not consume
const getProducts2 =() =>{
    return new Promise((resolve,reject)=>{
        console.log('商品加载中')
        setTimeout(() => {
            console.log('商品加载完成')
            return resolve(_products)
        }, 1000);
    })
};

export {
    getProducts1,getProducts2
}
