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
function Person(){

}
Person.prototype.name = 'Nicholas';
Person.prototype.age = 29;
Person.prototype.job = 'Soft';
Person.prototype.sayName = function(){
	console.log(this.name);
}
