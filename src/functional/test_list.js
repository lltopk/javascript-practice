//默认导出的优点是简化导入语法: 
// 在导入(默认导出)的时候不需要写花括号{}去结构，写起来更简洁
import FuntionalList from "./encapsulation/foreach.js"

// 创建集合并添加数据
const list = new FuntionalList()
list.add(1).add(2).add(3).add(4).add(5)

console.log("=== foreach 示例 ===")
list.foreach((item) => console.log(item))

console.log("\n=== find 示例 ===")
const found = list.find(item => item > 3)
console.log(`找到第一个大于3的元素: ${found}`)

console.log("\n=== some 示例 ===")
const hasEven = list.some(item => item % 2 === 0)
console.log(`是否存在偶数: ${hasEven}`)

console.log("\n=== every 示例 ===")
const allPositive = list.every(item => item > 0)
console.log(`所有元素都是正数: ${allPositive}`)

console.log("\n=== map 示例 ===")
const doubled = list.map(item => item * 2)
console.log("每个元素翻倍后:")
doubled.foreach(item => console.log(item))

console.log("\n=== filter 示例 ===")
const evens = list.filter(item => item % 2 === 0)
console.log("筛选出偶数:")
evens.foreach(item => console.log(item))