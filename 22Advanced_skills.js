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
用于创建已经设置好了一个或者多个参数的函数。例子：
22.2 放篡改对象
22.2.1 不可扩展对象
默认情况下，所有对象都是可以拓展的，也就是说，任何时候，都可以向对象中添加属性和方法。但是如果使用Object.preventEx
tensions, 可以改变这个行为，使得不能够再给对象添加属性和方法。例如
var person = { name: "wfz"};
Object.preventExtensions(person);
person.age = 26;//no
22.2.2 密封的对象
密封对象不可拓展，而且已有成员的[[Configurable]]特性将被设置为false。使用Object.seal()来密封对象。
22.2.3 冻结的对象
最严格的防篡改级别是冻结对象，既不可拓展、又是密封的、而且对象数据属性的[[writable]]特性为false，调用
Object.freeze()来冻结对象。
22.3 高级定时器
js是单线程，主线程用来执行代码，另外还有一个代码队列，用来存放下一个要执行的代码。
定时器的工作方式是，在特定时间过去后，将代码插入到代码队列，表示，并不能保证在特定的时间后会立即执行。
22.3.1 重复的定时器
当使用setInterval时，仅当队列中没有任何定时器代码实例时，才将定时器代码添加到队列中，这样导致的两个问题：
1.某些间隔会被跳过 2.多个定时器的代码执行之间的间隔可能会比预期的小。
解决方法：使用链式setTimeout调用。
setTimeout(function(){
    setTimeout(arguments.callee, interval);
},interval)
22.3.2 Yieliding Processes
运行在浏览器中的js被分配了一个确定数量的资源，如果代码运行超过特定的时间，或者特定语句数量，就不让它继续执行，会弹出一个
浏览器错误的对话框。
数组分块技术：如果某个函数在对数组的每一项循环执行，并且执行时间超过50ms，那么，就可以考虑用数组分块，给予其他js执行的
时间，避免页面阻塞。
例子
22.4 自定义事件
事件是利用了观察者的设计模式，观察者模式由两类对象组成：主体和观察者，主体负责发布事件，观察者通过订阅这些事件来观察
该主体。是一种创建松散耦合代码的技术。
自定义事件的例子：
也可以让其他类继承这个事件类，
22.5 拖放
最简单的拖放界面可以用以下代码实现
例子
22.5.1 修缮拖动功能
拖动时，指针跑到元素的左上角，而不是初始拖拽的地方，解决办法，例子
22.5.2 添加自定义事件
在元素拖动时，希望与外界进行交互，通信。所以。添加一些fire事件
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
// 函数柯里化
function curry(fn){
    var args = Array.prototype.slice.call(arguments, 1);
    return function(){
        var innerArgs = Array.prototype.slice.call(arguments);
        var finalArgs = args.concat(innerArgs);
        return fn.apply(null, finalArgs);
    };
}
// 函数分块
function chunk(array, process, context){
    setTimeout(function(){
        var item = array.shift();
        process.call(context, item);
        if(array.length){
            setTimeout(arguments.callee, 100);
        }
    }, 100);
}
// 自定义事件
function EventTarget(){
    this.handlers = {};
}

EventTarget.prototype = {
    constructor: EventTarget,
    addHandler: function(type, handler){
        if(typeof this.handlers[type] == "undefined"){
            this.handlers[type] = [];
        }
        this.handlers[type].push(handler);
    },
    fire: function(event){
        if(event.target){
            event.target = this;
        }
        if(this.handlers[event.type] instanceof Array){
            var handlers = this.hanlders[event.type];
            for(var i=0; i < handlers.length; i++){
                handlers[i](event);
            }
        }
    },
    removeHandler: function(type, handler){
        if(this.handlers[type] instanceof Array){
            var handlers = this.handlers[event.type];
            for(var i=0; i<handlers.length; i++){
                if(handlers[i] === handler){
                    break;
                }
            }
            handlers.splice(i,1);
        }
    }
}
// 拖放
var DragDrop = function(){
    var dragdrop = new EventTarget(),
        dragging = null,
        diffX = 0,
        diffY = 0;
    function handleEvent(event){
        event = EventUtil.getEvent(event);
        var target = EventUtil.getTarget(event);
        switch(event.type){
            case "mousedown": 
                if(target.className.indexOf("draggable") > -1){
                    dragging = target;
                    diffX = event.clientX - target.offsetLeft;
                    diffY = event.clientY - target.offsetTop;
                    dragdrop.fire({
                        type: "dragstart", target: dragging, x: event.clientX, y: event.clientY
                    });
                }
                break;
            case "mousemove":
                if(dragging !== null){
                    dragging.style.left = (event.clientX - diffX) + "px";
                    dragging.style.top = (event.clientY - diffY) + "px";
                    dragdrop.fire({
                        type: "drag", target: dragging, x: event.clientX, y: event.clientY
                    });
                }
                break;
            case "mouseup":
                dragdrop.fire({
                    type: "dragend", target: dragging, x: event.clientX, y: event.clientY
                });
                dragging = null;
                break;
        }
    };
    
    dragdrop.enable = function(){
        EventUtil.addHandler(document, "mousedown", handleEvent);
        EventUtil.addHandler(document, "mousemove", handleEvent);
        EventUtil.addHandler(document, "mouseup", handleEvent);
    };
    dragdrop.disable = function(){
        EventUtil.removeHandler(document, "mousedown", handleEvent);
        EventUtil.removeHandler(document, "mousemove", handleEvent);
        EventUtil.removeHandler(document, "mouseup", handleEvent);
    };
    return dragdrop;
}();
