const products = [
  { 'id': 1, 'title': 'iPad 4 Mini', 'price': 500.01, 'inventory': 200000 },
  { 'id': 2, 'title': 'H&M T-Shirt White', 'price': 10.99, 'inventory': 10 },
  { 'id': 3, 'title': 'Charli XCX - Sucker CD', 'price': 19.99, 'inventory': 5 }
]

//replacer参数是个数组, 定义如下
//replacer?: (number | string)[] | null
//, 其中的this会自动被绑定, 用户只用传后面两个参数key value即可
    /**
     * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
     * @param value A JavaScript value, usually an object or array, to be converted.
     * @param replacer An array of strings and numbers that acts as an approved list for selecting the object properties that will be stringified.
     * @param space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
     * @throws {TypeError} If a circular reference or a BigInt value is found.
     */
    // stringify(value: any, replacer?: (number | string)[] | null, space?: string | number): string;
   
for (let index = 0; index < products.length; index++) {
    const element = products[index];
    console.log("商品 " + index + ": " + JSON.stringify(element, ['id','title'], 2)
    )
}
