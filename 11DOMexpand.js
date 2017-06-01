/*
第11章 dom扩展
两个重要的拓展：选择符api、html5
选择符api核心的2个方法：querySelector、querySelectorAll
querySelector获取匹配的第一个元素，后者获取匹配的所有元素，后者返回
一个nodeList对象，这些是静态的nodelist对象
h5
h5增加的getElementsByClassName返回nodeList，返回的是动态的NodeList
对象
在操作类名时，需要通过className属性添加、删除类名
h5为所有元素添加classList属性，这个属性是新集合类型DOMTokenList的
实例。
这个属性有4个方法，有length属性，可以通过方括号获得每个类
add(),如果类名已经存在，则不添加了
contains(value),是否存在类名，如果存在则返回true
remove, 删除给定的类名
toggle，如果存在此类名，删除它，如果不存在，添加它
11.3.2 焦点管理
添加了辅助管理dom焦点的功能
document.activeElement属性，始终引用获得了焦点的元素，例子
为元素添加focus方法，查询元素是否获得了焦点
11.3.3 htmlDocument的变化
1.为document添加readyState属性，2种取值，loading和complete
2.兼容模式：为document添加compatMode,2种取值，CSS1Compat（标准模式）、
BackCompat：混杂模式
3.新增head属性，取得head元素
11.3.4字符集属性
document.charset, 也可以对charset进行赋值
11.3.5 自定义数据属性
h5规定可以为元素添加自定义属性，但是，必须以data-为开头
可以利用元素的dataset属性来访问自定义属性，该属性是DOMStringMap的
一个实例，也就是键值对的映射，键为去掉data-的属性值，例子
11.3.6插入标记
1.innerHTML属性
为某个元素直接插入html字符串，原理为将html字符串，解析成dom树。
div.innerHTML = "<div style='color:red'>d</div>"，不用一个
个去创建元素，然后设置属性干嘛的了
2.outerHTML属
与innerHTML的区别为，此方法用html字符串完全替换调用元素，而inner
方法用html字符串替换调用元素的子元素
3.insertAdjacentHTML方法
使用以上3个方法的弊端：元素从内存中删除，但是，与元素绑定的事件处理程序
没有移除，依然占用内存。所以，应该手动删除。
以上3种方法都会创建一个html解析起，在浏览器级别（C＋＋）上运行，所以，
速度快，但是创建和销毁解析器需要时间。因此不要频繁的对innerHTML赋值，
11.3.7 scrollIntoView方法
在元素上调用，可以让元素进入视口范围内。
11.4专有拓展
11.4.1 文档模式
ie8引入的，可以强制的让页面用哪种标准来解析页面
<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7">
11.4.2 children属性
与childNodes的区别：只包含元素的后代元素节点。而childNodes，ie中
会只返回元素节点，但是其他浏览器会返回非元素节点，即空白文本节点。
在元素只包含元素节点时，二者相等。
11.4.3 contains方法
应用场景：一个节点是否是另一个节点的后代。例子
11.4.4 插入文本
innerText从节点中读取文本，设置文本。 outerText 
11.4.5 滚动
scrollIntoViewIfNeeded():将元素移动到浏览器视野范围内
scrollByLiners：将元素内容滚动指定行高
scrollByPages：将元素内容滚动指定高度。
*/
var body = document.querySelector("body");
var myDiv = document.querySelector("#myDiv");
var img = body.querySelector("img");
//元素遍历的两种方法
var i,
len,
child = element.firstChild;
while(child!=element.lastChild){
	if(child.nodeType==1){
		//处理
	}
	child = child.nextSibling;
}

//2
var i,len,child = element.firstChild;
while(child!=element.lastElementChild){
	//处理
	child = child.nextElementSibling;
}

var allCurrentUsernames = document.getElementsByClassName("username current")

//若想删除类名 <div class="bd user disabled"></div>
var classNames = div.className.split(/\s+/);
var pos = -1, i, len=classNames.length;
for(i=0; i<len; i++){
	if(classNames[i]=="user"){
		pos = i;
		break;
	}
}
classNames.splice(pos,1);
div.className = classNames.join(' ');

//document.activeElement
var button = document.getElementById('myButton');
button.focus();
document.activeElement == button;

//<div id="myDiv" data-appId="12345" data-myname="wfz">
var div = document.getElementById("myDiv");
div.dataset

// 通用的contain方法
function contains(refNode,otherNode){
	if(typeof refNode.contains == "function" &&(!client
		.engine.webkit||client.engine.webkit>=522)){
		return refNode.contains(otherNode);
	}else if(typeof refNode.compareDocumentPosition=="function"){
		return !!(refNode.compareDocumentPosition(otherNode)&16);
	}else{
		var node  = otherNode.parentNode;
		do{
			if(node===refNode){
				return true;
			}else{
				node  = node.parentNode;
			}
		}while(node!==null)
		return false;
	}
}