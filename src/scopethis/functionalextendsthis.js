const user = {
  name: 'Alice',
  age: 25,
  sayHello() {
    console.log('Hello, I am ' + this.name); // ✅ this 是 user
  },
  sayHelloFunctional:()=> {
    console.log('Hello, I am ' + this.name); // ✅ this继承外部, 这里的外部是user的外部, 可能是window或undefined
  }
};
user.sayHello(); // 输出：Hello, I am Alice
user.sayHelloFunctional(); // 输出：undefined
