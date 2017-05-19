/*第六章：面向对象的程序设计
*6.1理解对象
每个对象都是基于一个引用类型创建的。对象就是key和value的集合
属性类型：ES有两种属性：数据属性和访问器属性
数据属性，可以读取和写入值，数据属性有4个描述其行为的特性
[[Configurable]]:能否通过delete删除属性从而重新定义属性，能否修改属性的特性,直接在
对象上定义的属性，默认为true，更改不可逆
[[Enumerable]]：能否通过for-in循环返回属性，直接在对象上定义的属性，默认为true，
如果改为了false，将无法改回true
[[Writable]]:能否修改属性的值，直接在对象上定义的属性，默认为true
[[Value]]:具体的值，读取和写入这个属性值的时候，都从这个位置操作，默认为undefined
要修改属性默认的特性，需要使用Object.defineProperty
访问器属性：
访问器属性不包含数据值，包含一对getter和setter函数。在读取访问器属性时，会调用getter
函数
访问器属性有下列4个特性
[[Configurable]]:表示能否通过delete删除属性从而重新定义属性，能否修改属性的特性。
[[Enumberable]]:能否通过for in循环返回属性
[[Get]]:在读取属性时调用的函数
[[Set]]:在写入属性时调用的函数
访问器属性不能直接定义，只能通过Object.defineProperty定义

读取属性特性
Object.getOwnPropertyDescriptor方法，取得给定属性的描述符
*
*/
function property_test(){
	var person  = {};
	Object.defineProperty(person,"name",{
		writable: false,
		value: "Nicholas"
	});//person的name属性不可更改
}

function get_set_test(){
	var book = {
		_year: 2004,
		edition: 1
	};
	Object.defineProperty(book,"year",{
		get: function(){
			return this._year;
		},
		set: function(newValue){
			if(newValue>2004){
				this._year = newValue;
				this.edition += newValue - 2004;
			}
		}
	});
	book.year = 2005;
	console.log(book.edition);
}
function defineProperties_test(){
	var book = {};
	Object.defineProperties(book,{
		_year:{
			writable:true,
			value: 2004,
		},
		edition:{
			writable:true,
			value:1
		},
		year:{
			get: function(){
				return this._year;
			},
			set: function(newValue){
				if(newValue>2004){
					this._year = newValue;
					this.edition += newValue - 2004;
				}
			}
		}
	});
	var descriptor = Object.getOwnPropertyDescriptor(book,"_year");
	descriptor.value//2004
	descriptor.configurable//false
}
/* 6.2 创建对象
1.工厂模式: var o = new Object() ,return o;
解决对象字面量会产生大量重复代码的问题，
无法解决：判断对象的类型
2.构造函数模式: new Person()
任何函数，都可以通过new调用，那么他就是构造函数。反之则为普通函数
解决：构造特定类型的对象
问题：每个方法都要在每个对象上重新创建一遍
3。原型模式
每个函数都有一个原型属性，这个属性是一个指针，指向一个对象，这个对象的用途是包含可以由
特定类型的所有实例共享的属性和方法。
好处：让所有对象实例共享它包含的属性和方法
为什么实例共享了属性和方法？
因为，在访问实例的某个属性时，会先在实例中找，如果没有则向实例指向的原型中找。
判断某个属性存在与实例中，还是存在于原型中，判断方法为：hasOwnProperty
in操作符：属性 in 对象，如果能通过对象访问到属性，则返回true
用for in可以枚举对象，返回所有能通过对象访问的、可枚举的属性。包括屏蔽了原型中不可
枚举属性的实例属性。
Object.keys():所有可枚举的实例属性
Object.getOwnPropertyNames():获取所有实例属性，无论是否可枚举
3.1更简单的原型模式
原型对象更大的问题：想要每个对象实例保存有自己的属性，共享方法
所以，一般来说，没有单独使用原型模式创建数据类型的，都是采用构造函数模式和原型模式
联合的方法
4。不常见的小众的方法
动态原型模式、寄生构造函数模式、稳妥构造函数模式
*/
//工厂模式 创建对象
function createPerson(name,age,job){
	var o = new Object();
	o.name = name;
	o.age = age;
	o.job = job;
	o.sayName = function(){
		console.log(this.name);
	}
	return o;
}
var person1 = createPerson('wfz',25,'teach');
var person2 = createPerson('thy',23,'dd');

//构造函数模式 创建对象
function Person(name,age,job){
	this.name = name;
	this.age = age;
	this.job = job;
	this.sayName = function(){
		console.log(this.name);
	}
}
var person1 = new Person('wfz',25,'teach');
var person2 = new Person('thy',23,'dd');
//原型模式构建对象
function Person(name){
	this.name = name;
}
Person.prototype.name = 'Nicholas';
Person.prototype.age = 29;
Person.prototype.job = 'Soft';
Person.prototype.sayName = function(){
	console.log(this.name);
}
new Person().hasOwnProperty('name'); //fasle
name  in new Person(); //true
for key in new Person('wfz')
	console.log(key); //实例和原型中所有可枚举属性
Object.keys(new Person('wfz'));
Object.getOwnPropertyNames(new Person('wfz'));

/*
更简单的原型模式
与原型模式的区别：原型对象的constructor不再指向构造函数，因为重写了prototype对象
解决办法：手动添加constructor
*/
function Person(){

}
Person.prototype = {
	constructor: Person,
	name: 'wfz',
	age: 29,
	job: 'tea',
	sayName: function(){
		console.log(this.name);
	}
};
/*组合使用两种方法
构造函数模式和原型模式共用, 目前是使用最广泛、认同度最高的创建自定义类型的方法
*/
function Person(name,age,job){
	this.name = name;
	this.age = age;
	this.job = job;
	this.friends = ["s","c"];
}
Person.prototype = {
	constructor: Person,
	sayName: function(){
		console.log(this.name);
	}
}
//动态原型模式
function Person(name,age,job){
	this.name = name;
	this.age = age;
	this.job = job;
	if(typeof this.sayName !== "function"){
		Person.prototype.sayName = function(){
			console.log(this.name);
		}
	}
}
/*
6.3继承
js通过原型链实现继承
本质上是 原型搜索机制，即如果实例中没有，则向上搜索原型
确定实例和原型间的关系，方法：instanceof、isPrototypeOf
只要实例所在的原型链中出现的原型，都会返回true
原型链的问题：
1.父类的实例现在是原型，实例中的属性是实例单独享有的，现在变成子类共享的，不合理。
2.没办法向父类中传递参数
实际使用中，很少单独使用原型链实现继承
多数情况下使用借用构造函数和原型链组合的继承方法，优点：父类希望独有的属性，子类依然会独有。
借用构造函数：为了继承并独享属性  原型链：为了共享某些属性和方法
缺点：会调用两次 超类型的构造函数

其它3种不常见的继承方法：
1.原型式继承：
2.寄生式继承
3.寄生组合式继承：开发人员普遍认为，寄生组合式继承是引用类型最理想的继承范式
*/
//原型链继承
function SuperType(name){
	this.name;
}
SuperType.prototype.sayName = function(){
	console.log(this.name);
}
function SubType(name){
	this.name = name;
}
subType.prototype = new SuperType();
new SubType("wfz").sayName();
new SubType("wfz") instanceof Object; //true
new SubType("wfz") instanceof SuperType; //true
new SubType("wfz") instanceof SubType; //true
//借用构造函数继承
function SuperType(name){
	this.name = name;
}
SuperType.prototype.sayName = function(){
	console.log(this.name);
}
function SubType(name){
	SuperType.call(this,name); //继承了属性，并且独享,传递子类想设置的属性值
}
SubType.prototype = new SuperType("wfz");
console.log(new SubType().sayName());
//原型式继承,相当于浅复制对象。基本类型值会独享，引用类型值会共享，除非，重写了值，
//切断了指针和数据间的联系
function object(o){
	function F(){};
	F.prototype = o;
	return new F();
}
var person = {
	name : "wfz"
};
var another = object(person);
another.name = "thy";
console.log(another.name);
//寄生式继承,拥有了original的属性和方法，同时有了自己的方法
function createAnother(original){
	var clone = object(original);
	clone.sayHi = function(){
		alert("hi");
	};
	return clone;
}
