function showThis() {
    console.log("showThis",this);

    newFunction();
    function newFunction() {
        console.log("newFunction",this);
    }
}

showThis();

//两个this相同
//newFunction 没有自己的 this。这里是普通调用，所以和外层一样，都是 window