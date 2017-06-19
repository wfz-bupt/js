/*
16.html5脚本编程
16.1 跨文档消息传递
XDM指的是在来自不同域的页面间传递消息，核心是postMessage()方法，目的为向
另一个地方传递数据，另一个地方指的是包含在当前页面中的iframe元素，或者由当前
页面弹出的窗口。方法接收2个参数，一个消息，一个表示消息接收方来自哪个域
支持XDM的浏览器有 IE8+、FF3.5+、safari4+、Opera、Chrome
16.2 原生拖放
16.2.1 拖放事件
拖动某元素时，依次触发下列事迹，事件目标是被拖动的元素
dragstart
drag
dragend
当某个元素被拖动到一个有效的放置目标上时，下列事件会依次发生，事件目标是目的元素
dragenter
dragover
dragleave或者drop
16.2.2 自定义放置目标
有些元素默认是不允许作为放置目标的，你可以通过代码将其作为放置目标，方法为
重写dragenter和dragover事件，event.preventDefault()
16.2.3 dataTransfer对象
此对象用于从被拖动元素到放置目标传递字符串格式的数据。此对象有2个方法，getData
和setData
event.dataTransfer.setData("text","meme");
event.dataTransfer.getData("text")
16.2.4 dropEffect和effectAllowed
dataTransfer的属性，通过dropEffect属性可以知道被拖动的元素能够执行哪种放置
行为，有以下4种可能的值："none"、"move"、"copy"、"link"
effectAllowed表示允许放置元素的哪种dropEffect，取值：
none、copy、link、move、copyLink、copyMove
16.2.5 可拖动
draggable属性，支持此属性的浏览器有IE10+、ff4+、safari5+、和chrome
16.2.6 其他成员
html5规定dataTransfer对象还应该包含下列方法和属性，
addElement(element): 为拖动操作添加一个元素，只有ff3.5+实现了这个方法
clearData(format): 清除以特定格式保存的数据
setDragImage(element,x,y):指定一幅图像，当拖动发生时，显示在光标下方。
types：当前保存的数据类型
16.3 媒体元素
<video >
    <source src=""></source>
    <source src=""></source>
</video>
指定不同的媒体来源是必须的，因为不同的浏览器支持不同的编解码器。
16.3.1 属性
video和audio共有的属性
autoplay buffered bufferedBytes bufferingRate bufferingThrottled
controls currentLoop
16.3.2 事件
16.3.3 自定义媒体播放器
16.3.4 检测编解码的支持情况
检测浏览器是否支持某种格式或者编解码器。
audio.canPlayType("audio/mpeg")
返回值probably、maybe、空字符串
同时给定媒体格式和编解码器会增加出现probably的可能性
audio.canPlayType("audio/mp4, codecs=\" mp4a.40.2\"")
16.3.5 Audio类型
原生的js构造函数Audio
16.4 历史状态管理
history.pushState()
*/
var iframeWindow = document.getElementById("myframe").contentWindow;
iframeWindow.postMessage("A secret", "http://www.wrox.com");

EventUtil.addHandler(window, "message",function(event){
    if(event.origin == "http://www.wrox.com"){
        event.source.postMessage("received", "http://p2p.wrox.com");
    }
})

