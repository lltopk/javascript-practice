function showThis() {
    console.log("showThis", this);

    function NewFunction() {
        console.log("newFunction", this);
    }
    new NewFunction(); // this 指向新创建的对象
}

showThis();