/*
附录B
严格模式
使用严格模式的好处是，可以提前知道代码中的存在的错误，
B。1 选择使用
开启严格模式："use strict"
如果在全局作用域下使用use strict，则所有代码进入严格模式
也可以在函数内部使用use strict
B。2 变量
在严格模式下，给没有定义的变量赋值，会抛出ReferenceError错误
B。3 对象
在下列情况下，操作对象的属性会导致错误
i）为只读属性赋值
i）为不可拓展的属性添加属性
i）
B。4 函数
命名函数的参数必须唯一
在严格模式下，命名参数和arguments是独立的
淘汰了arguments.callee arguments.caller
B.5 eval()
它在包含上下文中不再创建变量或者函数
B。6 eval和arguments
B。7 抑制this
在非严格模式下使用函数的apply和call方法时，null或者undefined值会被转成全局对象，但在严格模式下，this就是指向
null或者undefined
B。8 其他变化
取消了with和以0开头的8进制字面量
*/

/*
附录C
javascript库
C。1 通用库
通用js库提供横跨几个主题的功能，通过使用新API包装常见功能来统一浏览器的接口，减小实现差异。
C。1.1 YUI
开源js和css库，网址：http://yuilibrary.com
C.1.2 Prototype
网址：http://www.prototypejs.org/
C.1.3 Dojo Toolkit
http://www.dojotoolkit.org/
C.1.4 MooTools
http://www.mootools.net/
C.1.5 jQuery
为js提供函数式编程接口的开源库，核心是构建于选择器之上的。
C。1.6 MochiKit
C。1.7 underscore.js
是为jquery的补充，提供了操作对象、数组、函数和其他js数据类型的更多的低级功能。
C.2 互联网应用
互联网应用库是针对于简化完整的web应用开发设计的，，它们并不提供应用问题的小块组件，而是提供了快速应用开发的整个概念
框架，虽然这些库也可能提供一些底层功能，但他们的目标是帮助用户快速开发web应用。
C。2.1 Backbone.js
构建于Underscorejs基础上的一个迷你MVC开源库，针对单页应用进行优化，
网址：http://documentcloud.github.com/backbone/
C.2.2 Rico
C.2.3 qooxdoo
C.3 动画和特效
C.3.1 script.aculo.us
C.3.2 moo.fx
C.3.3 Lightbox
C.4 加密
C.4.1 js MD5
C.4.2 javaScrypt
*/

/*
附录D js工具
使用工具可以提高工作效率，
D。1 校验器
校验js代码
D。1.1 JSLint
D。1.2 JSHint
D。1.3 javascript Lint
D.2 压缩器
D。2.1 JSMin
D。2.2 Dojo ShrinkSafe
D。2.3 YUI Compressor
D。3 单元测试
D。3.1 JsUnit
D。3.2 YUI Test
D。3.3 DOH
D。3.4 qUnit
D。4 文档生成器
D。4.1 JsDoc Toolkit
D。4.2 YUI Doc
D。4.3 AjaxDoc
D。5 安全执行环境
D。5.1 ADsafe
D。5.2 Caja
*/