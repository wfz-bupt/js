
function one_test(){
	var s = "1.1"; //+s 1.1  －s: -1.1
	s="z";  //+s NaN  -s:NaN
	s=false; // 0    -s: 0
}
/*
js简单数据类型（基本数据类型）：undefined null boolean number string 
复杂数据类型（引用类型）：object
还有3种基本包装类型（Boolean、number、string）
基本类型没有属性和方法
基本类型、引用类型的声明周期
*/

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
布尔操作符：与(&&)、或(||)、非(!)
非操作符后跟任意类型的变量，结果为true或者false。
或和非操作符，左右两边可以为任意数据类型的变量，返回值不一定非得是true或者false。
例如：Object1 && Object2 = Object2   Object1 || Object2 = Object1
乘性操作符：如果操作符两边不是数值，则调用number()函数转换成数值后再执行操作。

*/
function not_and_or_xor_left_right(){
	var num1 = 25;
	var num2 = ~num1;
	// console.log(num2);  -26
	//位操作符
}
/*
乘性操作符：包括 乘法、除法和取模
乘法：如果有一个操作数为非数值，则调用number方法转换后，再运算
除法：如果有一个操作数为非数值，则调用number方法转换后，再运算
取模：如果有一个操作数为非数值，则调用number方法转换后，再运算
加性操作符：
加号操作符：如果有一个数为字符串，则调用toString方法将另一个数转换为string，再进行字符串
的拼接
减号操作符：如果有一个操作数为字符串，则将字符串用Number函数转换为数字后，再进行数字相减
*/
function cheng_jia_operator(){
	6 * NaN = NaN;
	Infinity * 0 = NaN;
	Infinity * 3 = Infinity;
	Infinity * -3 = -Infinity;
	Infinity * Infinity = Infinity;
	6 * '4' = 24;

	6 / NaN = NaN;
	NaN / 6 = NaN;
	Infinity / Infinity = NaN;
	0 / 0 = NaN;

	'3'+ 4 = '34'; 
	4-'2' = 2;
	4 - null = 4;
}
/*
关系操作符：
1.如果两个字符串，则比较字符的字符编码大小。 
2 如果一个数是数值，则优先数值，将另一个操作数转换为数值
*/
function relationship_operator(){
	'23' < '3';
	23 > '3';
	'a' < 3 = NaN < 3 = false;
}
/*
相等操作符==：
如果是对象，要调用valueOf 、toString方法
===:
不进行任何类型转换直接比较
最佳实践：使用＝＝＝而不是＝＝
*/
function equal_oper(){
	true == 1; //true,true转换为数值
	'2'  == 2; //优先数值，将'2'转换为2
	null == undefined;
}
/*
for_in函数用来枚举对象的属性
*/
function for_in(){

}
/*函数
最佳实践：要么让函数永远返回值，要么让函数永远不返回值。这样做的好处是：便于调试方便。
js函数与其它语言函数的区别：写不写参数、写几个都没有问题。它是通过arguments来获得参数
的。arguments的长度由传入的参数个数决定。参数都是值传递，而不是引用传递。
*/

