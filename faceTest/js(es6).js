一、es6新特性
二、常用js类的定义方法有哪些？
构造函数和原型
每一个对象都有一个__proto__的私有属性，指向原型对象。
每一个对象都有一个contructor的属性，指向构造函数。
每一个函数都有一个prototype的属性，指向原型对象。
所以，如果a是一个对象，那么 a.__proto__ = a.constructor.prototype
三、js类继承的方法
四、js是函数作用域为基本作用域
五、js里this指的什么
this是函数中的概念，它的指向由这个函数怎么样被调用来决定。而且它的值是在运行时才能知道具体的指向。指向当前代码
正在执行的上下文
分为普通函数调用、对象的函数调用、构造函数调用、bind／apply／call对this的影响、箭头函数
6.apply、bind、call的区别
7.什么是闭包？闭包有哪些用处？平时什么情况下会用到？
8.js常用设计模式的设计思路
9.数组常用的方法
10.字符串常用的方法
11.js生成对象的几种方式
// i) new Object() ii) 对象字面量 iii) 构造函数 new iv）class
12.嵌套数组的拍平
13.用promise的其他方法，实现promise.all

promise有哪些方法？？es6提供的，有哪些方法？？？
用promise的构造函数将一些异步操作封装成一个promise。然后就可以用到promise
提供的各种方法
一个promise的状态：
如果执行了resolve方法，则变成fufilled
如果执行了reject方法，则变成rejected
没有返回结果；pending
new Promise((resovle, reject) => {
  // 一些异步操作
  // 成功方法
  resolve(data)
  // 错误方法
  reject(data)
})

方法：
Promise.all
Promise.resolve
Promise.reject
Promise.prototype.catch()
Promise.prototype.then()
Promise.prototype.finally()

Promise.all = function (promiseArr) {
  return new Promise((resolve, reject) => {
    var resArr = []
    var len = promiseArr.length
    promiseArr.map((item, index) => {
      Promise.resolve(item).then((data) => {
        resArr.push(data)
        if (index == len - 1) {
          resolve(resArr)
        }
      }, (err) => {
        reject(err)
      })
    })
  })
}

// promise封装异步请求 使用
request.get('./conan-weixin/get').then(res => {
  console.log(res)
})


/*
 * 常用js方法
 */
// Object的方法

// Object.keys获取object的所有属性数组
var a = { name: 'wfz', age: 45 }
Object.keys(a) // 
// Object.hasOwnProperty 自己的属性，不是从原型那继承来的属性
a.hasOwnProperty('name')
// Object.defineProperty 定义对象的某个属性
Object.defineProperty(a, 'sex', {
  value: 'female',
  writable: true,
  enumberable: true,
  configurable: true
})
// Object.assign 复制一个对象到另一个对象
Object.assign({}, a)

// 创建类的方式，2种，构造函数和class。class是构造函数的语法糖