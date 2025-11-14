// 上了框架如Spring/Vue之后, 框架不仅仅拥有了扫描用户组件/函数的能力, 同时框架也拥有自己的特定函数/组件, 
// 在触发用户回调函数的时候, 可以将某些框架机制/组件/接口(函数)作为参数传递给用户定义的回调函数.
// (这在Spring中很常见),以便在回调函数中使用这些参数进行自定义逻辑处理.

// 而在前端世界中, 就是ElementUI, 典型的场景是触发用户自定义的校验函数的时候, 会给用户传递一些特定参数, 以便用户在回调函数中使用这些参数.
// UI框架传递给用户回调函数的参数1: rule：当前验证规则对象（即 { validator: checkAge, trigger: 'blur' } 这个对象）
// UI框架传递给用户回调函数的参数2: value：当前表单项的值（比如用户输入的年龄）
// UI框架传递给用户回调函数的参数3: callback：由 Element UI 提供的一个函数，用于告诉验证系统：“我验证完了，结果是成功还是失败”

// 见: https://github.com/lltopk/vue2-practice/blob/main/src/components/ElForm.vue
// 参考: https://element.eleme.cn/#/zh-CN/component/form
