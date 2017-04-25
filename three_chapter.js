/*
js数值转换函数：Number、parseInt、parseFloat。
Number函数参数可以是任意类型的数据，而后两个函数参数必须是 字符串。

对象的valueOf和toString方法什么作用？
parseInt函数：
1.解析时，从第一个字符开始解析，直到解析到最后一个字符串，或者解析到一个非数字的字符。
2.第二个参数为指定的解析的进制数，最佳实践：无论什么时候都要指定第二个参数。一般为10
parseFloat
1.解析规则与parseInt相同
2.不用设置基数，它只解析10进制
*/
function Number_parseInt_parseFloat(){
  Number('') = 0;
  parseInt('') = NAN;
  Number('ww22') = NAN;
  parseInt('A',16) = 11; 
  parseFloat('0x2') = 0;
  parseFloat('3.1e2') = 310;
}
/*
string 类型
1.toString方法：转换为string。
number、boolean、对象、string有这个方法，但是null和undefined没有。
2.String函数
参数可以为任意类型的数据。number、boolean、对象、string直接调用toString方法，
null和undefined分别返回 'null' 'undefined'
*/
function toString(){
	var num = 10;
	num.toString() = '10';
	var bool = true;
	bool.toString() = 'true';
}
/*
Object类型
Object的属性和方法
constructor: 保存着用于创建当前对象的函数
hasOwnProperty(propertyName): 检查属性是否存在于对象实例中
isPrototypeOf(object): object1是否是object的原型
propertyIsEnumberable(propertyName): 
toLocalString(): 返回对象的字符穿表示
toString(): 返回对象的字符穿表示
valueOf(): 返回对象的字符串、数值或者布尔值表示，通常用toString方法返回值相同
*/

/*
一元操作符：+ 或 －： 放在变量前面，如果变量为数字，则结果不变。如果非数值，则调用number()
方法。然后再进行后续的操作。－号主要作用是使得变量为负数。
位操作符：
js中，所有数值都以IEEE-754 64位格式存储，但位操作符直接操作32位数据。第32位是
符号位（0为正数、1为负数），正数按照正常的方式存储，负数按照 补码 存储。求一个二进制的数字的补码方式：
绝对值反码＋1。
按位非： ~
按位与：&
按位或：|
按位异或：^
左移：<<
有符号的右移：>>
无符号右移：>>>
*/
function not_and_or_xor_left_right(){
	var num1 = 25;
	var num2 = ~num1;
	// console.log(num2);  -26
	
}
