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
