/*
第5章 引用类型
引用类型是一种数据结构，它将数据和功能结合在一起。对象是引用类型的一个实例
构造函数也是函数，只不过是出于构建一个新的对象的目的而存在
*/
function object_test(){
	//对象字面量方法，定义对象。最佳实践
	var person = {
		age: 23,
		name: 'wfz'
	};
	//也可以这样写
	var person1 = {
		"name": "wfz",
		"age":27
	};
	/*当需要向函数传递大量的数据时，用对象进行参数传递是最佳实践
	* 参数使用的最佳实践：当参数必须时，使用命名参数。当参数有可能有，有可能无时，
	采用对象字面量传递。
	*
	*/
	function displayInfo(args){
		var output = " ";
		if(typeof args.name == "string"){
			output += "name" + args.name;
		}
		if(typeof args.age == "number"){
			output += "age" + args.age;
		}
		console.log(output);
	}
	//displayInfo({name: "wfz",age: 23});
	/*
	*得到对象的属性的两种方法
	*1.args.name(最佳实践) 2.args["name"]，好处是"name"可以用变量表示
	*/

	/*
	* 5.2 Array类型
	toString方法
	toLocalString方法
	valueOf方法
	join：arr.join(',')返回以逗号连接的字符串，如果不传入任何参数，则返回使用逗号
	作为分隔符的字符串
	push: 返回数组长度
	pop:  返回弹出的成员
	shift: 返回移除的数组首个成员
	unshift: 返回数组长度
	sort: 先调用每一项的toString方法，然后再比较字符串的大小。这种方式显然不好，因此，
	sort函数可以接收一个比较函数，这个函数的特点为：compare(arg1,arg2){
		如果你想让第一个参数在第二个参数之前，应该返回负数，反之正数
	}
	＊＊以上函数会在原始数组中操作，以下函数会返回新的数组
	concat: 将多个数组合并，并返回合并后的新的数组。如果参数没有传入任何数据，则复制当前
	数组。
	slice(index1,index2),裁切[index1,index2)之间的数据并返回，如果index1和index2
	为负数，则加上数组长度后，再计算。如果index1 < index2,则返回空数组。
	splice(delePos,deleNum,inserNumList)
	indexOf(arg1,arg2),从前向后查，第一参数为查找的项目，第二个参数为从哪里开始查找
	lastIndexOf(arg1,arg2): 从后向前查.
	＊＊以下函数为迭代方法，对数组中的每一项进行操作
	每个函数接受2个参数，第一个为 为每个项目执行的函数，第二个为this指向。其中，第一个
	函数接收3个参数，数组项的值item、数组项的位置index、和整个数组arr
	(function(item,index, arr){},this)
	every: 数组中所有的项都满足条件，返回true
	some: 数组中只要有一个项满足条件，返回true
	forEach: 对数组中的每一个项目执行函数，没有返回值
	map: 对数组中的每一个数执行函数，返回 每次调用的结果组成的数组
	filter:返回调用结果为true的项组成的数组

	*/
	function array_test(){
		var arr = new Array(1,2,3);
		arr.length = 2; //arr: [1,2]
		arr.length = 4; //arr: [1,2,undefined,undefined]
		Array.isArray();
		//所有对象都有toLocalString()、toString()和valueOf方法。
		arr.toString(); //"1,2,3"
		arr.valueOf();  //[1,2,3]
		var object1 = {
			toLocalString: function(){

			},
			toString: function(){

			}
		};
		var arr2 = new Array(1,2,3);
		arr2.push(4); //返回 数组长度 4
		arr2.pop(); //返回弹出的数字 4
		arr2.unshift(4,5);
		arr2.unshift(6);

	    var arr3 = new Array(10,2,11,3,23);
	    arr3.sort(); //10,11,2,23,3
	    arr3.sort(function(num1,num2){
	    	return num1 - num2;
	    });

	    var arr4 = new Array(1,2,3);
	    arr4.splice(1,3,4,5);

	    arr.every(function(item,index,arr){
	    	return item > 0;
	    });

	    var arr5 = new Array(2,4,6,7,9);
	    

	}
	array_test();
}
object_test();