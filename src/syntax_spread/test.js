let arr = {
    a:1, 
    b:2, 
    c:3
}

//当没有定义字段d, 或者从后端返回的字段中没有d的时候(对于后端没查到返回null, 但是对于前端是undefined)
let newArr = {
    ...arr,
    d: arr.d
}
console.log(newArr)

//添加或运算符, 防止undefined, 避免后期传给后端接口报错, 传了字符串'undefined'
newArr = {
    ...arr,
    d: arr.d || 4
}
console.log(newArr)

// 相同的属性d并不会重复, 而是后面的d覆盖前面的
newArr = {
    ...arr,
    d: 5
}

console.log(newArr)