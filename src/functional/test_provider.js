//特别的, 封装对象可能不是个集合/list,  仅仅是个数据提供者provider
import {getProducts1,getProducts2} from "./encapsulation/provider.js";

// 使用示例
console.log("=== 使用 getProducts1（回调方式）===")
getProducts1((products) => {
    console.log("商品列表1:", products)
    //用户传递的回调函数主要用来遍历products业务
    for (let index = 0; index < products.length; index++) {
        const element = products[index];
        console.log("商品 " + index + ": " + JSON.stringify(element))
    }
})

console.log("\n=== 使用 getProducts2（直接返回）===")
const products = await getProducts2()
console.log("商品列表2:", products)
console.table(products)