/*
* @Author: lenovo
* @Date:   2017-09-25 14:28:08
* @Last Modified by:   lenovo
* @Last Modified time: 2017-09-25 15:10:51
*/
// 类可以不加可以加分号
// 属性：
// 为其进行修饰，描述，特征
// this.obj  拖拽的对象
// this.isX  是否允许在X轴方向拖拽
// this.isY   是否允许在y轴方向拖拽
//this.rangerx   0-300
//this.rangery   100-300
// 方法：
// 动作，做什么，实现什么功能，实现的时候怎么去实现
// this.move
    class Drag{
	    constructor(obj){
          this.obj=obj;
	    }
	    move(){
	      let that=this;
	      // 鼠标按下
	      // 
	      // 
          this.obj.addEventListener('mousedown', function(e){
          let ox=e.offsetX,oy=e.offsetY;
          // 鼠标移入
          // 
          // 
          document.addEventListener('mousemove',fn);
          // 鼠标抬起
          // 
          // 
          that.obj.addEventListener('mouseup',function(){
           document.removeEventListener('mousemove',fn);
     	})  
     	function fn(e){
     		  let lefts=e.clientX-ox,tops=e.clientY-oy;
                    that.obj.style.left=`${lefts}px`;
                    that.obj.style.top=`${tops}px`;
     	}         
      })
	  }
}