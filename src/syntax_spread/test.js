let arr = {
    a:1, 
    b:2, 
    c:3
}

let newArr = {
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