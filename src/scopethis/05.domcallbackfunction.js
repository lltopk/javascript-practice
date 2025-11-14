//dom元素比较特殊, dom的监听器(回调函数)中, 普通函数拥有自己this, 指向dom元素本身

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
  initWithArrors() {
    console.log("initWithArrors",this); // ✅ this 是 handler 对象
    // ✅ 箭头函数，继承 init 方法的 this
    Button.addEventListener('click', () => {
      console.log("initWithArrors",this.name); // ✅ ‘Alice’
    });
  }
};

handler.initDefaultDom();
handler.initWithArrors();
