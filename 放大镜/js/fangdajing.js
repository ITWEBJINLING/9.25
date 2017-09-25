window.addEventListener('load',function(){
    let small=document.querySelector('.small');
    let big=document.querySelector('.big');
    let bimg=big.getElementsByTagName('img')[0];
    let circle=document.querySelector('.circle');
    let tian=document.querySelector('.tian');
    let zhezhaow=circle.offsetWidth,
        zhezhaoh=circle.offsetHeight,
        smallw=small.offsetWidth,
        smallh=small.offsetHeight,
        bigw=big.offsetWidth,
        bigh=big.offsetHeight;
    let bili=bimg.offsetWidth/parseInt(getComputedStyle(small,null).width);
    tian.onmousemove=function(e){
    	let lefts=e.offsetX-zhezhaow/2,tops=e.offsetY-zhezhaoh/2;       
        if(lefts>=smallw-zhezhaow){
        	lefts=smallw-zhezhaow;
        }
        if(lefts<0){
        	lefts=0;
        }
        if(tops>=smallh-zhezhaoh){
        	tops=smallh-zhezhaoh;
        }
        if(tops<0){
        	tops=0;
        }
        circle.style.left=`${lefts}px`;
        circle.style.top=`${tops}px`;
        bimg.style.width=bigw*smallw/zhezhaow+'px';
        bimg.style.height=bigh*smallh/zhezhaoh+'px';
        bimg.style.left=-smallw*lefts/zhezhaow+'px';
        bimg.style.top=-smallh*tops/zhezhaoh+'px';
    }
 }) 