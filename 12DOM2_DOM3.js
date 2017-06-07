/*
dom2级核心core、dom2级视图views、dom2级事件event、dom2级样式style、
dom2级遍历和范围、dom2级html
12.1.1 针对XML命名空间的变化
html不支持xml命名空间，但是xhtml支持xml命名空间，命名空间用xmlns
特性指定，xhtml的命名空间是http://www.w3.org/1999/xhtml
DOM2级中，node类型新增有关命名空间的属性，用来表示该节点在哪个命名空间下
localName: 不带命名空间前缀的节点名称
namespaceURI: 命名空间uri
prefix：命名空间前缀
DOM3级中，与命名空间有关的方法
isDefaultNamespace
lookuNamespaceURI(prefix):返回给定prefix的命名空间
lookupPrefix(namespaceURI)
DOM2级docuemnt类型的变化
createElementNS(namespaceURI,tagName)
createAttributeNS(namespaceURI,attributeName)
getElementByTagNameNS(namespaceURI,tagName)
DOM2级element类型的变化
getAttributeNS(namespaceURI,localName)
getAttributeNodeNS(namespaceURI,localName)
getElementsByTagNameNS(namespaceURI,tagName)
hasAttributeNS(namespaceURI,localName)
4.NamedNodeMap类型的变化
特性是通过NamedNodeMap表示的
getNamedItemNS(namespaceURI,localName)
removedNamedItemNS(namespaceURI,localName)
setNamedItemNs(node)
document.importNode()
document.impletation.createDocumentType
document.impletation.createDocument
DOM3级 node类型新增
isSameNode方法、isEqualNode方法

以上为 dom core部分
12.2 样式
样式定义3种方式，1.通过<link/>包含外部样式表文件 2.通过<style>元素
定义嵌入式样式 3.通过style特性定义针对某些特定元素的样式
通过js访问float属性，cssFloat,ie：styleFloat
1.dom样式属性和方法
cssText属性
length：应用给元素的css的数量
parentRule
getPropertyCSSValue(propertyValue):返回包含给定属性值的CSSvalue对象
getPropertyPriority
getPropertyValue
item(index)
removeProperty
setProperty
2.计算的样式
document.defaultView.getComputedStyle(element,null)
返回一个CSSStyleDeclaration对象，这个对象是只读的，
ie中：element.currentStyle
12.2 操作样式表
CSSStyleSheet类型表示的是样式表，表示通过link元素包含的和通过style
元素定义的样式表,继承自StyleSheet，属性如下：
disabled
href
media
ownerNode
parentStyleSheet
title
type
cssRules
ownerRule
deleteRule
insertRule
通过link和style来获取样式 例子
css规则
cssRule对象表示样式表中的每一条规则
12.2.3元素大小
offsetHeight：包括高度、border高度、和滚动条高度
offsetWidth
offsetLeft
offsetTop
若想知道某个元素在页面上的偏移量，例子：
2.客户区大小
元素的客户区大小指的是 元素内容和内边距占据的空间大小
有关属性：clientHeight、clientWidth，获得浏览器视口大小
例子
3.滚动大小
包含滚动内容的元素的大小 ，有些元素，即使没有执行任何代码，也能自动
添加滚动条，但另外一些元素，则需要通过css的overflow属性，才能滚动
scrollHeight：在没有滚动条的情况下，元素内容的总高度
scrollWidth：在没有滚动条的情况下，元素内容的总宽度
scrollLeft：被隐藏在内容区域左侧的像素数
scrollTop：被隐藏在内容区域上方的像素数
跨浏览器获得文档的总高度、总宽度
4.确定元素大小
getBoundingClientRect方法，返回元素相对于视口的位置的矩形对象，
包括left top bottom right。例子
12.3 遍历
DOM2级遍历和范围模块定义了两个用于辅助完成顺序遍历dom结构的类型，
NodeIterator和TreeWalker。 基于给定的起点对DOM结构进行深度优先
遍历，监测例子
12.3.1 NodeIterator
document.createNodeIterator
例子：创建一个只显示p元素的节点迭代器
例子：利用NodeTterator对象的nextNode方法深度遍历dom树
12.3.2 TreeWalker
document.createTreeWalker
更灵活，可以随意的在任意方向上遍历dom结构，使用方法与nodeIterator
相同。
12.4 范围
dom2级定义了范围接口
用来选择文档上的某个区域
12.4.1 dom中的范围
检测浏览器是否支持 例子
每个range类型的实例的属性和方法
startContainer: 包含范围起点的节点
startOffset: 范围在startContainer中起点的偏移量
endContainer：包含范围终点的节点
endOffset：范围在endContainer的偏移量
commonAncestorContainer
setStartBefore(refNode): 将范围的起点设置在refNode之前
setStartAfter(refNode): 将范围的起点设置在refNode之后
setEndBefore
setEndAfter
selectNode、selectNodeContents方法，例子
以上两个方法，创建的range类型变量所具有的属性不同，详细看书。
用dom范围实现复杂选择
方法：setStart  setEnd
接收两个参数，一个参照节点，和一个偏移量值
选择例子中 llo到world中的o中间的dom部分，例子
在创建范围时，会为范围创建一个文档片段，范围所属的所有节点被添加到这个
片段中。如果范围内容不符合规范，就会自动补全缺失节点。
创建了范围，就可以对范围进行操作，方法：
deleteContents方法：删除范围包含的内容
extractContents: 删除范围包含的内容，同时返回删除的文档片段
cloneContents：复制并返回文档片段
在将文档片段传入appendChild方法时，添加到文档中的只是片段的子节点
insertNode: 向文档片段的开始处添加节点
surroundContents: 环绕范围插入内容，参数为环绕节点
5.折叠dom范围
range.collapsed
光标就是折叠的范围，因为范围里啥也没有，利用collapsed属性，可以确定
两个节点是否紧密相邻
6.比较dom范围
compareBoundaryPoints,确定范围是否有公共的边界
2个参数，比较方式，和另一个用来比较的范围
7.复制dom范围
cloneRange
8.清理dom范围
使用完范围后，要用detach方法，分离出该范围
12.4.2 ie8及更早版本中的范围
ie8及以前版本不支持dom范围。但是有一个类似功能的 文本范围(text range)
可以通过body、button、input、textarea等几个元素的createTextRange
方法创建文本范围。
1.用ie范围实现简单的选择
findText方法
moveToElementText
2.用ie范围实现复杂的选择
move
moveStart
moveEng
expand
以上方法接收2个参数，移动单位，和移动的数量
单位包括："character"、"word","sentence","textedit"
3.操作ie范围中的内容
parseHTML
4.折叠ie范围
collapse方法
boundingWidth: 范围的宽度
5.比较ie范围
compareEndPoints
isEqual方法
inRange方法
6复制ie范围
duplicate方法

*/
//监测浏览器是否支持某些dom模块
var supportsDOM2Core = document.implementation.hasFeature("Core","2.0");
var supportsDOM2HTML = document.implementation.hasFeature("HTML","2.0");
// 监测浏览器是否支持dom2级定义的css能力
var supportDOM2css = document.implementation.hasFeature("css","2.0");
// 监测浏览器是否支持dom2级样式表
var supportDOM2StyleSheet = document.implementation.hasFeature
("StyleSheets","2.0");
//获得文档中的样式表
var sheet = null;
for(var i=0; i<document.styleSheets.length; i++){
    sheet = document.styleSheets[i];
    console.log(sheet.href);
}

//通过link和style来获取样式 例子
function getStyleSheet(element){
    return element.sheet||element.styleSheet;
}
var link = document.getElementsByTagName("link")[0];
var sheet = getStyleSheet(link);

//跨浏览器获得元素距离页面最左边的距离
function getElementLeft(element){
    var actualLeft = element.offsetLeft;
    var current = element.offsetParent;
    while(current!==null){
        actualLeft += current.offsetLeft;
        current = current.offsetParent;
    }
    return actualLeft;
}

function getViewport(){
    if(document.compatMode == "BackCompat"){
        return {
            width: document.body.clientWith,
            height: document.body.clientHeight
        };
    }else{
        return {
            width: document.documentElement.clientWith,
            height: document.documentElement.clientHeight
        }
    }
}

// 跨浏览器获得文档的总高度、总宽度
var docHeight = Math.max(document.documentElement.scrollHeight,
                    document.documentElement.clientHeight)

//跨浏览器获得元素距离视口的距离，ie8及以前认为文档左上角坐标为（2，2）
function getBoundingClientRect(element){
    var scrollTop = document.documentElement.scrollTop;
    var scrollLeft = document.documentElement.scrollLeft;

    if(element.getBoundingClientRect){
        if(typeof arguments.callee.offset != 'number'){
            var scrollTop = document.documentElement.scrollTop;
            var temp = document.createElement('div');
            temp.style.cssText = "position:absolute; left:0; right:0;";
            document.body.appendChid(temp);
            arguments.callee.offset = -temp.getBoundingClientRect().top
                                    -scrollTop;
            document.body.removeChild(temp);
            temp = null;
        }
        var rect = element.getBoundingClientRect();
        var offset = arguments.callee.offset;
        return {
            left: rect.left + offset,
            top: rect.top + offset,
            right: rect.right + offset,
            bottom: rect.bottom + offset,
        }
    }else{
        var actualLeft = getElementLeft(element);
        var actualTop = getElementTop(element);
        return {
            left: actualLeft - scrollLeft,
            top: actualTop - scrollTop,
            right: actualLeft + element.offsetWidth -scrollLeft;
            bottom: actualTop + element.offsetHeight - scrollTop;
        }
    }
}
//监测浏览器对dom2级遍历支持的情况
var supportsTraversals = document.implementation.hasFeature("Traversal","2.0");
var supportsNodeIterator = (typeof document.createNodeIterator == "function");
var supportsTreeWalker = (typeof document.createTreeWalker == "function");
//创建一个只显示p元素的节点迭代器
var filter = {
    acceptNode: function(node){
        return node.tagName.toLowerCase() == "p"?
                NodeFilter.FILTER_ACCEPT:
                NodeFilter.FILTER_SKIP;
    }
};
var iterator = document.createNodeIterator(root, NodeFilter
    .SHOW_ELEMENT, filter,false);

// 利用NodeTterator对象的nextNode方法深度遍历dom树
// 利用TreeWalker对象的遍历dom树

var div = document.getElementById("div1");
var iterator = document.createNodeIterator(div,NodeFilter.SHOW_ELEMENT,
    null ,false);
var node = iterator.nextNode(); //指向跟节点
while(node!==null){
    console.log(node.tagName);
    node = iterator.nextNode();
}

var walker =  document.createTreeWalker(div,NodeFilter.SHOW_ELEMENT,
    null ,false);
// 检测浏览器是否支持range接口
var supportsRange = document.implementation.hasFeature('Range','2.0');
var alsoSupportsRange = (typeof document.createRange == 'function');

<html>
    <body>
        <p id="p1"><b>hello</b>world</p>
    </body>
</html>

//利用以下代码来创建范围
var range1 = document.createRange();
var range2 = document.createRange();
var p1 = document.getElementById("p1");
range1.selectNode(p1); //包含p及所有子元素
range2.selectNodeContents(p1);//只包含子元素

var helloNode = p1.firstChild.firstChild;
var worldNode = p1.lastChild;
var range = document.createRange();
range.setStart(helloNode,2);
range.setEnd(worldNode,3);

//一个标准的xhtml页面
// <html xmlns="http://www.w3.org/1999/xhtml">
//     <head></head>
//     <body></body>
// </html>


