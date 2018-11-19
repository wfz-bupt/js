分开讲，而不是合并着讲
1.元素垂直水平居中
水平居中：
i）如果是元素是inline-block,那么在父级元素上使用text－align: center
i）如果元素是block，那么可以设置：margin-left和margin-right为auto
i）flex布局：justify-content: center
i）postion: absolute; margin-left margin-right 负的值
i）postion: absolute; transform
2.垂直居中：
i）单行文本：可以设置父级元素line-height等于height
i）行内块级元素：
.parent::after, .son{
    display:inline-block;
    vertical-align:middle;
}
.parent::after{
    content:'';
    height:100%;
}
i）利用table，将父级元素设置为display: table，子元素设置为table-cel, vertical-align: middle
i）利用flex，justify-content或者align-items
i）transform: translate
i）margin: 负数

flex布局
justify-content: 设置主轴方向上弹性盒子的排列方式，例如： space-between、space-around
align-content: 设置侧轴方向上弹性盒子的排列方式，对单行盒子无效
align-items: 
区别是什么？

margin折叠的所有情况：
http://www.w3cplus.com/css/understanding-bfc-and-margin-collapse.html
margin折叠的前提条件：
1.处于同一个bfc中
2.两个元素的margin是相邻的，没有padding或者border间隔。
3.垂直方向的相邻的外边距，包括以下情况：
i）元素的margin-top与其第一个常规文档流的子元素的margin-top
i）元素的margin-bottom与其下一个常规文档流的兄弟元素的margin-top
i）height为auto的元素的margin-bottom与其最后一个常规文档流的子元素的margin-bottom
i）高度为0并且最小高度也为0，不包含常规文档流的子元素，并且自身没有建立新的BFC的元素的margin-top和margin-bottom

