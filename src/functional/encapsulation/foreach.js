class FuntionalList{
    constructor() {
        this.arr = []
    }

    // 添加元素到集合
    add(item) {
        this.arr.push(item)
        return this
    }

    // foreach 方法，接收一个回调函数
    foreach(callback) {
        if (typeof callback !== 'function') {
            throw new Error('参数必须是一个函数')
        }
        for (let i = 0; i < this.arr.length; i++) {
            //这个回调函数支持3个参数, 当前元素, 当前元素索引, 以及所有元素
            callback(this.arr[i], i, this.arr)
        }
    }

    // find 方法，返回第一个满足条件的元素
    find(callback) {
        if (typeof callback !== 'function') {
            throw new Error('参数必须是一个函数')
        }
        for (let i = 0; i < this.arr.length; i++) {
            if (callback(this.arr[i], i, this.arr)) {
                return this.arr[i]
            }
        }
        return undefined
    }

    // some 方法，判断是否存在满足条件的元素
    some(callback) {
        if (typeof callback !== 'function') {
            throw new Error('参数必须是一个函数')
        }
        for (let i = 0; i < this.arr.length; i++) {
            if (callback(this.arr[i], i, this.arr)) {
                return true
            }
        }
        return false
    }

    // every 方法，判断是否所有元素都满足条件
    every(callback) {
        if (typeof callback !== 'function') {
            throw new Error('参数必须是一个函数')
        }
        for (let i = 0; i < this.arr.length; i++) {
            if (!callback(this.arr[i], i, this.arr)) {
                return false
            }
        }
        return true
    }

    // map 方法，对每个元素进行转换
    map(callback) {
        if (typeof callback !== 'function') {
            throw new Error('参数必须是一个函数')
        }
        const newList = new FuntionalList()
        for (let i = 0; i < this.arr.length; i++) {
            newList.add(callback(this.arr[i], i, this.arr))
        }
        return newList
    }

    // filter 方法，筛选满足条件的元素
    filter(callback) {
        if (typeof callback !== 'function') {
            throw new Error('参数必须是一个函数')
        }
        const newList = new FuntionalList()
        for (let i = 0; i < this.arr.length; i++) {
            if (callback(this.arr[i], i, this.arr)) {
                newList.add(this.arr[i])
            }
        }
        return newList
    }

    // 获取集合长度
    size() {
        return this.arr.length
    }

}

//很多模块的设计初衷就是“导出一个主功能”，比如一个 React 组件、一个工具函数、一个类等。
export default FuntionalList