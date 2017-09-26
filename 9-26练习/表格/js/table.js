/*
* @Author: lenovo
* @Date:   2017-09-26 16:07:42
* @Last Modified by:   lenovo
* @Last Modified time: 2017-09-26 22:14:10
*/
window.addEventListener('load',function(){
    let table=document.querySelector('tbody');
    let button=document.querySelector('button');
    let add=document.querySelector('.add');

     // 数据内容：测试数据
     let people=[
        {name:'李四',age:18,xuehao:123,phone:'187654321'},
        {name:'王五',age:18,xuehao:123,phone:'187654321'},
        {name:'张三',age:18,xuehao:123,phone:'187654321'},
        {name:'赵六',age:18,xuehao:123,phone:'187654321'},
     ];
     let i=0;
     add.addEventListener('click',function(){  
        Tr(people[i]);
      }) 
     function Tr(obj){
        let tr1=document.createElement('tr');
        tr1.innerHTML=`
            <td>${obj.name}</td>
            <td>${obj.age}</td>
            <td>${obj.xuehao}</td>
            <td>${obj.phone}</td>
            <td><button>删除</button></td>
        `;
        table.appendChild(tr1);
        i++;
      }
    table.ondblclick=function(e){
    	    let tableT=e.target;
                  if(tableT.nodeName=='TD'){
                        let oldv=tableT.innerText;
                        tableT.innerText='';
                        let inputs=document.createElement('input');
                        inputs.value=oldv;
                        tableT.appendChild(inputs);
                        inputs.onblur=function(){ 
                             	let newv=inputs.value.trim();
            	                 inputs.removeChild(inputs);
                                 if(newv){
            	                 tableT.innerText=newv;
                                  }
                                  else{
                                    tableT.innerText=oldv;
                                  }
                  }
    }

              else if(tableT.nodeName=='BUTTON'){
                  let tr=tableT.parentNode.parentNode;
                  table.removeChild(tr);   
              }
          }
})