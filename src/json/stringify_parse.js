const jsonText1 = '{"id": 2,"title": "H&M T-Shirt White","price": 10.99,"inventory": 10}';
const obj1 = JSON.parse(jsonText1)
console.log("=== 基础解析 ===")
console.log("原始字符串:", jsonText1)
console.log("解析结果:", obj1)
console.log("类型:", typeof obj1)



// reviver参数是个函数, 该函数式接口定义如下
//reviver?: (this: any, key: string, value: any) => any
//, 其中的this会自动被绑定, 用户只用传后面两个参数key value即可
    /**
     * Converts a JavaScript Object Notation (JSON) string into an object.
     * @param text A valid JSON string.
     * @param reviver A function that transforms the results. This function is called for each member of the object.
     * If a member contains nested objects, the nested objects are transformed before the parent object is.
     * @throws {SyntaxError} If `text` is not valid JSON.
     */
    // parse(text: string, reviver?: (this: any, key: string, value: any) => any): any;
console.log("\n=== 使用 reviver 转换 ===")
const jsonText2 = '{"id": 1, "title": "iPad", "price": 500.01, "inventory": 200000}'

const obj2 = JSON.parse(jsonText2, function(key, value) {
  // key 为空字符串时是根对象
  if (key === '') {
    console.log('处理根对象:', this)
    return value
  }
  // 处理每个属性
  console.log(`处理属性 - key: "${key}", value:`, value)
  
  // 可以在这里进行数据转换
  if (key === 'price') {
    return `¥${value}`  // 价格添加货币符号
  }
  if (key === 'inventory') {
    return value > 100 ? '充足' : '库存不足'  // 库存状态转换
  }
  return value
})
console.log("转换后的对象:", obj2)

// 3. 数组的解析
console.log("\n=== 数组解析 ===")
const jsonText3 = '[{"id": 1, "name": "商品1"}, {"id": 2, "name": "商品2"}]'
const arr = JSON.parse(jsonText3, function(key, value) {
  if (key === 'name') {
    return `[${value}]`  // 给名字添加括号
  }
  return value
})
console.log("原始数组字符串:", jsonText3)
console.log("解析后的数组:", arr)
console.table(arr)

// 4. 深层嵌套对象的解析
console.log("\n=== 嵌套对象解析 ===")
const jsonText4 = '{"product": {"id": 1, "details": {"color": "red", "size": "L"}}}'
const obj4 = JSON.parse(jsonText4, function(key, value) {
  if (key === 'color') {
    return `颜色: ${value}`
  }
  if (key === 'size') {
    return `尺码: ${value}`
  }
  return value
})
console.log("解析后的嵌套对象:", obj4)
console.log(JSON.stringify(obj4, null, 2))


// 5. 日期字符串的解析和转换
console.log("\n=== 日期转换 ===")
const jsonText5 = '{"name": "商品", "createdAt": "2025-11-23T10:30:00Z", "price": 99.9}'
const obj5 = JSON.parse(jsonText5, function(key, value) {
  // 检测 ISO 日期字符串并转换为 Date 对象
  if (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}T/.test(value)) {
    return new Date(value)
  }
  return value
})
console.log("解析后的对象:", obj5)
console.log("createdAt 类型:", obj5.createdAt instanceof Date ? 'Date 对象' : typeof obj5.createdAt)