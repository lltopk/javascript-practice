// 创建一个Map数据结构
const myMap = new Map();

// 向Map中添加一些键值对
myMap.set('key1', 'value1');
myMap.set('key2', 'value2');
myMap.set('key3', 'value3');

// 使用for循环遍历Map
for (let [key, value] of myMap) {
    console.log(`Key: ${key}, Value: ${value}`);
}