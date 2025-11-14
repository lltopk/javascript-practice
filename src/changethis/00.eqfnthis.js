function showThis() {
    console.log("showThis",this);

    newFunction();
    function newFunction() {
        console.log("newFunction",this);
    }
}

showThis();//两个this相同


//当没有对象obj 没有构造器的场景下, 普通函数newFunction 没有自己的 this。
//这里是普通调用，所以和外层一样，都是 window