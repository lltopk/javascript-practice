const user = {
  name: 'Bob',
  greet() {
    // ❌ 普通函数在 setTimeout 中 this 会丢失
    setTimeout(function() {
        console.log('simple Hello: ' + this.name); // ❌ undefined
    }, 1000);
  },
  greetAheadThis() {
    // ✅ 提前保存 this, 给普通形式的回调函数使用
    const self = this;
    setTimeout(function() {
        console.log('functional Hello: ' + self.name); // ✅ ‘Bob’
    }, 1000);
  },
  greetWithFunctional() {
    // ✅ 箭头函数继承外层 greet 的 this
    setTimeout(() => {
        console.log('functional Hello: ' + this.name); // ✅ ‘Bob’
    }, 1000);
  }
};
user.greet();
user.greetAheadThis();
user.greetWithFunctional();
