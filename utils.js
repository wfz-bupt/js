//产生low－high之间的任意值
function selectFrom(lowerValue,upperValue){
	var choices = upperValue - lowerValue +1;
	return Math.floor(Math.random()*choices + lowerValue);
}

//解析查询字符串
function getQueryStringArgs(){
	var qs = (location.search.length>0?location.search.substring(1):""),
	args = {},
	items = qs.length?qs.split("&"):[],
	item = null,
	name = null,
	value = null,
	i =0,
	len = items.length;
	for(i=0; i<len; i++){
		item = items[i].split("=");
		name = item[0];
		value = item[1];
		if(name.length){
			args[name] = value;
		}
	}
	return args;
}
//检测浏览器安装的插件 p212
/*
在浏览器环境下，测试任何对象的某个特性是否存在，使用以下函数
*/
function isHostMethod(object,property){
	var t = typeof object[property];
	return t == 'function' || (!!(t=='object'&&object[property])) || 
			t == 'unknow';
}

/*跨浏览器的事件处理*/
var EventUtil = {
	addHandler: function(element,type,handler){
		if(element.addEventListener){
			element.addEventListener(type,handler,false);
		}else if(element.attachEvent){
			element.attachEvent('on'+type, handler);
		}esle{
			element["on"+type] = handler;
		}
	},
	getEvent: function(event){
		return event? event:window.event;
	},
	getTarget: function(event){
		return event.target || event.srcElement;
	},
	preventDefault: function(event){
		if(event.preventDefault){
			event.preventDefault();
		}else{
			event.returnValue = false;
		}
	},
	stopPropagation: function(event){
		if(event.stopPropagation){
			event.stopPropagation();
		}else{
			event.cancelBubble = true;
		}
	},
	removeHandler: function(){
		if(element.removeEventListener){
			element.removeEventListener(type,handler,false);
		}else if(element.detachEvent){
			element.detachEvent('on'+type, handler);
		}esle{
			element["on"+type] = null;
		}
	},
};