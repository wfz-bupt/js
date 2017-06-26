/*
23 离线应用与客户端存储
开发离线web应用需要几个步骤，首先确保应用知道设备是否能够上网，然后，应用能访问一定的资源，最后，必须有一块本地空间用来
保存数据。
23.1 离线检测
html5定义了一个navigator.onLine属性，用来表示设备能够上网。
两个事件，online和offline
支持离线检测的浏览器还挺多的
23.2 应用缓存
html5的应用缓存，appcache是从浏览器的缓存中分出来的一块缓存区，要想在缓存区中保存数据，可以使用一个描述文件，
manifest file，列出要下载和缓存的资源 例子
设置描述文件的选项特别多，见 http://html5doctor.com/go-offline-with-application-cache
<html manifest = "/offline.manifest">
核心为applicationCache对象，有一个status属性，表示应用缓存的如下当前状态
0:无缓存 1:闲置 2:检查中 3：下载中 4:更新完成
应用缓存还有相关的事件
checking：
error
noupdate
downloading
progress
EventUtil.addHandler(applicationCache, "update", function(){})
23.3  数据存储
23.3.1 cookie
最初在客户端用于存储会话信息，该标准要求服务器对任意http请求发送set-cookie头做为响应的一部分，其中包含会话信息。
浏览器会存储这样的会话信息，并且通过为每个请求添加cookie http头将信息发送回服务器。
1.限制
绑定在域名下，每个域的cookie总数有限制，
IE6 以及更低版本限制每个域名最多20个cookie
IE7盒之后版本每个域名最多50个
ff 50
opera： 30
safari和chrome对于每个域的cookie数量没有硬性规定。
当超过单个域名限制后还要再设置cookie，浏览器就会清除以前的cookie。
浏览器对于cookie的尺寸也有限制，大多数浏览器都有 4096B （加减1）的长度限制。最好不超过4095B
如果你创建超过最大尺寸的cookie，那么该cookie就会被丢掉。
2.cookie的构成
i)名称，不区分大小写，
i）值，值必须被url编码
i）域，cookie对于哪个域是有效的，默认为设置cookie那个域，这个值可以包含子域，也可以不包含它。
i）路径，对于指定域的那个路径，应该向服务器发送cookie
i）失效时间，表示cookie何时被删除，也就是停止向服务器发送，默认是浏览器会话结束删除，但是如果你设置了时间，则按照这个
时间来决定是否发送给服务器
i）安全标志，指定后，cookie只有在使用SSL连接时，才发送到服务器。
以上每一段信息，都是set-cookie的一部分，使用分号加空格分隔每一段。但是浏览器只会向服务器发送名值对，并不会发送所有
服务器下发内容。
例如: Set-Cookie: name=value; domain=.wrox.com; path=/; secure
3.javascript中的cookie
设置cookie的方式为，如果要添加额外的信息，只需要追加字符串即可
document.cookie = encodeURIComponent("name") + "=" + encodeURIComponent("wfz") + "; domain=.wrox.com
; path=/";
name和value需要进行uri编码 
js对cookie的操作，有3种，例子
4.子cookie
为了绕开单域名下的cookie数限制，有了子cookie的概念，最常见的形式
name=name1=value1&name2=value2
以上值可以使用单个值进行存储和访问，好处：无需达到单域名cookie上限也可以存储更加结构化的数据。
子cookie例子
cookie不安全，不要存放敏感数据
23.3.2 IE用户数据
微软通过一个自定义行为引入了持久话用户数据的概念。使用方法
<div style="behavior: url(#default#userData)" id="dataStore"></div>
一旦元素使用了userData行为，就可以使用setAttribute方法保存数据，
var dataStore = document.getElementById("dataStore");
dataStore.setAttribute("name","Nicholas");
dataStore.save("BookInfo"); //指定保存到数据空间的名字
使用load方法获取数据，dataStore.load("BookInfo");
dataStore.getAttribute("name")
23.3 Web存储机制
web storage目的：克服cookie的限制，提供一种在cookie之外存储会话数据的途径，提供一种存储大量可以跨会话存在的数据的
机制。
1.Storage类型
类型有以下方法：
clear:
getItem(name):
key(index): 获得index处的值
removeItem(name)
setItem(name,value)
storage只能存储字符串！！
2.sessionStorage对象
此对象存储特定于某个会话的数据，数据只保存到浏览器关闭，只能让最初给对象存储数据的页面访问到。
IE8可以强制将数据写入磁盘。
适合于仅针对会话的小段数据的存储，如果需要跨域会话存储数据，不适合
3.globalStorage
目的：跨越会话存储数据。
需要指定哪些域可以访问。
globalStorage["wrox.com"].name = "wfz"
以上存储空间对于wrox以及其子域都是可以访问的。
空间是根据协议 域名 端口号 来确定的。
4.localstorage
在html5中作为持久保存客户端数据的方案取代了globalstorage，要访问同一个localstorage对象，页面必须来自同一个域名
，子域名无效。使用同一种协议，同一个端口号。
数据保留到，通过js删除或者 用户清除浏览器缓存。与globalstorage相同。
5.storage事件
对storage对象进行任何修改，都会在文档上触发storage事件，此事件浏览器支持性不好。
6.限制
空间以协议域名端口号为单位进行划分，容量上看，大多数桌面浏览器设置每个来源5M的限制。chrome和safari是2.5M的限制。
对于sessionstorage也是因浏览器而异。chrome safari ，2.5M
23.3.4 indexedDB
是在浏览器中保存结构化数据的一种数据库。api几乎都是异步的请求
var indexedDB = window.indexedDB || window.msIndexedDB || window.mozIndexDB || window.webkitIndexedDB
1.数据库
最大的特点是使用对象保存数据，而不是表，一个indexedDB就是一组位于相同命名空间下的对象的集合。
第一步：打开数据库。
indexedDB.open方法，有则打开，无则创建并打开

*/
// 一个简单的描述文件
CACHE manifest
#Comment

file.js
file.css

var cookieUtil = {
    get: function(name){
        var cookieName = encodeURIComponent(name) + "=",
            cookieStart = document.cookie.indexOf(cookieName),
            cookieValue = null;
        if(cookieStart > -1){
            var cookieEnd = document.cookie.indexOf(";", cookieStart);
            if(cookieEnd == -1){
                cookieEnd = document.cookie.length;
            }
            cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length
                , cookieEnd));
        }
        return cookieValue;
    },
    set: function(name,value,expires,path,domain,secure){
        var cookieText = encodeURIComponent(name) + "=" + encodeURIComponent(value);
        if(expires instanceof Date){
            cookieText += "; expires=" + expires.toGMTString();
        }
        if(path){
            cookieText += ";path=" + path;
        }
        if(domain){
            cookieText += ";domain=" + domain;
        }
        if(secure){
            cookieText += ";secure";
        }
        document.cookie = cookieText;
    },
    unset: function(name, path, domain, secure){
        this.set(name, "", new Date(0), path, domain, secure);
    }
};
var SubCookieUtil = {

    get: function (name, subName){
        var subCookies = this.getAll(name);
        if (subCookies){
            return subCookies[subName];
        } else {
            return null;
        }
    },
    
    getAll: function(name){
        var cookieName = encodeURIComponent(name) + "=",
            cookieStart = document.cookie.indexOf(cookieName),
            cookieValue = null,
            cookieEnd,
            subCookies,
            i,
            parts,
            result = {};
            
        if (cookieStart > -1){
            cookieEnd = document.cookie.indexOf(";", cookieStart)
            if (cookieEnd == -1){
                cookieEnd = document.cookie.length;
            }
            cookieValue = document.cookie.substring(cookieStart + cookieName.length, cookieEnd);
            
            if (cookieValue.length > 0){
                subCookies = cookieValue.split("&");
                
                for (i=0, len=subCookies.length; i < len; i++){
                    parts = subCookies[i].split("=");
                    result[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1]);
                }
    
                return result;
            }  
        } 

        return null;
    },
    
    set: function (name, subName, value, expires, path, domain, secure) {
    
        var subcookies = this.getAll(name) || {};
        subcookies[subName] = value;
        this.setAll(name, subcookies, expires, path, domain, secure);

    },
    
    setAll: function(name, subcookies, expires, path, domain, secure){
    
        var cookieText = encodeURIComponent(name) + "=",
            subcookieParts = new Array(),
            subName;
        
        for (subName in subcookies){
            if (subName.length > 0 && subcookies.hasOwnProperty(subName)){
                subcookieParts.push(encodeURIComponent(subName) + "=" + encodeURIComponent(subcookies[subName]));
            }
        }
        
        if (subcookieParts.length > 0){
            cookieText += subcookieParts.join("&");
                
            if (expires instanceof Date) {
                cookieText += "; expires=" + expires.toGMTString();
            }
        
            if (path) {
                cookieText += "; path=" + path;
            }
        
            if (domain) {
                cookieText += "; domain=" + domain;
            }
        
            if (secure) {
                cookieText += "; secure";
            }
        } else {
            cookieText += "; expires=" + (new Date(0)).toGMTString();
        }
    
        document.cookie = cookieText;        
    
    },
    
    unset: function (name, subName, path, domain, secure){
        var subcookies = this.getAll(name);
        if (subcookies){
            delete subcookies[subName];
            this.setAll(name, subcookies, null, path, domain, secure);
        }
    },
    
    unsetAll: function(name, path, domain, secure){
        this.setAll(name, null, new Date(0), path, domain, secure);
    }

};
