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
	//针对mouseout和mouseover
	getRelatedTarget: function(event){
		if(event.relatedTarget){
			return event.relatedTarget
		}else if(event.toElement){
			return event.toElement;
		}else if(event.fromElement){
			return event.fromElement;
		}else{
			return null;
		}
	},
	//跨浏览器的鼠标滚轮增量值,opera9.5正负值颠倒 firefox事件名不一样
	getWheelDelta: function(event){
		if(event.wheelDelta){
			return (client.engine.opera&&client.engine.opera<9.5?
				-event.wheelDelta:event.wheelDelta);
		}else{
			return -event.detail*40;
		}
	},
	getCharCode: function(event){
		if(typeof event.charCode == 'number'){
			return event.charCode;
		}else{
			return event.keyCode;
		}
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
	getClipboardText: function(event){
		var clipboardData = (event.clipboardData||window.clipboardData);
		return clipboardData.getData("text");
	},
	setClipboardText: function(event,value){
		if(event.clipboardData){
			return event.clipboardData.setData("text/plain",value);
		}else if(window.clipboardData){
			return window.clipboardData.setData("text",value);
		}
	}
};

function getSelectedText(textbox){
    if(typeof textbox.value.selectionStart == "number"){
        return textbox.value.substring(textbox.selectionStart,textbox.selectionEnd);
    }else if(document.selection){
        return document.selection.createRange().text;
    }
}

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

//ajax
function Ajax(type, url, data, success, failed){
    // 创建ajax对象
    var xhr = null;
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject('Microsoft.XMLHTTP')
    }
 
    var type = type.toUpperCase();
    // 用于清除缓存
    var random = Math.random();
 
    if(typeof data == 'object'){
        var str = '';
        for(var key in data){
            str += key+'='+data[key]+'&';
        }
        data = str.replace(/&$/, '');
    }
 
    if(type == 'GET'){
        if(data){
            xhr.open('GET', url + '?' + data, true);
        } else {
            xhr.open('GET', url + '?t=' + random, true);
        }
        xhr.send();
 
    } else if(type == 'POST'){
        xhr.open('POST', url, true);
        // 如果需要像 html 表单那样 POST 数据，请使用 setRequestHeader() 来添加 http 头。
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send(data);
    }
 
    // 处理返回数据
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            if(xhr.status == 200){
                success(xhr.responseText);
            } else {
                if(failed){
                    failed(xhr.status);
                }
            }
        }
    }
}
//jsonp

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

