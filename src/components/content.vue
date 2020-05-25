<template>
    <div id="app">
        <van-search id="search" v-model="value" placeholder="请输入搜索信息" />
        <div id="date">
           {{getDate()}}
        </div>
        
        <div id="form">
          <el-table :data="record" style="width: 100%">

            <el-table-column prop="recordId" label="记录编号" width="180">
            </el-table-column>

            <el-table-column prop="inTime" label="进入时间" width="180">
            </el-table-column>

            <el-table-column prop="outTime"  label="出去时间">
            </el-table-column>

            <el-table-column prop="userId"  label="用户编号">
            </el-table-column>

            <el-table-column prop="date"  label="日期">
            </el-table-column>

          </el-table>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    
    data(){
        return{
            checked: true,
            activeIcon: 'https://img.yzcdn.cn/vant/user-active.png',
            inactiveIcon: 'https://img.yzcdn.cn/vant/user-inactive.png',
            value:'',
            record:[],  //返回记录中的内容
        }
    },
    methods: {
      getDate(){
          var date = new Date();
          var y = date.getFullYear(); //年
          var m = date.getMonth()+1;//月，这里的月份必须要+1才是当前月份
          var d = date.getDate(); //日，getDay是获得当前星期几（0-6），getDate是获得当前日期
          var currentDate = "Date : "+y+"-"+m+"-"+d;
          return currentDate;
      },
      getRecord(){
          //获取数据库表record中的内容
          axios.get("获取数据库中的表的内容") .then((res)=>{     //！！！！修改
             this.record=res.record;
        })
      },
      getSearchRecord(){
          //匹配查询搜索框中的信息
          axios.get("获取数据库中的表的内容") .then((res)=>{     //！！！！修改
             this.record=[];  //先置为空，匹配到了再显示
             for(var i=0;i<res.record.length();i++){
             if(this.value == res.record[i].inTime || this.value == res.record[i].outTime || this.value == res.record[i].date){
               this.record.push(res.record[i]);
             }
            if(this.value==''){
                this.record=res.record;
            }
          }
        })

      }
    },
}
</script>
<style scoped>
#date{
    border: 1px solid grey;
    width: 50%;
    color: grey;
    font-family:Georgia, 'Times New Roman', Times, serif;
    margin-left: 5%;
    /* float: left; */
    /* background-color: lemonchiffon; */
    height:  20px;
}
 .img-icon {
    height: 20px;
  }
  #form{
      width: 90%;
      margin-left: 5%;
      height: 400px;
      border: 1px solid grey;
      margin-top: 2%;
  }
</style>