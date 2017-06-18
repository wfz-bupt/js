/*
15.使用canvas绘图
canvas支持情况：IE9+、FF1.5+、Safari9+、Chrome、IOS版safari和
Android版Webkit都在某种程度上支持canvas
15.1 基本用法
要使用canvas元素，必须先设置width和height属性，
要绘图，首先去的绘图上下文的引用。例子
15.2 2D上下文
使用2D绘图上下文提供的方法，可以绘制简单的2D图形，比如矩形、弧线和路径。2D上下文
的坐标开始于canvas元素的左上角，原点坐标是(0,0)
15.2.1 填充和描边
2D上下文的2种基本操作是填充和描边，填充是指用指定的样式填充图形，描边就是在
图形的边缘划线。分别设置上下文的fillStyle和strokeStyle属性。相当于初始化
15.2.2 绘制矩形
矩形是唯一一个可以直接在2D上下文中绘制的形状。与矩形有关的方法包括，fillRect()
strokeRect() clearRect() 这三个方法接收4个参数，x坐标，y坐标，矩形宽度
和矩形高度。
15.2.3 绘制路径
2D绘制上下文支持很多在画布上绘制路径的方法，通过路径可以创造出复杂的行形状和
线条，首先调用beginPath方法，初始化，然后
arc(x,y,radius,startAngle,endAngle,counterclockwise) 画圆
arcTo(x1,y1,x2,y2,radius): 画弧线
bezierCurveTo(c1x,c1y,c2x,c2y,x,y): 
lineTo(x,y)
moveTo(x,y)
quadraticCurveTo(cx,cy,x,y): 绘制二次曲线
rect(x,y,width,height): 
创建了路径后，可以调用closePath（）绘制一条连接到路径起点的线条，可以调用
fill方法填充路径，可以调用stroke方法对路径描边，还可以调用clip方法，在路径
上创建一个剪切区域。
例子，绘制一个不带数字的钟表盘
确定某一个坐标点是否在路径上
context.isPointInPath(100,100);

15.2.4 绘制文本
两个方法：fillText和strokeText方法
他们都接受4个参数，要绘制的文本字符串、x坐标、y坐标、和可选的最大像素宽度，
这两个方法都以下列3个属性为基础：
font
textAlign
textBaseline
绘制文本是比较复杂的操作，api支持还不够完善 例子
15.2.5 变换
以下方法
rotate(angle): 围绕原点旋转图像
scale(scaleX, scaleY)：缩放图像
translate(x,y)：将原点移动到(x,y)
transform(m1_1, m1_2, m2_1, m2_2, dx, dy)
setTransform(m1_1, m1_2, m2_1, m2_2, dx, dy)
调用save方法，可以将某组变化或者组合存入栈中，然后调用restore方法，恢复某组
设置
15.2.6 绘制图像 
如果你想将一张图片绘制到画布上，可以使用drawImage方法，例如
var image = document.images[0];
context.drawImage(image, 10, 10);
drawImage可以接受9个参数
15.2.7 阴影
上下文会根据以下几个属性的值，自动会形状或者路径绘制出阴影
shadowColor: 
shadowOffsetX
shadowOffsetY
shadowBlur
15.2.8 渐变
渐变由CanvasGradient实例表示，接收4个参数
var gradient = context.createLinearGradient(30,30,70,70);
gradient.addColorStop(0,"white");
gradient.addColorStop(1,"black");
context.fillStyle=gradient;
context.fillRect(30,30,50,50);
径向渐变或者放射渐变，使用createRadialGradient方法，接收6个参数
15.2.9 模式
模式就是重复的图像，
createPattern方法
15.2.10 使用图像数据
可以使用getImageData获得原始图像数据，接收4个参数，
var imageData = context.getImageData(10,5,50,50);
返回的是ImageData实例，有3个属性，width和height和data，data是一个数组
保存着图像中每一个像素的数据，每一个像素由4个元素来保存，rgba
利用这个方法可以实现图像的灰阶过滤器。
15.2.11 合成
context还有另外2个属性，globalAlpha和globalComposition-Operation
前者指定所有绘制的透明度，后者表示绘制的图形，怎样与先绘制的图形结合，有以下
可能的取值
source-over
source-in
15.3 webGL
webGL是针对canvas的3D上下文，全面学习webgl的教程，www.learningwebgl.com
15.3.1 类型化数组
核心为一个名为ArrayBuffer的类型，在内存中分配20B，
var buffer = new ArrayBuffer(20)
1. 视图
数组缓冲器视图：new DataView
var view = new DataView(buffer),基于整个缓冲器创建一个新视图
利用它来操作buffer
DataView支持的数据类型和相应的读写方法
getInt8(byteOffset): 
setInt8(byteOffset,value)

var buffer = new ArrayBuffer(20)
var view = new DataView(buffer)
view.setUint16(0,25)
value = view.getUint16(0)

2.类型化视图
继承自dataView，有以下几种
Int8Array:
Uint8Array:
Int16Array
接收3个参数，buffer，起点的字节偏移，包含的字节
每个视图构造函数包含一个名为BYTES_PER_ELEMENTS
var int8s = new Int8Array([10,20,30,40,50]);
var int8s = new Int8Array(10); 创建一个数组，保存10个整数
15.3.2 webgl上下文
确定浏览器是否支持webgl
var drawing = document.getElementById("drawing");
if(drawing.getContext){
    var gl = drawing.getContext("experimental-webgl");
    if(gl){
        
    }
}
1.常量
2.方法命名
3.准备绘图
4.视口与坐标
开始绘画之前，通常先定义webgl的视口。
gl.viewport(0,0,drawing.width,drawing.height)
5.缓冲区
顶点信息保存在js的类型化数组中，使用之前必须转换到Webgl的缓冲区，使用gl.create
Buffer来创建缓冲区，然后使用gl.bindBuffer绑定到webgl上下文。
6.错误
7.着色器
8.编写着色器
9.编写着色器程序
10.为着色器传入值
11.调试着色器和程序
12.绘图
13.纹理
*/
var drawing = document.getElementById("drawing");

if(drawing.getContext){
    var context = drawing.getContext("2d");
    
    //设置阴影
    context.shadowOffsetX = 5;
    context.shadowOffsetY = 5;
    context.shadowBlur = 4;
    context.shadowColor = "rgba(0,0,0,0,5)";

    //绘制路径
    context.beginPath();
    context.arc(100,100,99,0,2*Math.PI,false);
    context.moveTo(194,100);
    context.arc(100,100,94,0,2*Math.PI,false);
    context.moveTo(100,100);
    context.lineTo(100,15);
    context.moveTo(100,100);
    context.lineTo(35,100);
    context.stoke();
    //绘制文本
    context.font = "bold 14px Arial";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText("12",100,20);

    context.strokeStyle="red";   //设置一
    context.fillStyle = "black"; //设置二
    //取得图像的数据URI
    var imgURI = drawing.toDataURL("image/png");
    //显示图像
    var image = document.createElement("img");
    image.src = imgURI;
    document.body.appendChild(image);
}
