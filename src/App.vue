<template>
  <div id="app">
    <div v-if="isShow" >
      <van-notice-bar scrollable  left-icon="volume-o" mode="closeable"  :text="message" />
      </div>
     <keep-alive exclude="Detail">
    <router-view></router-view>
    </keep-alive>
    <minShopBar v-if="showMinShopTab" />
  </div>
</template>

<script>
import minShopBar from '@/components/content/menu'
export default {
  name: 'App',

  data () {
    return {
      showMinShopTab: false,
      message:'',
      isShow:false,
      path:this.$route.path
    }
  },
created(){
     //mounted()获取不到data中的数据？
     //mouted中的this指向的是window作用域，所以会出现获取到的data中的数据出现没有定义的情况
     var that=this
    if('WebSocket' in window){
       that.websocket = new WebSocket("ws://localhost:9090/wsdemo");
    }
    else{
        alert('Not support websocket')
    }
    //  //连接发生错误的回调方法
    // that.websocket.onerror = function(){
       
    //     that.setMessageInnerHTML("error");
    // };
    // //连接成功建立的回调方法
    // that.websocket.onopen = function(){
    //     that.setMessageInnerHTML("open");
    // }

    //接收到消息的回调方法
    that.websocket.onmessage = function(event){
      if(event.isTrusted==true)
      {
        that.isShow=true
        that.message=event.data
      }
       
        //that.setMessageInnerHTML(event.data);
        
    }
    //连接关闭的回调方法
    this.websocket.onclose = function(){
          that.isShow=false;
         //that.setMessageInnerHTML("close");
    }

    //监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
    window.onbeforeunload = function(){
       that.websocket.close();
    }
 } ,
  mounted(){
},
 methods: { 
 },
  watch: {
    /**
     * 侦听路由的变化,控制底部tabbar的显示
     */
    '$route' (to) {
      if (to.path === '/temperatureInfo'||to.path === '/signInfo'||to.path === '/records'||to.path === '/index' || to.path === '/mine' ) {
        this.showMinShopTab = true
      } else {
        this.showMinShopTab = false
      }
    }
  },

  components: {
    minShopBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 1rem;
}
</style>
