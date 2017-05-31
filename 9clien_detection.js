/*
第9章 客户端监测
各个浏览器的不一致 如果能找到通用方法就用通用方法 最后才考虑用客户端监测
9.1 能力检测
最常用的，识别浏览器的能力,应该先检测最常用的，避免多次检测
用哪个特性，检测哪个特性
在可能的情况下，使用typeof进行能力检测
9.2怪癖检测
识别浏览器的缺陷bug
1.ie8及之前版本有个bug，如果某个实例属性与[[Enumerable]]为false的某个原型属性同名，则
该实例属性不会出现在for-in循环中
2.safari3会返回对象中隐藏的属性
9.3 用户代理检测
9,3.2用户代理字符串检测技术
检测5大呈现引擎，ie，gecko、webkit、khtml、opera的通用方法。程序如下：
*/
if(object.propertyInQuestion){
	//shi使用 object.propertyInQuestion
}
/*
在浏览器环境下，测试任何对象的某个特性是否存在，使用以下函数
*/
function isHostMethod(object,property){
	var t = typeof object[property];
	return t == 'function' || (!!(t=='object'&&object[property])) || 
			t == 'unknow';
}

/*检测5大呈现引擎，ie，gecko、webkit、khtml、opera的通用方法。程序如下：
用户代理检测是客户端监测的最后一个选择，应该优先使用能力监测和怪癖监测。
*/
var client = function(){
	//呈现引擎
	var engine = {
		ie: 0,
		gecko: 0,
		webkit: 0,
		khtml: 0,
		opera: 0,
		//具体的版本号
		ver: null
	};
	var browser = {
		ie: 0,
		firefox: 0,
		safari: 0,
		konq: 0,
		opera: 0,
		chrome: 0,
		ver: null
	};
	var system = {
		win: false,
		mac: false,
		x11: false,
		//移动设备
		iphone: false,
		ipod: false,
		ipad: false,
		ios: false,
		android: false,
		nokiaN: false,
		winMobile: false,
		//移动设备
		wii: false,
		ps: false
	};


	var ua = navigator.userAgent;
	//检测opera
	if(window.opera){
		engine.ver = browser.ver = window.opera.version();
		engine.opera = browser.opera = parseFloat(engine.ver);
	}else if(/AppleWebKit\/(\S+)/.test(ua)){
		engine.ver = RegExp["$1"];
		engine.webkit = parseFloat(engine.ver);
		//确定是chrome还是safari
		if(/Chrome\/(\S+)/.test(ua)){
			browser.ver = RegExp["$1"];
			browser.chrome = parseFloat(browser.ver);
		}else if(/Version\/(\S+)/.test(ua)){
			browser.ver = RegExp["$1"];
			browser.safari = parseFloat(browser.ver);
		}else{
			var safariVersion = 1;
			if(engine.webkit < 100){
				safariVersion = 1;
			}else if(engine.webkit<312){
				safariVersion = 1.2;
			}else if(engine.webkit < 412){
				safariVersion = 1.3;
			}else{
				safariVersion = 2;
			}
			browser.safari = browser.ver = safariVersion;
		}
	}else if(/KHTML\/(\S+)/.test(ua)||/Konqueror\/([^;]+)/.test(ua)){
		engine.ver = browser.ver= RegExp["$1"];
		engine.khtml =browser.konq= parseFloat(engine.ver);
	}else if(/rv:([^\)]+) Gecko\/\d{8}/.test(ua)){
		engine.ver = RegExp["$1"];
		engine.gecko = parseFloat(engine.ver);
		//确定是不是firefox
		if(/Firefox\/(\S+)/.test(ua)){
			browser.ver = RegExp["$1"];
			browser.firefox = parseFloat(browser.ver);
		}
	}else if(/MISE ([^;]+)/.test(ua)){
		engine.ver= browser.ver= RegExp["$1"];
		engine.ie =browser.ie= parseFloat(engine.ver);
	}

	var p = navigator.platform;
	system.win = p.indexOf("Win") == 0;
	system.mac = p.indexOf("Mac") == 0;
	system.x11 = (p.indexOf("x11") == 0) || (p.indexOf("Linux") == 0);
	if(system.win){
		if(/Win(?:dows)?([^do]{2}) \s? (\d+\.\d+)?/.test(ua)){
			if(RegExp["$1"] == "NT"){
				switch (RegExp["$2"]){
					case "5.0": 
						system.win = "2000";
						break;
					case "5.1":
						system.win = "XP";
						break;
					case "6.0":
						system.win = "vista";
						break;
					case "6.1":
						system.win = "7";
						break;
					default: 
						system.win = "NT"
						break;
				}
			}else if(RegExp["$1"]=="9x"){
				system.win = "ME";
			}else{
				system.win = RegExp["$1"];
			}
		}
	}
	//检测移动设备
	system.iphone = ua.indexOf("iPhone") > -1;
	system.ipod = ua.indexOf("ipod") > -1;
	system.ipad = ua.indexOf("ipad") > -1;
	if(system.mac && ua.indexOf("Mobile") > -1){
		if(/CPU (?:iPhone )?OS (\d+\d+)/.test(ua)){
			system.ios = parseFloat(RegExp.$1.replace("_","."));
		}else{
			system.ios = 2;
		}
	}
	if(/Android (\d+\.\d+)/.test(ua)){
			system.android = parseFloat(RegExp.$1);
	}
	if(system.win == "CE"){
		system.winMobile = system.win;
	}else if(system.win == "Ph"){
		if(/Windows Phone OS (\d+\.\d+)/.test(ua)){
			system.win = "Phone";
			system.winMobile = parseFloat(RegExp.$1);
		}
	}

	system.wii = ua.indexOf("Wii") > -1;
	system.ps = /playstation/i.test(ua);

	return {
		engine: engine,
		browser: browser,
		system: system
	}
}();

