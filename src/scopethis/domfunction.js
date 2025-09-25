const Button = document.getElementById('myBtn'); // 获取按钮

const handler = {
  name: 'Alice',
  initDefaultDom() {
    // ❌ 普通函数，this 指向 button（DOM 元素）
    Button.addEventListener('click', function() {
        console.log('initDefaultDom:', this); // ✅ this 是 button
        console.log("initDefaultDom", this.name); // ❌ undefined
    });
  },
  initWithFunctional() {
    console.log("initWithFunctional",this); // ✅ this 是 handler 对象
    // ✅ 箭头函数，继承 init 方法的 this
    Button.addEventListener('click', () => {
      console.log("initWithFunctional",this.name); // ✅ ‘Alice’
    });
  }
};

handler.initDefaultDom();
handler.initWithFunctional();
