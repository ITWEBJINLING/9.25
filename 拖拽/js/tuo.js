/*
* @Author: lenovo
* @Date:   2017-09-25 11:41:14
* @Last Modified by:   lenovo
* @Last Modified time: 2017-09-25 14:19:55
*/
window.addEventListener('load',function(){
//drag  down  move
     let box=document.querySelector('.box');
     // 鼠标按下
     box.addEventListener('mousedown',function(e){
     let ox=e.offsetX,
     	 oy=e.offsetY;
     // 鼠标按下并移动
     document.addEventListener('mousemove',fn);
     // 鼠标抬起
     box.addEventListener('mouseup',function(){    	
         document.removeEventListener('mousemove',fn);
     	})           
     function fn(e){
                    let lefts=e.clientX-ox,tops=e.clientY-oy;
                    box.style.left=`${lefts}px`;
                    box.style.top=`${tops}px`;
  	         }
  	     });	
})