// b. 类似于C函数指针, 我们也经常传递函数(具名函数/箭头函数)作为参数进行传递，以便在特定事件发生时执行自定义逻辑。
// 这种回调函数是我们用户自己显式传递给某功能函数的, 最好理解

// 1. 异步操作中的回调函数
setTimeout(() =>{
    console.log("This message is shown after 2 seconds");
}, 2000);

// 2. 数据验证中的回调函数
let validator = (input, callback)=> {
    const isValid = input.length > 0;
    callback(isValid);
}
validator("test", (isValid)=> {
    if (isValid) {
        console.log("Input is valid");
    } else {
        console.log("Input is invalid");
    }
});

// 3. 使用 async/await 处理异步操作
async function fetchData() {
    let data = await new Promise((resolve) => {
        setTimeout(() => resolve("Data fetched!"), 1000);
    }
    );
    console.log(data);
}
fetchData();

// 4. 使用回调函数进行数组操作
let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(function(num) {
    return num * 2;
}
);
console.log(doubled); // [2, 4, 6, 8, 10]
let filtered = numbers.filter(num => num > 2);
console.log(filtered);// [3, 4, 5]
let fruits = ["banana", "apple", "cherry"];
fruits.sort((a, b)=> {
    return a.localeCompare(b);
}
);
console.log(fruits);// ["apple", "banana", "cherry"]

let sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum); // 15

//5. 表单验证
// 下面是一个简单的例子, 模拟了一个表单验证的场景.
// 用户定义了一个自定义验证函数, 并将其传递给表单组件.
// 当用户提交表单时, 表单组件会调用用户定义的验证函数, 并传递表单数据作为参数.
class Form {
  constructor(validator) {
    this.validator = validator; // 用户传递的验证函数
    this.data = { username: '', password: '' };
  }
  submit() {
    const isValid = this.validator(this.data); // 调用用户定义的验证函数
    if (isValid) {
      console.log("Form submitted successfully!");
    } else {
        console.log("Form submission failed. Validation error.");
    }
  }
}

// 用户定义的自定义验证函数
function customValidator(data) {
  return data.username.length > 0 && data.password.length >= 6;
}
// 创建表单实例, 并传递自定义验证函数
const myForm = new Form(customValidator);
// 模拟用户填写表单数据
myForm.data.username = "user1";
myForm.data.password = "password123";
// 提交表单, 会调用自定义验证函数
myForm.submit(); // 输出: Form submitted successfully!

// 通过这种方式, 用户定义的回调函数(customValidator)被传递给了表单组件(Form), 
// 并在适当的时候(提交表单时)被调用, 实现了自定义的验证逻辑.