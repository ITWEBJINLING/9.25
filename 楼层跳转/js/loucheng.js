/*
* @Author: lenovo
* @Date:   2017-09-23 12:05:30
* @Last Modified by:   lenovo
* @Last Modified time: 2017-09-24 22:53:39
*/
//符合元素块到页面上边的距离-屏幕的高度=超出上边的的部分    就显示图片
//
//
// 获取浏览器窗口的高度
// let chuangkou=window.innerHeight;
// // 获取每个图片块
// let floor=document.querySelectorAll('.floor');
// 新建一个数组，存储获取的图片块
// let newarr=[];
// // 将每一块的高度遍历放入新数组中
// element表示的是每一个值
// floor.forEach(element=>{newarr.push(element.offsetTop)});
window.onload=function(){
let chuangkou=window.innerHeight;
let floor=document.querySelectorAll('.floor');
let tiaozhuan=document.querySelectorAll('li');
let newarr=[];
let flag=true;
let color=['red','orange','yellow','green'];
floor.forEach(element=>{newarr.push(element.offsetTop)});
    tiaozhuan.forEach((element,index)=>{
    element.onclick=function(){
    flag=false;
    // document.body.scrollTop=newarr[index];
    for(let i=0;i<tiaozhuan.length;i++){
    tiaozhuan[i].style.background='none';
    }
    tiaozhuan[index].style.background=color[index];
    animate(document.body,{scrollTop:newarr[index]},function(){flag=true;      
                })
     } 
    });
// 

// 
// // 屏幕的位置
// // scrolltop是超出上边的距离，超出body的部分 
//    // let flag=true;     
    //value->每个值;index->下标
    //遍历数组，查看如果每个值的超出部分+窗口高度=每个元素的高度  就执行语句，显示图片
window.onscroll=function(){
    if(!flag){
            return;
        }
	let locat=document.body.scrollTop;
    newarr.forEach((value,index)=>{
        if(locat+chuangkou>=value+20){
        for(let i=0;i<tiaozhuan.length;i++){
            tiaozhuan[i].style.background='none';
        }
        tiaozhuan[index].style.background=color[index];       
    	// 通过每一块的元素获取到它的图片内容
         let imgs=floor[index].getElementsByTagName('img');
         // 因为是集合，所以用for进行遍历
         for(let i=0;i<imgs.length;i++){
         	// 将图片的属性tupianimg的属性值赋值给src这个属性
         	imgs[i].src=imgs[i].getAttribute('tupianimg');
            // animate(,)
         }
    }
   })
}
}