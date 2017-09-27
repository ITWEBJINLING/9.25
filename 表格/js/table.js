/*
* @Author: lenovo
* @Date:   2017-09-26 16:07:42
* @Last Modified by:   lenovo
* @Last Modified time: 2017-09-26 22:14:10
*/
window.addEventListener('load',function(){

    // 获取元素

    let table=document.querySelector('tbody');
    let button=document.querySelector('button');
    let add=document.querySelector('.add');
    let dataObj=new storage();



     //添加数
    //index为下标
    load();
    function load(){
    let students=dataObj.getData();
    students.forEach((element,index)=>{
         Tr(element,index);
    })
    }

    //update更新数据
     function Tr(obj,i){
        let tr1=document.createElement('tr');
        tr1.id=i;
        for(let j in obj){
        tr1.innerHTML+=`
            <td type="${j}">${obj[j]}</td>
        `;}
        tr1.innerHTML+=`<td class="del"><button>删除</button></td>`
         table.appendChild(tr1);
         console.log(i);
      }
    // console.log(students);
      // 双击修改数据
    //表格值赋值给oldv ---->清空表格的内容--->创建一个表单--->将oldv值赋值给表单--->把表单值插入表格的最后
    //失去焦点之后--->把表单中的值给newv--->移除表单中的内容--->如果newv没值把oldv的值传入--->有值就用newv的值
    table.ondblclick=function(e){
    	    let tableT=e.target;
                  if(tableT.nodeName=='TD' && tableT.className!='del'){
                        let oldv=tableT.innerText;
                        tableT.innerText='';
                        let inputs=document.createElement('input');
                        inputs.value=oldv;
                        tableT.appendChild(inputs);
                        inputs.onblur=function(){ 
                             	let newv=inputs.value.trim();
                             	 tableT.removeChild(inputs);
            	                 // inputs=removeChild(input);
                                  if(!newv){
                                     newv=oldv;
                                  }
                                  tableT.innerText=newv;
                                  let row=tableT.parentNode.id,
                                      type=tableT.getAttribute('type'),
                                      value=newv;
                                  console.log(row)
                                  dataObj.update(row,type,value);
                  }
    }
              else if(tableT.nodeName=='BUTTON'){
                  let tr=tableT.parentNode.parentNode;
                  // table.removeChild(tr);
                  let index=tableT.parentNode.parentNode.id;
                  dataObj.cancel(index);
                  table.innerHTML='';
                  load();
              }
          }
    // 添加数据
    add.ondblclick=function(){
        let arr1={name:'郭金玲',age:21,xuehao:40,phone:'18735128888'}
        Tr(arr1,table.childElementCount);
        dataObj.push(arr1);
    }
})