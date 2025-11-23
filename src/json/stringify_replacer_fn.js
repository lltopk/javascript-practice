const products = [
  { 'id': 1, 'title': 'iPad 4 Mini', 'price': 500.01, 'inventory': 200000 },
  { 'id': 2, 'title': 'H&M T-Shirt White', 'price': 10.99, 'inventory': 10 },
  { 'id': 3, 'title': 'Charli XCX - Sucker CD', 'price': 19.99, 'inventory': 5 }
]

//replacer参数是个函数, 该函数式接口定义如下
//replacer?: (this: any, key: string, value: any) => any
//, 其中的this会自动被绑定, 用户只用传后面两个参数key value即可
    /**
     * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
     * @param value A JavaScript value, usually an object or array, to be converted.
     * @param replacer A function that transforms the results.
     * @param space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
     * @throws {TypeError} If a circular reference or a BigInt value is found.
     */
    // stringify(value: any, replacer?: (this: any, key: string, value: any) => any, space?: string | number): string;
    
for (let index = 0; index < products.length; index++) {
    const element = products[index];
    console.log("商品 " + index + ": " + JSON.stringify(element, (key, value) => {
        console.log(index + ":JSON.stringify#replacer this",this)//箭头函数没有自己的this
        console.log(index + ":JSON.stringify#replacer key",key)
        console.log(index + ":JSON.stringify#replacer value",value)
        if (key === 'id' && value <= 1) {
            return undefined  // 仅仅过滤掉 id <= 1的对象的id键
        }
            return value
        }, 2)
    )
}

//replacer参数是个函数
for (let index = 0; index < products.length; index++) {
    const element = products[index];
    console.log("商品 " + index + ": " + JSON.stringify(element, function(key, value)  {
        console.log(index +":JSON.stringify#replacer this",this)//普通函数有自己的this
        console.log(index + ":JSON.stringify#replacer key",key)
        console.log(index + ":JSON.stringify#replacer value",value)
        if (key === 'id' && value <= 1) {
            return undefined  // 仅仅过滤掉 id <= 1的对象的id键
        }
            return value
        }, 2)
    )
}