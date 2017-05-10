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
}
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
	es5海增加了2个迭代方法
	reduce和reduceRight方法
	reduce(function(pre,cur,index,arr){})
	reduceRight(function(pre,cur,index,arr){})
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
	//array_test();
	/*
	Date类型：
	使用UTC时间，保存为自1970年1月1日午夜0时开始经过的毫秒数来保存日期。
	Date.parse()，参数为日期字符串，返回毫秒数
	Date.UTC(),参数为表示年月日时分秒的数字。如2005年5月5日 5时5分5秒，表示为
	Date.UTC(2005,4,5,5,5,5);其中月份从0开始
	new Date()也支持这两种参数，其本质为后台调用对应的parse和utc方法，返回可读性
	高的日期格式，如Tue May 09 2017 10:09:00 GMT+0800 (CST)
	ES5新添Date.now(),取得现在时间的毫秒数
	
	＊＊以下为日期格式化为字符串的方法

	＊＊＊以下为date类型的数据设置和获取日期中特定部分的方法
	科普：UTC时间，Coordinated Universal Time，世界统一时间
	GMT：格林尼治标准时间，与UTC时间一致。
	本地时间＝UTC时间＋时区差，北京要加上8
	整设置：setTime(毫秒)
	整获取：getTime()
	获取年：getFullYear()    /  getUTCFullYear
	设置年：setFullYear(年)  /  setUTCFullYear(年)
	获取月：getMonth        /  getUTCMonth   0-11
	设置月：setMonth(月)     /   setUTCMonth(月)
	获取日：getDate()       /  getUTCDate     返回日期月份中的天数1-31
	设置日：setDate         /  setUTCDate    设置日期月份中的天数 1-31
	获取星期信息：getDay    /   getUTCDay     0-6
	获取时：getHours
	设置时：setHours(时)
	获取分：getMinutes
	设置分：setMinutes
	获取秒：getSeconds
	设置秒：setSeconds
	获取日期中的毫秒数，不是总的毫秒：getMilliSeconds
	*/
	function date_test(){
		Date.parse('january 12,2004');//等
		Date.UTC('2005,4,5,5,5,5');
	}
	/*
	RegExp类型：正则表达式
	var expr = /pattern/flags(g全局模式，将模式应用于所有字符串|i不区分大小写
	|m多行模式)
	正则表达式中的元字符必须转义 包括()[]{}\| +.* ? ^$
	属性：global、ignoreCase lastIndex multiline source 
	方法：exec(),参数为要匹配的字符串。返回一个数组，该数组有额外的2个属性，index和input
	index 表示匹配项在字符串中的位置。input为匹配的字符串，数组中第一项是与整个模式匹配的
	字符串，其他项是与模式中的 捕获组 匹配的字符串。
	test(): 返回值true或者fasle
	匹配模式实例有可能不是一个。
	*/
	function regular_expression(){
		var re = null;
		
		re = /cat/g;
		re.lastIndex; //下一个匹配位置
		re.test('cateeeejjj');
		re.test('cattt');

		var text = "mom and dad and baby";
		var pattern = /mom( and dad( and baby)?)?/gi;

		var matches = pattern.exec(text);
		console.log(matches); /*
			0: "mom and dad and baby"
			1: " and dad and baby"
			2: "and baby"
			index: 0
		*/
		var text = "catbatsatfat";
		var pattern1 = /.at/;
		var pattern2 = /.at/g;
		console.log(pattern1.exec(text));
		console.log(pattern1.exec(text));
		console.log(/.at/g.exec(text));
		console.log(/.at/g.exec(text));
		
	}
	//regular_expression();
	/*
	*函数是对象，函数名是指针。既然函数是对象，那么它就有属性和方法，
	函数对象有2个属性，length和prototype，length是函数希望接收的参数的个数。
	函数对象有2个方法，call和apply方法
	解析器对待函数声明和函数表达式的方式不同。对待函数声明会提前解析，而函数表达式会在执行
	到表达式那一行时
	函数可以作为参数，也可以返回一个函数
	在函数中返回函数，特别有用？？？？why？？？？
	在函数内部有2个特殊的对象，arguments和this，arguments有个属性叫callee，指向拥有它
	的函数。典型的应用递归求n!
	this指向函数的环境对象
	函数对象还有个属性是caller，指向调用它的函数的引用
	*/
	function function_test(){
		//sum(1,2);
		// function sum(num1,num2){
		// 	console.log(num1+num2);
		// }
		var sum = function(sum1,sum2){
			//console.log(num1+num2);
		};

		function fun1(fun2,args){
			fun2(args);
		}
		fun1(function(num){console.log(num+2);},5);
		//按照属性对一个对象排序
		var testObj = [{
			name: 'wfz',
			age: 23
		},{
			name: 'thy',
			age: 24
		},{
			name: 'fmj',
			age: 46
		}];
		function compareByAttribute(attributeName){
			return function(obj1,obj2){
				var value1 = obj1[attributeName];
				var value2 = obj2[attributeName];
				if(value1 < value2){
					return -1;
				}else{
					return 1;
				}
			}
		}
		//console.log(testObj.sort(compareByAttribute("age")));
		function num(num){
			if(num==1){
				return 1;
			}else{
				return num * arguments.callee(num-1);
			}
		}
		//函数的length属性
		console.log(num.length); //1
		function this_test(){
			console.log(this.name);
		}
		this_test.apply({name:'wfz'});



	}
	function_test();

