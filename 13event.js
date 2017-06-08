/*
dom2级规范标准化了dom事件，只有ie8还在使用它专有的事件系统
13.1 事件流
13.1.1事件冒泡
ie的事件流是事件冒泡，即事件开始时从最具体的元素接收，传到较为不具体的节点
所有的浏览器都支持事件冒泡。
13.1.2事件捕获
只有ie8不支持事件捕获，很少有人使用事件捕获，尽量使用事件冒泡，在特殊需求
时使用事件捕获。
13.1.3 dom事件流
DOM2级事件规定的事件流包括3个阶段，事件捕获、处于目标阶段、事件冒泡
事件捕获阶段不包括目标元素，在目标阶段处理事件属于事件冒泡的一部分。
13.2 事件处理程序
13.2.1 事件处理程序
<input id="myButton" type="button" onclick="showMessage()">
在函数内部，this指向目标元素
缺点：1.html与js耦合，如果要更换事件处理程序，需要同时改动html和js两处
2.时差问题，当用户触发事件时，事件处理函数有可能没有被解析
13.2.2 DOM0级事件处理程序
var btn = document.getElementById("myButton");
btn.onclick = function(){
    
}
全部小写，删除 btn.onclick = null
13.2.3 DOM2级事件处理程序
btn.addEventListener('click', function(){},false);
false: 在冒泡阶段处理，一般情况下都是false
removeEventListener，移除事件处理程序，无法移出匿名处理函数。
btn.removeEventListener('click', function(){},false);无效
btn.removeEventListener('click', handler,false);
可以添加多个处理程序
13.2.4 IE事件处理程序
btn.attachEvent('onclick',function(){})，
默认冒泡处理this指向全局作用域，在元素内部处理，this指向元素
detachEvent，同样匿名处理函数没法执行
13.2.5 跨浏览器的事件处理程序
13.3 事件对象
13.3.1 DOM中的事件对象
兼容DOM的浏览器会将一个event对象传入到事件处理程序中
所有的事件的event对象都会有的成员
bubbles:表明事件是否冒泡
cancelable: 表明是否可以取消事件的默认行为
currentTarget: 正在处理事件的那个元素
defaultPrevented: 
detail：与事件有关的细节信息
eventPhase：调用事件处理程序的阶段
preventDefault(): 取消事件的默认行为，链接的默认行为是，单击时导航到
href指向的url，如果想取消，则例子
stopImmediatePropagation(): 取消事件的进一步捕获或者冒泡,例如在子元素
上单击的处理程序中使用，事件不会冒泡到父元素。
stopPropagation：取消事件的进一步捕获或者冒泡
target: 事件的目标
trusted
type  view
在事件处理程序内容，this等于指向currentTarget的值
13.3.2 IE中的事件对象
访问IE中的事件对象有几种不同的方式
DOM0级方法，例子
事件对象的属性和方法：
cancelBubble: 为true则取消事件冒泡
returnValue: 为false取消事件默认行为
srcElement: 与DOM中target相同
type
13.3.3 跨浏览器的事件对象
写入util
13.4 事件类型
DOM3级事件规定了以下几类事件
UI: 用户与页面上的元素交互时触发
焦点事件：当元素获得或者失去焦点时触发
鼠标事件：当用户通过鼠标在页面上执行操作时
滚轮事件：当使用鼠标滚轮时
文本事件：当在文档中输入文本时
键盘事件：当用户通过键盘在页面上执行操作时
合成事件：当为IME输入字符时
变动事件：当底层dom结构发生变化时
13.4.1 UI事件
load: 当页面完全加载后在window上触发，当所有框架都加载完毕时在
框架集上触发，当图像加载完毕后在img上触发，或者当嵌入的内容加载完毕后
在object元素上触发（<object> 标签用于包含对象，比如图像、音频、视频、Java applets、ActiveX、PDF 以及 Flash。）
unload: 当页面完全卸载后在window上触发，
abort：在用户停止下载过程中，如果潜入的内容没有加载完，则在object
元素上触发
error：当发生javascript错误时在window上触发
select: 当用户选择文本框的一个或者多个字符时触发
resize: 当窗口或者框架的大小变化时在window或者框架上触发
scroll：当用户滚动在滚动条的元素时
*/
document.getElementById("myButton").onclick = function(event){
    event.preventDefault();
}
// 访问IE中的事件对象有几种不同的方式
document.getElementById("myButton").onclick = function(){
    var event = window.event;
}
document.getElementById("myButton").attachEvent("onclick",function(event){})
