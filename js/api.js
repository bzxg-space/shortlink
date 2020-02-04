var short_url = document.getElementById('short_url');
var long_url = document.getElementById('long_url');
var flag = document.getElementById('flag'); //判断是否生成
function test() {
	if (short_url.value && short_url.value.indexOf("http") != -1 && (short_url.value.indexOf("t.cn") != -1 || short_url.value
			.indexOf("dwz.cn") != -1 || short_url.value.indexOf("mrw.so") != -1)) {
		return true;
	} else {
		toast("请生成后再操作！！！");
		return false;
	}
}
//访问
function into_url() {
	if (test()) {
		window.open(short_url.value);
	}
}
//复制
function copy_url() {
	if (test()) {
		copy(short_url.value);
	}
}
//清空
function init() {
	flag.innerHTML = "(◔◡◔)ready";
}
//获取
//by https://blog.csdn.net/qq_15243963/article/details/77970175
function ajax() {
	document.forms[0].target = "rf";
	if (long_url.value && long_url.value.indexOf("http") == -1 || !long_url.value) {
		toast("请输入合理的网址！！");
	} else {
		var xmlhttp = new XMLHttpRequest();
		var url = "数据接口";
		var flag_type; //接收方式
		if (document.forms[0].way.value == "mrw") {
			url = 'http://api.btstu.cn/mrw/api.php?url=';
			flag_type = 0;
		} else if (document.forms[0].way.value == "dwz") {
			url = 'http://api.btstu.cn/dwzcn/api.php?url=';
			flag_type = 0;
		} else if (document.forms[0].way.value == "t") {
			url = 'http://api.btstu.cn/tcn/api.php?url=';
			flag_type = 0;
		}
		url += long_url.value;
		var type = "GET"; //方法
		xmlhttp.open(type, url, true); //方法，接口，异步
		xmlhttp.send(); //发送请求
		xmlhttp.onreadystatechange = function() {
			if (xmlhttp.status == 200 && xmlhttp.readyState == 4) {
				var result;
				flag.innerHTML = "(*^．^*)ok";
				if (!flag_type) {
					result = JSON.parse(xmlhttp.response);
					short_url.value = result.shorturl;
				} else {
					result = xmlhttp.response;
					short_url.value = result;
				}
				console.log(result); //result即为接口返回给我们的数据具体进行处理可以封装一个方法
			}
		}
	}
}
