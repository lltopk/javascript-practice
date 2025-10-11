const outerThis = this; // 假设是 window 或 undefined

const obj1 = {
  name: 'Obj1',
  logSimple() {
    console.log('logSimple:', this.name); // ✅ ‘Obj1’
  },
  logfunctional: () => {
    console.log('logfunctional:', this === outerThis); // ✅ true
    console.log('logfunctional this.name:', this.name); // 可能是 window.name
  },
};
obj1.logSimple();
obj1.logfunctional();

// 尝试借用 obj1 的两个方法
const obj2 = {
  name: 'Obj2'
};

obj1.logSimple.call(obj2); //方法借用后, 内部this指向新的有效对象obj2，输出 ‘Obj2’
obj1.logfunctional.call(obj2);     //方法借用后, 外部this仍然指向其箭头函数初始定义时的外部this(outerThis), 借用无效，不是 obj2


