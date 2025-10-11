function showThis() {
    console.log("showThis",this);

    newFunction();//普通函数默认传递相同的this
    newFunction.call(this);//普通函数显示传递相同的this
    newFunction.call({ name: "diffThis" }); // 这里传递了一个不同的this对象
    function newFunction() {
        console.log("newFunction",this);
    }
}

showThis(); // window


/**
 * call 和 bind 的区别如下：

call：立即调用函数，并指定 this。
例如：newFunction.call(obj) 会立刻执行 newFunction，并把 this 设置为 obj。

bind：返回一个新的函数，this 永远绑定为指定对象，但不会立即执行。
例如：const fn = newFunction.bind(obj)，fn() 执行时，this 总是 obj。

总结：

call 是“马上执行”，bind 是“返回新函数，之后再执行”。
 * 
 */