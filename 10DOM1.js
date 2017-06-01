/*
DOM: 
ie中的dom对象是com对象的形式
文档节点html是每个文档的根节点。
node接口被所有节点类型实现，node接口由node类型实现，所有节点都继承至node类型
有12种类型的节点
10.1.1 node类型
NODE.ELEMENT_NODE(1)
NODE.ATTRIBUTE_NODE(2)
NODE.TEXT_NODE(3)
NODE.CDATA_SECTION_NODE
NODE.ENTITY_REFERENCE_NODE
NODE.ENTITY_NODE
NODE.PROCESSING_INSTRUCTION_NODE
NODE.COMMENT_NODE
NODE.DOCUMENT_NODE
NODE.DOCUMENT_TYPE_NODE
NODE.DOCUMENT_FRAGMENT_NODE
NODE.NOTATION_NODE
someNode.nodeName和someNode.nodeValue获取属性名和属性值
获取孩子节点：someNode.childNodes.item(0),someNode.childNodes[0]
将NodeLists对象转换成数组：Array.prototype.slice.call(someNode.childNodes,0)
获取父节点：someNode.parentNode
someNode.previousSibling
someNode.nextSibling
parenetNode.firstChild
parentNode.lastChild
所有节点的最后一个属性：ownerDocument
parentNode.appendChild(childNode):如果节点已经存在，那么是移动节点
parentNode.insertBefore(newNode,parentNode.firstChild)成为第一个节点
parentNode.replaceChild(newNode,parentNode.firstChild)替换节点
parentNode.removeChild(parentNode.someChildNode)移除节点
替换和移除的节点仍然归文档所有，只是没有了位置
someNode.cloneNode:克隆节点，返回克隆后的节点，不会克隆事件，只是克隆特性
normalize: 找到空节点，删除，找到相邻的2个文本节点，合并
10.1.2 Document 类型
获得<html>引用
var html = document.documentElement == document.childs[0] == 
document.firstChild
获得body
document.body
获得<!doctype>
document.doctype
获得title
document.title
document.URL  document.domain  document.referrer
通过设置document.domain,可以让两个相同主域名的页面通信，例如，www.baidu.com
与music.baidu.com,需要将www.baidu.com设为music.baidu.com
document.getElementsByTageName: 返回HTMLcollection对象。此对象有一个
方法为namedItem方法，通过name属性获取节点，传入＊则获取html所有节点
document.getElementByName,通过name属性获取元素
document.anchors: 获取带name的a
document.forms：获取表单
document.images：获取图片
document.links：获取带href属性的a
文档写入
document.write  document.writeln最后加一个回车
document.open  document.close打开和关闭网页的输出流
10.1.3 element类型
所有的html元素，都是由HTMLElement或者更具体的子类型表示
elementNode.nodeName :得到的值都是大写的，
elementNode.tagName:推荐使用element.tagName.toLowerCase，兼容
所有浏览器
每个html元素存在的标准特性
id、title、lang、dir、className
操作特性的方法：getAttribute setAttribute removeAttribute
传入getAttribute方法的参数与实际的特性名相同，因此是
ElementNode.getAttribute('class')而不是ElementNode.getAttribute('className')
也可以通过此方法得到自定义特性的值，特性名不区分大小写
element元素是使用attributes属性的唯一一个节点
document.createElement 创建元素
ie浏览器可以接收document.createElement('<div>dd</div>')
其他浏览器只能接收一个元素名称，如div
元素也支持getElementsByTagName方法，只不过从该元素开始查找
10.1.4 text类型
获取text类型节点：div.firstChild
获取节点内容：div.nodeValue   div.data
text类型节点具有的方法：
appendData(text),将text添加到节点的末尾
deleteData(offset,count)
insertData(offset,text)
replaceData(offset,count,text)
splitText(offset)，从offset开始，将内容分成2个部分，是从文本节点中提取
数据的一种常用dom解析技术
substringData(offset,count)
创建文本节点
document.createTextNode('具体内容')
10.1.5 comment类型 注释
与text类型继承至相同的基类，注释节点可以通过父节点访问
10.1.6 CDATASection类型
10.1.7 DocumentType类型
10.1.8 DocumentFragment类型
10.2 Dom操作技术
动态脚本 动态样式 操作表格
*/
if(someNode.nodeType==Node.ELEMENT_NODE){//不适用于ie浏览器
	console.log('node is element');
}
if(someNode.nodeType ==1){ //适用于所有浏览器

}

<ul>
	<li>1</li>
	<li>2</li>
	<li>3</li>
</ul>
以上html代码，在ie浏览器中，ul的childNodes有3个子节点，其他浏览器中，有7个
子节点，包括4个文本节点。


