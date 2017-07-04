/*
ECMAScript Harmony
也就是es6的前身
A.1一般性变化
A。1.1
const 常量
contst FLAG ＝ false
A。1.2 块级作用域及其他作用域
在代码块中使用let定义变量，这个变量作用域就是块级作用域
在js中使用块级作用域，可以更精细的控制代码执行过程中变量的存废
A。2 函数
A。2.2 剩余参数与分布参数
不再有arguments对象，但是有剩余参数，例子,剩余参数对象是array的实例，
分布参数
var result = sum(...[1,2,3,4]);相当于
sum.apply(this,[1,2,3,4])
A.2.2  默认参数值
function sum(num1,num2=0){
    return num1 + num2;
}
A.2.3 生成器
就是一个对象，每次能生成一系列值中的一个，例子
A。3 数组及其他结构
A。3.1 迭代器
harmony为各种类型的对象都定义了迭代器。
例子
A.3.2 数组领悟
用一组符合某个条件的值来初始化数组
var numbers = [0,1,2,3];
var duplicate = [i for each (i in numbers)]; //将所有元素复制到新数组
var events = [i for each (i in numbers) if (i % 2 == 0)]; //偶数
A。3.3 解构赋值
var {name: personName, age: personAge} = {
    name: "wfz",
    age: 25
}
A.4 新对象类型
A。4.1 代理对象
一个表示接口的对象，对它的操作不一定作用在代理对象本身，
创建代理对象，Proxy.create(handler)
功能：能够通过api只公开部分信息，同时还能对数据源进行全面控制
要确保代理对象能够按照预期工作，至少要实现以下7种基本的捕捉器。
getOwnPropertyDescription: 当在代理对象上调用Object.getOwnPropertyDescription时调用的函数
getPropertyDescription\getOwnPropertyNames等等
除了7种基本的捕捉器，还有6个派生的捕捉器，
has，在对象上使用in操作时调用的函数
hasOwn：在代理对象上调用hasOwnProperty时调用的函数
get：在读取属性时
set：在设置属性时
enumerate
keys
A。4.2 代理函数

A。4.3 映射与集合
Map类型，也称为简单映射
基本api包括，get、set、delete
还有set类型，只有键
A。4.4 weakMap
存储键值对，键必须是对象，对象不存在时，键值对就会被删除
A。4.5 StructType
结构类型
js一个最大的不足是使用一种数据类型表示所有数值
可以指定特定数据类型用几位存储
var Size = new StructType({width: uint32, height: uint32 });
int8、uint8
A。4.6 ArrayType
数组类型
var SizeArray = new ArrayType(Size, 2);
var boxes = new BoxArray([{width: 1,height: 2},{width: 3,height: 4}])
A.5 类
使用新语定义的类,例子
A。5.1 私有成员
A。5.2 getter和setter
A.5.3 继承
A。6 模块
*/
// 剩余参数
function sum(num1,num2, ...num){
    var result = num1 + num2;
    for(let i=0, len=nums.length; i<len; i++){
        result += nums[i];
    }
    return result;
}
var result = sum(1,2,3,4);
// 生成器
function myNumbers(){
    for (var i=0; i<10; i++){
        yield i * 2;
    }
}
var generator = myNumbers();
generator.next(); //依次生成0、2、4、。。。、18
 //迭代器，第一次返回["name","wfz"],第二次返回["age",29],如果是数组，则返回[0,"wfz"],[1,29]
var person = {
    name: "wfz",
    age: 29
};
var iterator = new iterator(person);
try{
    while(true){
        let value = iterator.next();
    }
}catch(ex){

}

class Person{
    constructor(name, age){
        public name = name;
        public age = age;
        private innerTitle = "";
        get title(){
            return innerTitle;
        }
        set title(value){
            innerTitle = value;
        }
    }
    sayName(){

    }
    getOlder(){

    }
}

