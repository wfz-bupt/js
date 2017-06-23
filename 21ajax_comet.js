/*
21 ajax与comet
21.1 XMLHttpRequest对象
21.1.1 XHR的用法
在请求得到响应后，响应的数据会自动填充到xhr的属性，相关的属性有
responseText: 作为响应主体返回的文本
responseXML: 如果响应的内容是text/xml或application/xml，则这个属性将保存包含着响应数据的xml dom文档
status：响应的http状态
statusText：http状态的说明
xhr还有一个readyState属性，表示请求进行的阶段，有以下取值
0:未初始化，尚未调用open方法
1:启动，已经调用open方法，但是没有调用send方法
2:发送，已经调用send方法，但是没有接收到响应
3:接收，已经接收到部分响应
4:完成，接收到所有数据
21.1.2 HTTP头部信息
默认情况下，在发送xhr请求的同时，还会发送下列头部信息
Accept：浏览器能够处理的内容类型
Accept-Charset:浏览器能够显示的字符集
Accept-Encoding:浏览器能够处理的压缩编码
Accept-Language:浏览器当前设置的语言
Connection:浏览器与服务器间连接的类型
Cookie:当前页面设置的任何cookie
Host:发出请求的页面所在的域
Referer:发出请求的页面的URI
User-Agent: 浏览器的用户代理字符串
利用xhr的setRequestHeader方法可以设置自定义的请求头部信息，且要在open方法和send方法之间调用,例子
建议使用自定义的头部字段，不要用以上默认的字段，因为有些浏览器不允许重写默认的头部信息。
调用xhr的getResponseHeader方法并传入字段名称，可以取得相应的头部信息。
调用xhr的getAllResponseHeaders可以取得包含所有头部信息的长字符串
21.1.3 GET请求
传入xhr的get方法的查询字符串必须经过正确的编码才行，查询字符串中的每个名称和值都必须用encodeURIComponent进行编码，
然后才能放到URL的末尾。例子，向url末尾添加查询字符串参数。
21.1.4 POST请求
我们可以利用xhr来模仿表单提交，用到了14章讲到的serialize方法，例子
21.2 XMLHttpRequest 2级   
*/
//跨浏览器的xhr对象
function createXHR(){
    if(typeof XMLHttpRequest != "undefined"){
        return new XMLHttpRequest();
    }else if(typeof ActiveXObject != "undefined"){
        if(typeof arguments.callee.activeXString != "string"){
            var version = ["MSXML2.XMLHttp.6.0","MSXML2.XMLHttp.3.0",
                            "MSXML2.XMLHttp"],
            i,len;
            for(i=0,len=version.length; i < len; i++){
                try{
                    new ActiveXObject(version[i]);
                    arguments.callee.activeXString = version[i];
                    break;
                }catch(ex){

                }
            }
        }
        return new ActiveXObject(arguments.callee.activeXString);
    }else{
        throw new Error("no xhr object available")
    }
}
var xhr = createXHR();
xhr.onreadystatechange = function(){
    //在此函数内部，this取不到xhr的值，this等于多少呢，不知道
    if(xhr.readystate == 4){
        if((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304 ){
            console.log(xhr.responseText);
        }else{
        
        }
    }
};
xhr.openn("get","",true);
xhr.setRequestHeader("MyHeader","myvalue");
xhr.send(null);
//向url末尾添加查询字符串参数。
function addURLParam(url, name, value){
    url += (url.indexOf("?") == -1 ? "?" : "&");
    url += encodeURIComponent(name) + "=" + encodeURIComponent(value);
    return url;
}
// post方法
xhr.open("post", "test.php", true);
xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
var form = document.getElementById("user-info");
xhr.send(serialize(form));
