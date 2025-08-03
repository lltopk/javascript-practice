// 创建一个Map数据结构
const myMap2 = new Map();

// 向Map中添加一些键值对
myMap2.set('key1', 'value1');
myMap2.set('key2', 'value2');
myMap2.set('key3', 'value3');

// 使用for循环遍历Map
for (let [key, value] of myMap2) {
    console.log(`Key: ${key}, Value: ${value}`);
}