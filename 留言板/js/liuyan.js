/*
* @Author: lenovo
* @Date:   2017-09-25 19:11:07
* @Last Modified by:   lenovo
* @Last Modified time: 2017-09-25 22:55:47
*/
window.addEventListener('load',function(){
   let wenbenyu=document.querySelector('.wenbenyu');
   let tijiao=document.querySelector('.tijiao');
   let tijiaohou=document.querySelector('.tijiaohou');
    tijiaohou.innerText=`${wenbenyu.value.length+1}/${wenbenyu.maxLength}`;
   wenbenyu.onkeydown=function(){
   	tijiaohou.innerText=`${wenbenyu.value.length+1}/${wenbenyu.maxLength}`;
   }
   console.log(wenbenyu.value.length);
   tijiao.onclick=function(){
   	  tijiaohou.innerText=wenbenyu.value;
   	  wenbenyu.value=null;
   }
})