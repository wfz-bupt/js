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
1.es6新特性
2.常用js类的定义方法有哪些？

3.构造函数和原型
3.js类继承的方法
4.js是函数作用域为基本作用域
5.js里this指的什么
5.闭包
5.es5实现class
5.es5实现new
6.apply、bind、call的区别
7.什么是闭包？闭包有哪些用处？平时什么情况下会用到？

8.js常用设计模式的设计思路
9.数组常用的方法
10.字符串常用的方法
11.js生成对象的几种方式
// i) new Object() ii) 对象字面量 iii) 构造函数 new iv）class
12.嵌套数组的拍平
13.用promise的其他方法，实现promise.all
14.怎样获取document.body里有几个标签
15.怎样获得元素的方法
16.怎样获取对象有哪些方法？
17.throttle和debounce实现，区别、第一次一定生效
Object.getOwnPropertyNames(Object.__proto__)

18.promise有哪些方法？？es6提供的，有哪些方法？？？
18.用promise的构造函数将一些异步操作封装成一个promise。然后就可以用到promise
19.输出什么(融360)
console.log(1)
setTimeout(() => { console.log(2) }, 0)
console.log(3)
new Promise((resolve, reject) => {
  resolve()
}).then(() => {
  console.log(4)
})
20.vue watch的用法
21.目前正在读的技术书
22.输出什么（融360）
a = 2
function fn(a) {
  alert(a)
  a = 1 // 相当于对参数赋值，跟外面的a没关系
  alert(a)
}
fn()
alert(a)
// 参数相当于函数里的变量，相当于：var a。
23.用正则表达式实现trim方法，正则表达式一定要记牢
24.类的成员的存储问题，基本数据类型、引用类型和原型，举例
function A (name) {
  // this.name = name
  // this.list = [1, 2]
  // this.sayName = function () {
  //   console.log(this.name)
  // }
}
A.prototype.sayName = function () {
  console.log(this.name)
}
A.prototype.name = 'a'
A.prototype.list = [1, 2]
var a1 = new A('a')
var a2 = new A('a')
console.log(a1.sayName === a2.sayName) //console
console.log(a1.name === a2.name)
a1.name = 'b' // 赋值的操作：没有查询的步骤，直接在对象上新增一个属性，而不是在prototype上新增。
// 但是查找的时候，会遵循：对象上查询--如果没有则在prototype上查询
console.log(a1.name === a2.name)
a1.list.push(3)
console.log(a1.list === a2.list)
25.如何知道动画已经结束了？seTimeout(() => {}, 1000)? 其实有一个事件可以监听动画是否结束

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




this系统化学习
值：当前执行代码的环境对象
1.全局环境下
无论是否在严格环境下，this都指向window全局对象
2.函数（运行内）环境
在函数内部，this的值取决于函数被调用的方式
2.1 简单调用
非严格模式下，this的值为全局对象，严格模式下为undefined
2.2 bind方法
this被永久的绑定到了bind的第一个参数
2.3 箭头函数
在箭头函数中，this的值与封闭词法环境的this保持一致。即与this被创建时的对象一致。
2.4 作为对象的方法
当函数作为对象的方法被调用时，this指向调用该函数的对象
2.5 原型链中的 this
如果该方法位于对象原型链上，那么，this指向调用这个方法的对象，就好像该方法在此对象上一样
2.6 getter与setter中的 this
this指向设置或者获取该属性的对象
2.7 作为构造函数时
指向构造函数正在构造的对象
2.8 作为一个dom事件处理函数
this指向currentTarget
2.9 作为内联事件处理函数
this指向监听器所在的dom元素


正则表达式系统化学习
正则表达式在js中也是一种对象，用于匹配字符串中 字符组合的模式。被用于RegExp的exec和test方法
和string的match、search、replace、split方法
1.创建一个正则表达式
/pattern/flags
2.编写一个正则表达式的模式
2.1 简单的模式
/abc/
2.2 使用特殊字符
*: 0个或者多个, 相当于{0,}，例如：/3*/
+: 1个或者多个，相当于{1,}, 例如：/3+/
?: 0个或者多个，相当于{0,1},例如：/3?/
[a.]: 匹配[]中的任意一个
[^a.]: 反向
\d: 匹配一个数字，例如/\d+/
\D: 匹配非数字字符
\n: 匹配换行符
\s: 匹配一个空白字符
\S: 匹配一个非空白字符
\w: 匹配一个单字字符，（数字、字母、下划线）
\W: 匹配一个非单字字符
3. 使用正则表达式
使用正则表达式的方法
exec、test、match、search、replace、split
正则表达式执行返回信息
i）匹配到的字符串和所有被记住的字符串
i）匹配到的以0开始的索引值
i）初始字符串
3.1 使用括号的子字符串匹配
使用括号，会记住括号内的子匹配
3.2 通过标志进行高级搜索
g：全局搜索
i: 不区分大小写搜索
m：多行搜索
4、例子
4.1 改变输入字符串的顺序
4.2 用特殊字符检验输入

原型链系统学习
promise系统学习
算法
vue
https系统学习

