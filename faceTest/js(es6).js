一、es6新特性
二、常用js类的定义方法有哪些？
构造函数和原型
三、js类继承的方法
四、js是函数作用域为基本作用域
五、js里this指的什么
this是函数中的概念，分为
普通函数调用、对象的函数调用、构造函数调用、bind／apply／call对this的影响、箭头函数
6.apply、bind、call的区别
7.什么是闭包？闭包有哪些用处？平时什么情况下会用到？
8.js常用设计模式的设计思路
9.数组常用的方法
10.字符串常用的方法
11.js生成对象的几种方式

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



