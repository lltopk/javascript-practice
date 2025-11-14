function showThis() {
    console.log("showThis", this);

    const obj = {
        newFn() {
            console.log("newFn", this);//obj是对象, 因此有自己的this 打印newFn {newFn: ƒ, newFunctional: ƒ}
        },
        newFunctional: () => {
            console.log("newFunctional", this);//函数式继承自外部this === showThis this
        }
    };
    obj.newFn();
    obj.newFunctional();
}

showThis(); // window