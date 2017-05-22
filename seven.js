/*
第七章：函数表达式 闭包
创建函数的方式：函数声明和函数表达式
函数声明的一个重要特征：函数声明提升
当函数被调用时，会创建一个执行环境和作用域链，然后用命名参数初始化活动对象。
每个函数都对应一个变量对象，一个执行环境和作用域链，作用域链其实就是指针的集合，指针
指向变量对象。执行环境里面包含变量对象。
全局执行环境的变量对象始终存在。
1.闭包的缺点：必包会携带包含它的函数作用域，因此，比其它函数占用更多的内存，过度使用
必包会导致内存占用过多，建议在绝对必要的时候才使用闭包
2.闭包只能取得包含函数的最后一个值，因为内部函数运行的时候，外部函数早都已经运行完毕了
this对象
匿名函数指向具有全局性，一般指向window
闭包存在内存泄露现象：如果闭包的作用域链中保存着一个html元素，那么这个元素将没法销毁
*/
sayHi(); //不会报错
function sayHi(){
	console.log("hi");
}

sayHi();//报错
sayHi = function(){
	console.log("hi");
}
//闭包实例begin
function createComparisonFunction(propertyName){
	return function(object1,object2){
		var value1 = object1[propertyName];
		var value2 = object2[propertyName];
		if(value1 < value2){
			return -1;
		}else{
			return 1;
		}
	}
}
[{name:"wfz"},{name: "thy"}].sort(createComparisonFunction("name"));
function createFunctions(){
	var result = new Array();
	for(var i=0; i<10; i++){
		result[i] = function(){
			return i;
		}
	}
	return result;
}
console.log(createFunctions());
function createFunctions(){
	var result = new Array();
	for(var i=0; i<10; i++){
		result[i] = (function(num){
			return function(){
				return num;
			}
		})(i)
	}
	return result;
}
//闭包实例end

//匿名函数的this指向全局变量window
var name = "The window";
var object = {
	name: "my object",
	getNameFunc: function(){
		return function(){
			return this.name;
		}
	}
};
object.getNameFunc()(); //the window
//如果想让this指向object，需要
var name = "The window";
var object = {
	name: "my object",
	getNameFunc: function(){
		var that = this;
		return function(){
			return that.name;
		}
	}
};
/*
7.3模仿块级作用域
js没有块级作用域概念，只有函数作用域
js不会告诉你是否多次声明了同一个变量，它会对后续的声明视而不见,但会执行后续声明中的变量初始化
用匿名函数来代替块级作用域，无论什么时候，如果临时需要一些变量，就可以使用私有作用域
任何在函数中定义的变量都是私有变量，利用闭包，能够创建访问私有变量的公有方法
一个构造函数是一个类，有它的方法和属性，外部函数无法访问它内部的成员，所以，这些内部
成员是私有变量，但是，可以通过闭包的方式访问，即内部返回一个函数，这个函数包含想要
访问的成员引用。
7.4.1静态私有变量
在私有作用域中定义私有变量和函数，也可以创建特权方法.
7.4.2模块模式，模块模式为单例对象创建特权方法,用对象字面量来创建单例对象
在web应用中，我们经常需要一个单例来管理应用程序级的信息，可以用模块模式
7.4.3增强的模块模式

*/
function outputNames(count){
	for(var i=0; i<count; i++){
		console.log(i);
	}
	var i;//忽视后续声明
	console.log(i);//4
}
outputNames(4);
//用作块级作用域的匿名函数的语法
(
	function(){
		//这里是块级作用域
	}
)();
//临时的变量被私有作用域包裹
function outputNames(count){
	(function(){
		for(var i=0; i<count; i++){
			console.log(count);
		}
	})();
	console.log(i);
}
//利用闭包访问函数内部的私有变量,缺点是，每一个实例都会有特权方法，占用内存
//为自定义类型创建特权方法
function MyObject(){
	var privateVariable = 10;
	function privateFunction(){
		return false;
	}
	this.publicMethod = function(){
		privateVariable++;
		return privateFunction();
	}
}
console.log(new MyObject().privateVariable);
//在私有作用域中定义私有变量或者函数
//为自定义类型创建特权方法的另一个方法
(function(){
	var privateVariable = 10;
	function privateFunction(){
		return false;
	}

	MyObject = function(){

	};
	MyObject.prototype.publicMethod = function(){
		privateVariable++;
		return privateFunction();
	}
})();
//单例
var singleton = {
	name: value,
	method: function(){

	}
};
//模块模式创建特权方法
var singleton = function(){
	var privateVariable = 10;
	function privateFunction(){
		return false;
	}
	return {
		publicProperty: true,
		publicMethod: function(){
			privateVariable++;
			return privateFunction();
		}
	};
}();
console.log(singleton);
/*
function (){
	
}();错误！

(function (){
	
})();正确！

var abc = function(){}();正确
*/

