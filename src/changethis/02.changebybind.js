function showThis() {
    console.log("showThis", this);

    function newFunction() {
        console.log("newFunction", this); // this 默认与showThis一致,  但也可以由 bind 改变
    }

    newFunction();
    //bind不会立即执行函数, 而是先返回一个新函数
    const boundFunction = newFunction.bind({ name: "bindThis" });
    boundFunction(); // 打印的 this 是 { name: "bindThis" }
}

showThis(); // window