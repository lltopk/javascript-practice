const user = {
  name: 'Alice',
  age: 25,
  sayHello() {
    console.log('Hello, I am ' + this.name); // ✅ this 是 user
  }
};
user.sayHello(); // 输出：Hello, I am Alice
