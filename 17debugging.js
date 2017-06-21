/*
17 错误处理与调试
17.1 浏览器报告的错误
17.1.1 IE
打开tools工具菜单中的Internet选项，切换到高级选项卡，选中display a notifi
cation about every script error,显示每个脚本错误的通知
17.1.2 firefox
firebug
17.1.3 safari
17.1.4 Opera
17.1.5 chrome
17.2 错误处理
web的错误处理机制非常重要
17.2.1 try-catch语句
ECMA－262第三版引入了try－catch语句
try{
    
}catch(error){
   console.log(error.message); 
}finally{
    //无论任何情况，都会执行此代码块。
}
try中的任何一条语句发生了错误，都会立即跳出try代码块，进入catch代码块。
1.finally子句
2.错误类型
ECMA－262定义了7种错误类型：
Error  EvalError  RangeError  ReferenceError  SyntaxError  TypeError URI Error
RangeError：数值超出相应范围
ReferenceError： 找不到对象、访问不存在的变量
TypeError: 类型错误，var o = new 10
3.合理使用try catch
不需要给用户提示，默默的
17.2.2 抛出错误
throw，遇到throw时，代码会立即停止执行
throw new Error("something had happened"): 抛出通用类型的错误
1.抛出错误的时机
在开发代码的过程中，应该重点关注函数和可能导致函数执行失败的因素，良好的错误处理机制，应该是确保代码中只发生你自己抛出的
错误。例子
2.抛出错误与使用try－catch
捕获错误的目的：确切的知道该如何处理这些错误，避免浏览器以默认方式处理它们
抛出错误的目的：提供错误发生的详尽的信息
17.2.3 error事件
没有通过try catch处理的错误都会触发window的error事件，必须使用DOM0来指定事件处理程序
window.onerror = function(message,url,line){
   return false; //会阻止浏览器抛出错误 
}
图像也支持error事件
17.2.4 处理错误的策略
17.2.5 常见的错误类型
错误处理的核心，是知道代码里会发生什么错误，一般来说，需要关注3种错误，类型转换错误，数据类型错误，通信错误，
应该使用全等＝＝＝和非全等！＝＝，而不是＝＝或者！＝，切记！最佳实践
在流程控制中if，使用非布尔值，是非常常见的一个错误，例子
2.数据类型错误
强烈反对将某个值与null或者undefined做比较
如果某个函数不对外公开，可以不对参数进行类型检查，但是，面向公众的api必须无条件的进行类型检查。
3.通信错误
ajax的每个过程都会产生错误
请求url中的查询字符串，必须用encodeURIComponent()进行编码，不然就会报错
17.2.6 区分致命错误和非致命错误
任何错误处理策略中最重要的一部分，是确定错误是否致命，对于非致命错误，可以根据以下一个或者多个条件来确定，
i）不影响用户的主要任务，i）只影响页面的一部分 i）可以恢复 i）重复相同错误可以消除错误
17.2.7 把错误记录到服务器
例子
17.3 调试技术
不建议使用alert
17.3.1 将消息记录到控制台
console对象有以下方法
error
info
log
warn
17.3.2 将消息记录到当前页面
在页面中开辟一小块区域，用以显示消息。在catch捕获的错误都应该打印出来
17.3.3 抛出错误
对于大型应用来说，用assert函数抛出错误，一个参数为求职结果应该为true的条件，另外一个条件为false要抛出的错误
17.4 常见的IE错误
17.4.2 无效字符

17.4.3 未找到成员

17.4.4 未知运行时错误
当i）把块级元素插入到span元素内，也就是行内元素内时，抛出错误
i）访问表格的任意部分，任意属性
17.4.5 语法错误
引用了外部的js文件，但是文件没有返回js代码，提示经常是 第一行第一个字符发生错误
17.4.6 系统无法找到指定资源
对url长度有限制 2048个字符
*/
function process(values){
    if(!(values instanceof Array)){
        throw new Error("process(): Argument must be an array.");
    }
    values.sort();
}

function concat(str1,str2,str3){
    var result = str1 + str2;
    if(typeof str3 == "string"){ //使用if(str3)会很容易抛出错误
        result += str3;
    }
}
function logError(sev, msg){
    var img = new Image();
    img.src = "login.php?sev=" + encodeURIComponent(sev) + "&msg=" + encodeURIComponent(msg);
}
function assert(condition, message){
    if(!condition){
        throw new Error(message);
    }
}