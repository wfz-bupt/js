/*
本章介绍的所有api都在持续定制中，还没有完全固定下来，
25.1 requestAnimationFrame方法
25.1.1 早期动画循环
js创建动画的典型方式，是使用setInterval方法控制所有动画，以下是一个使用setInterval的基本动画循环
(function(){
   function updateAnimations(){
        doAnimation();
   }
   setInterval(updateAnimation,100);
})();
大多数电脑显示器的刷新频率是60HZ、相当于每s重绘60次。
最平滑动画的最佳间隔是1000ms／60，约等于17ms
25.1.2 循环间隔的问题
25.1.3 mozRequestAnimationFrame
js动画的缺点：1.浏览器不知道js动画什么时候开始 2不知道最佳循环间隔时间 3 不知道两次重绘的时间间隔
使用mozRequestAnimation的典型形式，例子
25.1.4 webkitRequestAnimationFrame 和 msRequestAnimationFrame
25.2 Page Visiblity API
为了让开发人员知道页面是否对用户可见推出的
api由三部分组成
i）document.hidden: 表示页面是否隐藏
i）document.visibilityState, 表示下列4个可能状态的值
页面在后台标签页中或者浏览器最小化
页面在前台标签页中
实际的页面已经隐藏，但是用户可以看到页面的预览
页面在屏幕外执行预渲染处理
i）visiblitychange事件，可见性变化时触发
浏览器支持性，chrome和ie
25.3 Geolocation API
在浏览器中的实现是navigator.geolocation对象
3个方法
i）getCurrentPosition: 方法接收3个参数，成功回调函数、可选的失败回调，成功回调接收一个position参数对象，对象有
两个属性，coords和timestamp，而coords对象中包含下列与位置相关的信息。
latitude: 纬度
longitude：经度 
等等
以下代码在地图上绘制用户位置
使用watchPostion方法可以监控用户位置的变化，本质上是定时调用getCurrentPosition函数
支持地理定位的浏览器，IE9+、FF3.5+、Opera5+、chrome、ios版safari、Android版webkit，有关地理位置的更多
精彩范例，http://html5demos.com/geo
25.4 File API
例子：通过监听change事件，并读取files集合，就可以知道选择的每个文件的信息
25.4.1 FileReader类型
异步文件读取机制，可以把FileReader想象成XMLHttpRequest，区别只是它读取的是文件系统，而不是远程服务器，有下面方法
i）readAsText(file,encodeing): 以纯文本形式读取文件，以纯文本形式读取文件
i）readAsDataURL(file): 读取文件并将文件以数据URI的形式保存在result属性中
i）等各种文件读取方式
提供的事件
progress 、error、load事件、表示是否又读取了新数据、是否发生了错误、是否已经读完了整个文件。
每500ms左右，就会触发progress事件，通过事件对象可以获得与xhr的progress事件相同的信息
25.4.2 读取部分内容
file对象还支持一个slice方法，包括2个参数，起始字节和读取的字节数。这个方法返回一个Blob的实例，Blob是File类型的父
类型
<input type="file"/>这就是file对象
25.4.3 对象URL
被称为blob URL，指的是引用保存在File或Blob中数据的URL。传入file对象，返回url，方法为：window.URL.createObject
URL(blob), 在chrome中是window.webkitURL.createObjectURL(blob)
25.4.4 读取拖放的文件
将文件拖放到某个区域，然后自动显示文件信息
25.4.5 使用XHR上传文件
使用FormData对象上传了数据
25.5 Web记时
核心window.performance对象，
performance.navigator
performance.timing, 这个对象的属性都是时间戳，如
navigationStart
unloadEventStart
unloadEventEnd
redirectStart等等
使用web Timing API的绝好实例，支持此api的浏览器，IE10+、Chrome
25.6 web workers
web workders让js在后台运行，实现方式有很多种，支持的浏览器有 IE10+、
Firfox3.5+、safari4+、Opera10.6+、chrome和ios版safari
25.6.1 使用worker
创建一个新的worker，
var worker = new Worker("stufftodo.js");
这行代码会导致浏览器下载stufftodo文件，但只有worker接收到消息才会实际执行文件中的代码，可以使用postMessage方法
给worker传递消息
worker.postMessage("start!");
worker.onmessage = function(event){
  var data = event.data;
}
workder.onerror = function(event){
  
}
停止worker的工作，worker.terminate()
25.6.2 worker全局作用域
它所执行的代码完全在另一个作用域中，与当前页面中的代码不共享作用域，web worker中代码不能访问dom。web worker中的
全局对象是worker对象本身，
双方通过监听message方法进行数据的传递，在worker内部，调用close方法可以停止工作。
25.6.3 包含其他脚本
使用importScripts方法，载入其他脚本并执行
importScripts("files1.js", "files2.js")
首先会执行1 ，再执行2
*/
function updateProgress(){
    //变换dom
    mozRequestAnimationFrame(updateProgress);
}
mozRequestAnimationFrame(updateProgress);

navigator.geolocation.getCurrentPosition(function(position){
    drawMapCenteredAt(position.coords.latitude, position.coords.longitude);
},function(error){
    console.log("Error code:" + error.code);
    console.log("Error message:" + error.message);
},{
    enableHighAccuracy: true,
    timeout: 5000,
    maxmumAge: 25000
});