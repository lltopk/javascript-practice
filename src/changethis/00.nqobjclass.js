function showThis() {
    console.log("showThis", this);

    const obj = {
        newFunction: function() {
            console.log("newFunction", this);
        }
    };
    obj.newFunction(); // this 指向新的 obj
}

showThis();