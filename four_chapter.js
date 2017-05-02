/*
js不允许直接访问内存区域
基本类型的值：就是它实际的值，基本数据类型的数据
引用类型的值：其实是个对象指针，它指向真实的内存区域。对象
js所有函数参数均按值传递,可以把函数参数当作局部变量
按值传递？按引用传递？
*/

/*
检测类型：
*/
function type_detect(){
	typeof 3 = 'number';
	typeof '3' = 'string';
	typeof true = 'boolean';
	typeof parseInt = 'function';
	typeof null = 'object';
	typeof undefined = 'undefined';
	//用instanceof来区分 对象类型
}
/*
执行环境: execution context是js中一个最为重要的概念。
每个执行环境都有一个关联的变量对象。环境中定义的变量和函数都保存在这个对象中。
全局执行环境对应的对象为window，因此，所有的全局变量和函数都是window对象的属性和方法。

*/
