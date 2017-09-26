
window.addEventListener('load',function(){
   let name=document.querySelector('.name');
   let wenbenyu=document.querySelector('.wenbenyu');
   let tijiao=document.querySelector('.tijiao');
   let s1=document.querySelector('.s1');
   let s2=document.querySelector('.s2');
   let tijiaohou=document.querySelector('.tijiaohou');
    s1.innerText=`${wenbenyu.value.length}`;
    s2.innerText=`${wenbenyu.maxLength-wenbenyu.value.length}`;
   wenbenyu.onkeyup=function(){
   	s1.innerText=`${wenbenyu.value.length}`;
    s2.innerText=`${wenbenyu.maxLength-wenbenyu.value.length}`;
   }
   let dingwei=document.querySelector('.dingwei');

   dingwei.addEventListener('mouseover',function(e){
              let divs=e.target;
              if(divs){
                  divs.style.background='rgba(255,31,2,0.5)';
              }
               e.stoppropagation();
              })
  dingwei.addEventListener('mouseout',function(e){
              let divs=e.target;
              if(divs){
                  divs.style.background='none';
              }
              e.stoppropagation();
            })



   // dingwei.addEventListener('mouseover',function(e){
   //        let divs=e.target;
   //        divs.onmouseover=function(el){
   //         let divs1=el.target;
   //          if(divs1){
   //          divs.style.background='rgba(255,31,2,0.5)';
   //        }
   //        }
   //        divs.onmouseout=function(el1){
   //          let divs1=el1.target;
            
   //          if(divs1){
   //            divs.style.background='none';
   //          }
   //        }
   // })
    // 键盘按下回车执行
   document.onkeydown=function(e){
      let divs=document.createElement('div');
       if(e.keyCode==13){
         let first=dingwei.firstElementChild;
         if(first){
             dingwei.insertBefore(divs,first);
         }
         else{
             dingwei.appendChild(divs);
         }
         // divs.prependchild(dingwei);
         divs.innerHTML=`
            <div class="dingwei">
                <div class="haoyou">
                     <img src="img/CDC1EFC7EA3ACBD74911B5D3E8BCAA7E.jpg" alt="">
                     <h3>${name.value}</h3>
                      <p>账号：******</p>     
                 </div>
                 <div class="liuyanneirong">${wenbenyu.value}</div>
                 </div>`
         wenbenyu.value='';
         name.value='';
       }
     }
     // 鼠标单击执行
   tijiao.onclick=function(){
         let divs=document.createElement('div');
         let dingwei=document.querySelector('.dingwei');
             let first1=dingwei.firstElementChild;
         if(first1){
             dingwei.insertBefore(divs,first1);
         }
         else{
             dingwei.appendChild(divs);
         }
         divs.innerHTML+=`
              <div class="dingwei">
                <div class="haoyou">
                     <img src="img/CDC1EFC7EA3ACBD74911B5D3E8BCAA7E.jpg" alt="">
                     <h3>${name.value}</h3>
                      <p>账号：******</p>     
                 </div>
                 <div class="liuyanneirong">${wenbenyu.value}</div>
               </div>`
   	   wenbenyu.value='';
         name.value='';
   }
})