/*
* @Author: lenovo
* @Date:   2017-09-19 14:49:24
* @Last Modified by:   lenovo
* @Last Modified time: 2017-09-19 19:00:59
*/
//模拟document.getElementsByClassName(className)
function getClass(classname,ranger){
	ranger=ranger?ranger:document;
	if(document.getElementsByClassName){
		return ranger.getElementsByClassName(classname);
	}
	else{
		var newarr=[];
		var all=ranger.getElementsByTagName('*');
		for(var i=0;i<all.length;i++){
			if(checkClass(all[i].className,classname)){
				newarr.push(all[i]);
			}
		}
		return newarr;
	}
}
function checkClass(className,classname){
	var arr=className.split(' ');
	for(var i=0;i<arr.length;i++){
		if(arr[i]==classname){
			return true;
		}
	}
	return false;
}
//获取指定元素
//$(select)
//$('.one'),$('#'),$('div')
//参数说明：select数据类型是一个字符串，作用类似于选择器
//$函数是为了方便我们去用
//判断字符串是否符合某一个规则：正则运算：来判断
function $(select,rang){
	rang=rang?rang:document;
	var first=select.charAt(0);
	if(first=='.'){
          return getClass(select.substring(1));
	}
	else if(first=='#'){
          return rang.getElementById(select.substring(1));
	}
	// 标签符合规则，规则不一定符合标签
	else if(/^[a-z][a-z1-6]{0,7}$/.test(select)){
          return rang.getElementsByTagName(select);
	}
}