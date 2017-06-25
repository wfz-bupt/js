/*
22 高级技巧
javascript是一种极其灵活的语言，具有多种使用风格，一般来说，编写js要么使用过程方式，要么使用面向对象方式。然而，由于它
天生的动态属性，这种语言还能使用更为复杂和更为有趣的模式
22.1 高级函数
22.1.1 安全的类型检测
Object.prototype.toString.call  这个函数跟window无关，能进行准确的类型检测。
22.1.2 作用域安全的构造函数
function Person(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;
}
如果没有用new操作符调用函数，就会往window上添加很多无用的属性。
作用域安全的构造函数：
function Person(name, age, job){
    if(this instanceof Person){
        this.name = name;
        this.age = age;
        this.job = job;
    }else{
        return new Person(name, age, job);
    }
}
除非你单纯基于构造函数窃取来实现继承，否则推荐作用域安全的构造函数作为最佳
实践。
22.1.3 惰性载入函数
惰性载入表示函数执行的分支只会发生一次，不用每次都执行if else。方法为在第一次调用的过程中，用一个合适的函数覆盖执行的函数
22.1.4 函数绑定
很多js库实现了可以将函数绑定到指定环境的函数，这个函数一般叫做bind，例子
22.3.3 函数节流
某些代码不可以在没有间断的情况下连续重复执行。
throttle函数，例子
ECMAScript5 为所有函数定义了一个原生的bind方法，fn.bind(this)
支持的浏览器有 IE9+、ff4+ chrome，它们主要用于事件处理程序、setTimeout和setInterval，但是，被绑定函数与普通函数
相比有更多的开销，需要更多内存，同时也因为多重函数调用稍微慢一些，所以，最好只在必要时使用。
22.1.5 函数柯里化

*/
function throttle(method, context){
    clearTimeout(method, tId);
    method.tId = setTimeout(function(){
        method.call(context);
    }, 100);
}

function bind(fn, context){
    return function(){
        return fn.apply(context, arguments);
    }
}
