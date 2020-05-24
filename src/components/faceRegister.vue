<template>
  <div id="app">
    <van-nav-bar
  title="人脸录入"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
/>
<div class="container-fluid centerdiv">
				<!--<form id="loginform" action="Main.html" onsubmit="return check()">-->
				<input style="display:block;margin:0 auto" type="text" v-model="img.imgId"  id="imgId" value="" placeholder="输入用户账号"/>
				<div class="login-div cen">
					<div id="face-box" >
						<video ref="video" id="video"></video>
					</div>
					<div id="overflow">						
					</div>
					<div style="display: none;">
						<canvas id="canvas" ref="canvas00"></canvas>
					</div>
				</div>
				<!--</form>-->
			</div>
			<br />
			<br />
      <van-button id="register" type="primary" size="large" @click="gotoRegister">注册</van-button>
  </div>
</template>
<style>
@import "../components/css/faceRegister.css";
</style>
<script>
import { faceRegisterAction } from "@/api/face.js";
import { Toast } from 'vant';
export default {
  data() {
    return{
      mediaStreamTrack:null,
      img: {
        imgId: "",
        imgStr: "",
        imgType:"BASE64"
      },
      isShow:false
    }
  },
  mounted(){
      
      this.openUserMedia()
  },
  methods: {
    //调用摄像头
    openUserMedia() {
      //var video1 = document.getElementById("video");
    if(navigator.mediaDevices.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.getUserMedia){
        this.getUserMediaToPhoto({video:{width:480,height:320,facingMode: "user"}},this.success,this.error);
    }else{
        alert('你的浏览器不支持访问用户媒体设备');
    }
},
 success(stream){
    //兼容webkit核心浏览器
    // var CompatibleURL = window.URL || window.webkitURL;
    //将视频流转化为video的源
    this.mediaStreamTrack=stream;
    try {
        // video.src = CompatibleURL.createObjectURL(stream);
        this.$refs['video'].srcObject=stream;
    }catch (e) {
        console.log("访问用户媒体设备失败：",e.name,e.message);
    }

    this.$refs['video'].play();//播放视频

    //将视频绘制到canvas上
},
//错误回调函数
 error(error) {
    console.log('访问用户媒体失败：',error.name,error.message);
},
getUserMediaToPhoto(constraints,success,error) {
    if(navigator.mediaDevices.getUserMedia){
        //最新标准API
        navigator.mediaDevices.getUserMedia(constraints).then(success).catch(error);
    }else if (navigator.webkitGetUserMedia) {
        //webkit核心浏览器
        navigator.webkitGetUserMedia(constraints,success,error);
    }else if(navigator.mozGetUserMedia){
        //firefox浏览器
        navigator.mozGetUserMedia(constraints,success,error);
    }else if(navigator.getUserMedia){
        //旧版API
        navigator.getUserMedia(constraints,success,error);
    }
},
getFace() {
    var canvas=document.getElementById("canvas");
    var  video=document.getElementById("video");
    var  canvas00=this.$refs['canvas00'];
    var context =canvas00.getContext('2d');
    context.drawImage(video, 0, 0, 180, 150);
    this.img.imgStr=canvas.toDataURL('image/jpg')
   //获取完整的base64编码
    this.img.imgStr=this.img.imgStr.split(',')[1];
},
offUserMedia() {
    if(this.mediaStreamTrack!=null)
    {
    console.log(this.mediaStreamTrack)
    this.mediaStreamTrack.getTracks()[0].stop();
    }
   
},
    gotoRegister() {
      //faceRegisterAction
      this.getFace();
      console.log(this.img)
       faceRegisterAction(this.img).then(res => {
       if(res.data.start==true)
        {
            this.offUserMedia();
            Toast.success('注册成功');
            this.$router.push({ path: `/hello` });
           
        }
        else{
            Toast.fail(res.data.errorMsg);
        }
      });
    },   
    onClickLeft() {
      this.$router.go(-1);
  }
 
}
}
</script>  

<style>
#app {
  /* background-color: antiquewhite; */
  width: 100%;
  height: 100%;
}
#register {
  margin-top: 20px;
}
.top {
  margin-top: 20px;
}
.bottom {
  margin-bottom: 20px;
}
</style>