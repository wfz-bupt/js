/*
20 JSON
曾经有一段时间，JSON是互联网上传输结构化数据的事实标准，web服务的第一次浪潮很大程度上都是建立在XML上的，突出的特点是
服务器与服务器间进行通信。
JSON是一种数据格式，虽然具有相同的语法形式，但是JSON并不从属于js，而且并不是只有js才用JSON。很对语言都有针对json
的解析器和序列化器。
20.1 语法
JSON的语法可以表示以下三种类型的值
简单值：使用与Js相同的语法，可以在json中表示字符串、数值、布尔值、和null，但json不支持undefined
对象：
数组
JSON不支持变量、函数和对象实例，它就是一种表示结构化数据的格式。
20.1.1 简单值
如果是数值则不用加引号，JSON字符串必须使用双引号，单引号会导致语法错误。
20.1.2 对象
js字面量
var person = {
    name: "wfz",
    age: 25
};或者
var person = {
    "name": "wfz",
    "age": 25
};
JSON表示上述对象的方式如下
{
    "name": "wfz",
    "age": 25
}
不同点在于，JSON中的对象属性名必须加双引号，不能不加，且不能是单引号。
且不用加分号
20.1.3 数组
20.2 解析与序列化
可以方便的把json数据结构解析为有用的js对象。
20.2.1 JSON对象
JSON对象有两个方法，stringify和parse，分别用于将js对象（前后不加双引号）序列化为JSON字符串(json对象被双引号包裹)，
和把JSON字符串解析为原生js值
例子
20.2.2 序列化选项
JSON.stringify接收3个参数，另外两个是过滤器、和选项表示是否在json字符串中保留缩进。
1.过滤结果
如果过滤参数是数组，则结果中只包含数组中列出的属性
JSON.stringify(person,["name"]);
{
    "name": "wfz"
}
过滤参数也可以是 函数
JSON.stringify(person,function(key,value){
    switch(key)
        case "name":
            return "fff"
})
2.字符串缩进
表示每个级别缩进的空格数
3.toJSON方法
理解序列化的内部执行顺序至关重要
（1）如果js对象中存在toJSON方法，且调用此方法可以返回有效的值，则可以调用该方法，否则返回对象本身
（2）如果提供了第二个参数，则应用这个函数过滤器，传入函数过滤器的值为（1）取得的值
（3）对（2）返回的每个值进行相应的序列化
（4）如果提供了第3个参数，则执行对应的格式化
20.3 解析选项
JSON.parse也接收第二个参数，该参数是一个函数，在每个键值对上调用。
*/
var book  = {
    title: "professional js",
    authors: ["wfz"],
    edition: 3,
    year: 2011
};
var jsonText = JSON.stringify(book);
//{"title":"professional js","author":["wfz"],"edition":3,"year":2011}