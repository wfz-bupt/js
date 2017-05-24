/*
第8张 BOM
BOM提供了很多对象，用来访问浏览器的功能。
1.核心对象：window。在浏览器中，是es定义的全局对象。又是js访问浏览器的一个接口。
在全局作用域中定义的变量、函数都是window的属性和方法。
在全局作用域中定义变量与直接在window上定义属性的不同，前者不可用delete删除
i）尝试访问未声明的变量会抛出错误，但是通过查询window对象，是undefined
i）如果页面中包含框架，则每个框架都有自己的window对象，并且保存在frames集合中。在
frames集合中，可以通过数值索引，从0开始，从左到右，从上到下，访问对应的window对象
每个window对象都有一个name属性
8.1.2 window有关frameset的属性：window.frames、window.top（指向最外层框架）、
window.parent
8.1.3 窗口位置属性
window.screenLeft、screenTop 窗口距离屏幕上端和左端的距离
与窗口位置有关的方法：window.moveTo()移动到具体位置
moveBy(),左边和上边的偏移位置
只有ie和safari浏览器支持
8.1.4 窗口大小
由于浏览器的差异，无法确定浏览器窗口本身的大小，但是可以取得页面视口的大小
与大小相关的方法：window.resizeTo(),缩放到固定大小。window.resizeBy()与原来
窗口大小的差值
You can't resize a window or tab that wasn’t created by window.open.
You can't resize a window or tab when it’s in a window with more than one tab.
Also, even if you create window by window.open(...) it is not resizable by default ...see 4.
To make window created by window.open() resizable, you must open it with resizable feature
只有ie和safari浏览器支持
8.1.5 导航和打开窗口
标签页＝＝框架frame
在同一个窗口打开的页面，享有同样的全局window变量，不同的窗口则不是
例子都没有跑成功？？？why？接着看
每个标签页都有自己的window对象。
safari浏览器支持，chrome不支持，亲测，并且，只有用户做了某个操作之后，才会有效。
如果在js中打开的窗口为null，则意味着浏览器阻拦了窗口
8.1.6 间歇调用和超时调用
js是单线程语言，setTimeout、setInterval
用超时调用可以模拟间歇调用，间歇调用有bug，后一次在前一次之前执行。最佳实践，不用
间歇调用而用超时调用代替。
8.1.7系统对话框
通过alert confirm prompt可以调用系统对话框向用户显示消息。对话框事同步的，展示对话
框时，代码会停止运行。

8.2location对象 ，
document.location和window.location一样
8.2.2 位置操作
location.href
location.assign
window.location
location.replace :不会产生历史纪录
location.reload(),无参数为从缓存，有true参数为从服务器
8.3 navigator对象

*/
var age = 29;
window.color = "red";
delete window.age; //fasle
delete window.color; //true

var newValue = oldValue; //错误
var newValue = window.oldValue;//一次属性查询

//跨浏览器取得窗口距离屏幕上方和左方的距离
var leftPos = (typeof window.screenLeft == 'number')?window.screenLeft
:window.screenX;
var topPos = (typeof window.screenLeft == 'number')?window.screenTop
:window.screenY;
//跨浏览器获得页面视口的大小
var pageWidth = window.innerWidth;
var pageHeight = window.innerHeight;
if(typeof pageWidth != "number"){
	if(document.compatMode != "number"){
		//页面处于标准模式
		pageWidth = document.documentElement.clientWidth;
		pageWidth = document.documentElement.clientHeight;
	}else{
		pageWidth = document.body.clientWidth;
		pageWidth = document.body.clientHeight;
	}
}
//检测窗口是否被浏览器屏蔽的方法
var blocked = false;
try{
	var wroxWin = window.open("http://www.wrox.com");
	//浏览器阻止的
	if(wroxWin == null){
		blocked = true;
	}
}catch(ex){
	//浏览器扩展程序或者其他程序阻止的
	blocked = true;
}

//超时调用,设置超时调用后又取消，所以，没有什么事发生
//超时调用的代码都是在全局作用域中执行的？？？
var timeId = setTimeout(function(){
	console.log(1);
},1000);
clearTimeout(timeId);
/*
间歇调用，也会返回一个调用id
并且用这个id可以取消，clearInterval

*/

