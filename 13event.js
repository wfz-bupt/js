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
1.load事件
当页面完全加载后触发，包括图片和一些外部资源文件
定义load的方式，例子
图像上也可以触发load事件
只要设置了img.src，图片就开始下载，即便这个图片还没有添加到文档中
还有一些元素以非标准的方式支持load事件，例script和link的load
2.unload事件
只要用户从一个页面切换到另一个页面，就会触发unload事件
3. resize事件
例子
4.scroll
由于resize和scroll事件会被频繁触发，因此，不宜处理大量计算
13.4.2 焦点事件
有6个焦点事件
blur:在元素失去焦点时，事件不会冒泡
DOMFocusIn：元素获得焦点时触发，只有opera支持
DOMFocusOut：元素失去焦点时触发，只有opera支持
focus：获得焦点时，不会冒泡
focusin：获得焦点，与focus等价，但是会冒泡
focusout：与blur等价
13.4.3 鼠标和滚轮事件
dom3级定义了9个鼠标事件
click 
dbclick
mousedown
mouseenter: 在光标从元素外部首次移动到元素范围内触发，不冒泡，移动
到后代元素不会触发
mouseleave: 光标从位于元素上移动到元素范围之外触发，不冒泡，移动到后代
元素上不触发 ie、firefox9、opera支持以上两个事件
mousemove: 当鼠标在元素内部移动时重复的触发
mouseout: 光标从位于元素上移动到另一个元素上触发，另一个元素可以是元素
外部，也可以是其子元素。
mouseover: 在鼠标指针位于一个元素外部，然后用户将其首次移入到另一个
元素边界之内时触发。
mouseup:在用户释放鼠标按钮时触发
除了mouseenter和mouseleave。所有的鼠标事件都会冒泡。
只有在同一个元素上触发mousedown和mouseup事件，才会触发click事件
检测浏览器是否支持以上DOM2级事件
document.implementation.hasFeature('MouseEvents','2.0');
要检测浏览器是否支持以上所有事件
document.implementation.hasFeature('MouseEvent','3.0');
1.客户区坐标位置
例子
clientX  clientY
2.页面坐标位置
pageX  pageY
3.屏幕坐标位置
screenX  screenY
4.修改键
shift 、ctrl 、altKey 、metaKey
event.shiftKey event.ctrlKey  event.altKey  event.metaKey
5 相关元素
在util里
6 鼠标按钮
检测鼠标按下了左键还是右键还是中间的键
7 更多的事件信息
event.detail
8 鼠标滚轮事件
浏览器（IE6、chrome、safari）都支持mouseWheel这个事件
event对象包含一个wheelDelta属性，当用户向前滚动鼠标滚轮时，wheelDelta
是120的倍数，当向后滚动时，是－120的倍数。
firefox浏览器支持DOMMouseScroll事件
跨浏览器的鼠标滚轮增量值 例子
9.触摸事件
10.无障碍性问题
13.4.4 键盘与文本事件
有3个键盘事件
keydown：当用户按下键盘上的任意键时触发，如果按住不放，会重复触发此事件
keypress：当用户按下键盘上的字符键
keyup：当用户释放键盘上的键
只有一个文本事件，textInput
1.键码
event.keyCode 
字母A的keyCode为65
2.字符编码
IE9、Firefox、Chrome、Safari的event对象都支持一个charCode属性。
只有在发生keypress事件时才包含值。
3.DOM3级变化
DOM3级中的键盘事件，不再包含charCode属性，而是包含两个新属性，key和char
key取代keyCode，在按下某个字符键时，key的值就是相应的文本字符。在按下
非字符键时，key的值为相应键的名字。如shift
char在按下字符键时与key相同，在按下非字符键时为null
由于存在浏览器兼容问题，不赞同使用
4.textInput事件
DOM3级规范中新增事件，textInput事件
浏览器支持：IE9+、safari、Chrome
5.设备中的键盘事件
13.4.5 复合事件 CompositionEvent
DOM3级事件新增，用于处理IME的输入序列。
13.4.6 变动事件
DOM2级变动事件，能在DOM的某一部分发生变化时给出提示。
DomSubtreeModified：在DOM结构中发生任何变化时触发
DOMNodeInserted: 在一个节点作为子节点被插入到另一个节点中触发
DOMNodeRemoved：在节点从其父节点中被移除
DOMNodeInsertedIntoDocument：在一个节点被插入文档时触发
DOMNodeRemovedFromeDocument：在一个节点从文档中移除时触发
DOMAttrModified： 特性被修改
DOMCharacterDataModified：在文本节点的值发生变化时触发
检测是否支持变动事件
document.implemention.hasFeature('MutationEvent','2.0');
IE8及以前不支持任何变动事件
1.删除节点
removeChild replaceChild
2.插入节点
appendChild replaceChild insertBefore
13.4.7 HTML5事件
HTML5列出了浏览器应该支持的事件，本节只讨论得到浏览器支持的事件。
1.contextmenu事件
通过鼠标右键可以调出上下文菜单，此事件表示何时显示上下文菜单,当用户鼠标按下
右键，想要调出上下文菜单的时候，会触发并显示你想展现的东西。
2.beforeunload事件
在页面被卸载之前触发此事件
一般用于提醒用户确定要离开此网页吗，例子
3.DOMContentLoaded
在DOM加载完之后触发，而不用等待一些外部资源，浏览器支持情况，IE9+、FireFox、
Chrome、Safari3.1+、Opera9+
4.readyStateChange
提供与文档或者元素的加载状态有关的信息。每个对象有一个readyState属性，包含
以下5个值中的一个，
uninitialized: 对象存在但尚未初始化
loading：对象正在加载数据
loaded：对象加载数据完毕
interactive：可以操作对象了，但还没有完全加载
complete：对象已经加载完毕
支持readyStateChange的浏览器有：IE、Firefox4+、Opera
使用此事件，可以确定link或者script元素是否已经加载完全。例子
5.pageShow和pageHide事件
Firefox和Opera有一个特性，叫往返缓存，（back-forward cache），
可以在用户使用浏览器的后腿或者前进按钮时从缓存中读取数据。pageShow在页面
显示时触发，不管这个页面是否来自bfcache，此事件在load事件致歉触发。
pagehide：在浏览器卸载页面时触发，在unload事件之前触发。
支持以上俩事件的浏览器：IE9+、Firefox、Safari5+、Chrome和Opera
6. hasChange事件
url发生变化会触发此事件。例子
支持此事件的浏览器：IE8+ Firefox3.6＋ Safari5+ chrome
检测是否支持haschange事件：
var isSupport = ("onhaschange" in window)
13.4.8 设备事件
W3C从2011年着手制订关于设备事件的新草案，以涵盖不断增长的设备类型并为他们
定义相关的事件。
1.orientationchange事件
所有IOS设备都支持此事件
例子
2.MozOritation事件
Firefox3.6支持事件
event提供x、y和z属性，分别代表的含义？
3.deviceoritation事件
event提供以下属性
alpha：在围绕z轴旋转时，y轴的度数差，介于0-360
beta：在围绕x轴旋转时，z轴的度数差，介于－180-180
gamma：在围绕y轴旋转时，z轴的度数差，介于－90-90
absolute：
compassCalibrated：设备的指南针是否校准过
可以响应设备的方向，重新排列屏幕上的元素
只能在webkit浏览器中运行，浏览器有：ios4.2+中的safari、chrome、和Android
版webkit
4.devicemotion事件
设备是否在动
事件对象包含以下属性：
acceleration： 不考虑重力的情况下，每个方向的加速度
accelerationIncludingGravity: 在考虑重力的情况下，每个方向的加速度
interval：常量
rotationRate：表示方向
浏览器有：ios4.2+中的safari、chrome、和Android
版webkit
13.4.9 触摸和手势事件
1.触摸事件
touchstart
touchmove
touchend
touchcancel
事件属性：
touches：当前跟踪的触摸操作的Touch对象的数组
targetTouchs：特定于事件目标的Touch对象的数组
changeTouches：表示自上次触摸以来，发生了什么改变的Touch对象的数组
每个Touch对象有以下属性
clientX、clientY、pageX、pageY、screenX、screenY、
identifier：标示触摸的唯一id
target：触摸的DOM节点
支持触摸事件的浏览器包括：iOS版Safari、Android版webkit
2.手势事件
gesturestart: 当一个手指已经按在屏幕上，另一个手指又触发屏幕
gesturechange：当触摸屏幕的任何一个手指的位置发生改变
gestureend：当任何一个手指从屏幕上移开
ios2.0的safari提供的
13.5 内存和性能
13.5.1 事件委托
利用事件冒泡，只指定一个事件处理程序，就可以管理某一个类型的所有事件
例子
js与dom连接少，提升性能
13.5.2 移除事件处理程序
如果元素不在了，但是与之绑定的事件处理程序还在，它会继续存在内存里，
影响性能，所以，如果你确定某个元素不在了，那么在移除这个元素之前，要先移除与之绑定的事件。这也是提升性能的方法。
13.6 模拟事件
IE9、Opera、Firefox、Chrome和Safari都支持模拟事件
13.6.1 DOM中的事件模拟

*/
document.getElementById("myButton").onclick = function(event){
    event.preventDefault();
}
// 访问IE中的事件对象有几种不同的方式
document.getElementById("myButton").onclick = function(){
    var event = window.event;
}
document.getElementById("myButton").attachEvent("onclick",function(event){})

EventUtil.addEventListener(window,"load",function(){});

<img src="smile.gif" onload="alert('dd')"/>
EventUtil.addHandler(image,"load",function(){});

EventUtil.addHandler(window,"resize",function(){});

//客户区坐标位置
EventUtil.addHandler('div',"click",function(event){
    event = EventUtil.getEvent(event);
    console.log(event.clientX, event.clientY);
})
//页面坐标位置，pageX和pageY，IE8及以前版本不支持pageX和pageY
EventUtil.addHandler(div,"click",function(){
    event = EventUtil.getEvent(event);
    var pageX = event.pageX,
        pageY = event.pageY;
    if(pageX === undefined){
        pageX = event.clientX + (document.body.scrollLeft||
            document.documentElement.scrollLeft);
    }
    if(pageY === undefined){
        pageY = event.clientY + (document.body.scrollTop||
            document.documentElement.scrollTop);
    }
})

EventUtil.addHandler(window,'beforeunload',function(event){
    event = EventUtil.getEvent(event);
    event.returnValue = "确定要离开？";
    return '确定要离开？';
})
EventUtil.addHandler(window,'hasChange',function(){
    event.oldURL  event.newURL
})

EventUtil.addHandler(window,load,function(event){
    EventUtil.addHandler(window,"orientationchange",function(){
        console.log(window.orientation)
    });
})

//事件委托
<ul id="myLinks">
    <li id="goSomewhere"></li>
    <li id="something"></li>
    <li id="sayHi"></li>
</ul>
var list  = document.getElementById('myLinks');
EventUtil.addHandler(list,'click',function(event){
    EventUtil.getEvent(event);
    var target = EventUtil.getTarget(event);
    switch(target.id){
        case "goSomewhere": {
            break;
        }
        case "something": {

        }
        case "sayHi":{

        }
    }
})