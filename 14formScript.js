/*
14 表单脚本
14.1 表单的基础知识
表单对应的是HTMLFormElement类型，继承自HTMLElement
有以下属性和方法：
acceptCharset: 服务器能够处理的字符串
action：接受请求的url
elements：表单中所有控件的集合（HTMLCollection）
enctype：请求的编码类型
length: 表单中控件的数量
method：要发送的请求类型
name：表单名称
reset（）：将所有表单域重置为默认值
submit（）：提交表单
target：用于发送请求和接收响应的窗口名称
获得表单的方式
1.利用getElementById
2.通过document.forms取得页面中所有表单
14.1.1 提交表单
使用<input>或<button>可以定义提交按钮，只要将其type的特性定义为submit
就行，而图像按钮则是通过type设置为image来定义的，
提交按钮实例，例子
点击提交按钮（或者执行submit方法时），浏览器便会把请求提交给服务器，在这之前，会触发submit事件，
这样我们就有机会验证表单数据
例子
提交表单最大的问题是重复提交：如果点击了没有反应用户就会重复提交。
解决方法：第一次提交后，禁用提交按钮，或者利用submit事件，取消程序后续的
表单提交操作。
14.1.2 重置表单
当用户单击重置按钮时，表单就会重置，使用type特性值为reset的<input>或者
<button>都可以创建重置按钮。例子
用户在点击重置按钮（或者执行reset方法）时，会触发reset事件，我们可以利用这个机会取消重置操作。
14.1.3 表单字段
可以像访问页面中的其它元素一样，使用原生DOM方法访问表单。
另一种方法：利用form的elements属性。包含着表单中的所有字段。
例子
1.共有的表单字段属性
除了<fieldset>元素之外，所有表单字段都拥有相同的一组属性。如下：
disabled: 当前字段是否被禁用
form：指向当前字段所属表单的指针，只读
name：当前字段的名称
readOnly：表示当前字段是否只读
tabIndex：表示当前字段的切换序号
type：当前字段的类型，如checkbox、radio等
value：当前字段将被提交到服务器的值
除了form外，可以用js修改任何属性
2.共有的表单字段方法
focus(): 用于将浏览器的焦点设置到表单字段
blur()：
3.共有的表单字段事件
blur：当前字段失去焦点时触发
change：对于input和textarea元素，在它们失去焦点且value时改变时触发，
对于select元素，在其选项改变时触发
focus：当前字段获得焦点时触发
14.2 文本框脚本
在html中，有两种方式来表现文本框，一种是input单行文本框，一种是textarea
多行文本框。
要表现文本框，必须将input的type设置为text，而通过size特性，可以指定
文本框中能够显示的字符数，通过value特性，可以设置文本框的初始值，而max
length特性则用于指定文本框可以接受的最大字符数。
textarea可以指定rows和cols特性，指定文本框的字符行数和字符列数。
input和textarea用户输入的内容保存在value属性中，可以通过这个属性设置
和读取文本框的值
14.2.1 选择文本
文本框都支持select方法，用于选择其中的文本。
1.select事件
在选择了文本框中的文本时，就会触发select事件，
2.取得选择的文本
html5通过拓展方法解决了这个问题，添加了2个属性，selectStart和selectEnd
表示所选择的文本的范围。
例子
支持此属性的浏览器有IE9+、Firefox、Safari、Chrome和Opera
IE8及更早的版本又一个document.selection对象，保存在用户在整个文档
范围内选择的文本信息。取得的方法为，例子
3. 选择部分文本
所有文本框都有一个setSelectionRange方法，接收两个参数，要选择的第一个
字符的索引，和最后一个字符之后的字符的索引。要看到选择的文本，必须在调用
此方法前或者后，将焦点设置到文本框。IE9、Firefox、Safari、Chrome和
Opera都支持这种方案。
IE8使用
例子，通用解决方法如例子
14.2.2 过滤输入
1.屏蔽字符
屏蔽所有按键操作, 对keypress事件进行preventDefault
屏蔽所有非数字字符，例子
2.操作剪贴板
6个剪贴板事件
beforecopy
copy
beforecut
cut
beforepaste
paste
要访问剪贴板中的数据，可以使用clipboardData对象，在IE中，这个对象是
window的属性，在ff4+、safari和chrome中，这个对象是event对象的属性。
对象有3个方法：getData() setData() clearData() 
getData接收一个参数，即要取得的数据的格式，在iE中有两种数据格式，"text"
和"url",而在safari和chrome中，只支持MIME类型.
并非所有浏览器都支持访问剪贴板，所以更简单的办法是屏蔽一个或者多个剪贴板操作。
14.2.3 自动切换焦点
例子，有3个文本框，用户在第一个文本框输入完固定个数的数字后，自动切换到
下一个文本框继续输入，例子
14.2.4 HTML5约束验证API
支持的浏览器有ff4＋ 、safari5+、chrome、opera10+
1.必填字段
<input type="text" name="username" required>
检测浏览器是否支持required
var isRequiredSupported = "required" in document.createElement("input")
2.其他输入类型
h5为input的type属性又增加了几个值，email和url是得到支持最多的类型
另外还有 number、range、datetime、datetime－local、date、month、
week还有time，目前这些浏览器的支持程度不怎好。慎用。
对所有数值型的输入，可以指定min和max属性
4输入模式
html5为文本字段新增pattern属性，用正则表达式来匹配文本框中的值
<input type="text" patter="\d+" name="count">
判断是否支持输入模式
"patter" in document.createElement("input")
5. 检测有效性
使用checkValidity()方法可以检测表单中的某个字段是否有效，所有表单字段
都有这个方法。表单元素的validity属性告诉你，为啥字段不合法。
该属性进一步包含以下属性
customError
patternMismatch
rangeOverflow
rangeUnderflow
stepMismatch
tooLong
typeMismatch
valid
valueMissing
6.禁用验证
通过设置novalidate属性，可以告诉表单不尽兴验证
<form method="post" action="" novalidate> </form>
为了指定某个提交按钮不必验证表单，可以在相应按钮上添加formnovalidate
属性
14.3 选择框脚本
选择框是通过select和option元素创建的，HTMLSelectionElement还提供了
以下属性和方法
add(newOption, relOption): 位置在relOption之前
multipe: 是否允许多项选择
options：控件中所有option元素的HTMLCollection
remove(index): 移除给定位置的选项
selectedIndex: 基于0的选中项的索引，如果没有选中项，则为－1
size：选择框中可见的行数
选择框的type属性不是"select-one"就是"select-multiple",选择框的value
属性等于选中项的value。
value的规则如下：
优先级：value特性》text特性
每个option元素都用一个HTMLOptionElement对象表示，该对象有以下属性：
index：当前选项在optons集合中的索引
lable：当前选项的标签
selected：当前选项是否被选中
text：选项的文本
value：选项的值
应该用options的方式取得option，而不是dom方式
14.3.1 选择选项
对option元素设置selected属性，可以使得select选中某一项
14.3.2 添加选项
1.dom方法
2.new Option()构造方法，ie不行
3.使用选择框的add方法
14.3.3 移除选项
1.dom方法
2.remove方法
14.3.4 移动和重排选项
使用dom的appendChild方法，可以使得将文档中已经存在的节点，移动到指定的
位置。移动选项会重置所有选项的index值
重排：使用insertBefore方法
14.4 表单序列化
在表单提交期间，浏览器是怎么样将数据发送给服务端的
i）对表单字段的名称和值进行url编码，使用&分割
i）不发送禁用的表单字段
i）不发送type为reset和button的按钮
i）多选选择框中的每个选中的值单独一个条目
i）
实现表单序列化的代码，例子
14.5 富文本编辑
富文本编辑又称WYSIWYG，what you see is what you get.
页面可编辑，通过设置designMode属性
14.5.1 使用contenteditable属性
14.5.2 操作富文本
使用document.execCommand()与富文本编辑器进行交互
还有document.queryCommandEnabled()
document.queryCommandState()
14.5.3 富文本选区
14.5.4 表单和富文本
*/
通用提交按钮
<input type="submit" value="Submit Form">
自定义提交按钮
<button type="submit">Submit Form</button>
图像按钮
<input type="image" src="img.gif">
//表单验证方法
var form = document.getElementById('myForm');
EventUtil.addHandler(form,"submit", function(event){
    event = EventUtil.getEvent(event);
    //禁止多次提交表单, 不可以通过监听click事件，完全俩回事
    var target = EventUtil.getTarget(event);
    var btn = target.elements['submit-btn'];
    btn.disabled = true;
    EventUtil.preventDefault();
});
//表单提交
form.submit();

// 通用重置按钮
// <input type="reset" value="reset Form">
// 自定义重置按钮
// <button type="reset">reset Form</button>
var form = document.getElementById('myForm');
EventUtil.addHandler(form,"reset", function(event){
    event = EventUtil.getEvent(event);
    EventUtil.preventDefault();
});

//取得表单中的第一个字段
var field1 = form.elements[0];
//取得名为textbox1的字段
var field2 = form.elements['textbox1'];
//取得文本框中选中的字符
function getSelectedText(textbox){
    if(typeof textbox.value.selectionStart == "number"){
        return textbox.value.substring(textbox.selectionStart,textbox.selectionEnd);
    }else if(document.selection){
        return document.selection.createRange().text;
    }
}
//选择部分文本
textbox.setSlectionRange(0,3);
function selectText(textbox, startIndex, stopIndex){
    if(textbox.setSlectionRange){
        textbox.setSlectionRange(startIndex,stopIndex);
    }else if(textbox.createTextRange){
        var range = textbox.createTextRange();
        range.collapse(true);
        range.moveStart("character",startIndex);
        range.moveEnd("character", stopIndex - startIndex);
        range.select();
    }
    textbox.focus();
}

//屏蔽所有非数字字符输入
EventUtil.addHandler(textbox, "keypress", function(event){
    event = EventUtil.getEvent(event);
    var target = EventUtil.getTarget(event);
    var charCode = EventUtil.getCharCode(event);
    if(!/\d/.test(String.fromCharCode(charCode))&&charCode >9&&
        !event.ctrlKey){
        event.preventDefault();
    }
})

function serialize(form){
    var parts = [],
    field = null,
    i,
    len,
    j,
    optLen,
    option,
    optValue;
    for(i=0, len=form.elements.length; i<len; i++){
        field = form.elements[i];
        swtich(filed.type){
            case "select-one":
            case "select-multiple":{
                if(filed.name.length){
                    for(j=0; j<filed.options.length; j++){
                        option = filed.options[j];
                        if(option.selected){
                            optValue = "";
                            if(option.hasAttribute){
                                optValue = (option.hasAttribute("value")?
                                            option.value: option.text);
                            }else{
                                optValue = 
                            }
                        }
                    }
                }
            }
        }
    }
}

