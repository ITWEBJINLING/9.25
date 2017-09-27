//window.onload会发生覆盖，所以这里不写
//几个js文件是并列的关系，依赖的先引，没有关系的不加window.onload
//mayarray  拖拽
// 方便要去操作，提供的可以存储数据，可以增，删，改，查数据
//获取数据：如果有就直接用，如果没有就需要初始化
//属性：
//存储：往localstorage上存储
//方法：
//增，删，改，查
class storage{
      constructor(){
          this.data=[
              {name:'李四',age:18,xuehao:123,phone:'187654321'},
              {name:'王五',age:18,xuehao:123,phone:'187654321'},
              {name:'张三',age:18,xuehao:123,phone:'187654321'},
              {name:'赵六',age:18,xuehao:123,phone:'187654321'},
          ];
      }
      // 初始数据
      init(){
          localStorage.setItem('students',JSON.stringify(this.data));
      }
      // 获取数据
      getData(){
          // 从localstorage获取关于students的数据,有可能获取到，有可能获取不到
          let data=localStorage.getItem('students');
          // 如果数据不存在，调用初始化方法
          if(!data){
              this.init();
          }
          // 如果数据存在，直接返回
          //后面不能直接写data，肯定能获取到
          return this.data=JSON.parse(localStorage.getItem('students'));
      }
      // 更新数据，修改数据
    //row哪一行数据   type修改哪个属性  value修改的最终值
      update(row,type,value){
          // 调用上面的方法更新数据
           this.data[row][type]=value;
           this.save();
      }
      cancel(index){
          this.data.splice(index,1);
          this.save();
      }
      push(obj){
          this.data.push(obj);
          this.save();
      }
      // 保存数据
      save(){
            localStorage.setItem('students',JSON.stringify(this.data));
            // localStorage.students=JSON.stringify(data);
      }

}