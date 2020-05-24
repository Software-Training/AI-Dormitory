<template>
  <div id="app">
    <van-nav-bar
  title="账号注册"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
/>
    <div>
      <van-form @submit="onSubmit" v-model="registerInfo">
        <van-cell-group class="top">
          <van-field v-model="registerInfo.userAccount" placeholder="请输入用户名" label="用户名" />
        </van-cell-group>
        <van-cell-group class="top">
          <van-field type="password" v-model="registerInfo.password" placeholder="请输入密码" label="密码" />
        </van-cell-group>
        <van-cell-group class="top bottom">
          <van-field v-model="telephone" placeholder="用于找回账号与密码" label="手机号" disabled />
        </van-cell-group>
        <van-field v-model="sms" center clearable label="短信验证码" placeholder="请输入短信验证码" disabled>
          <template #button>
            <van-button size="small" type="primary">发送验证码</van-button>
          </template>
        </van-field>
        <van-cell-group class="top">
          <van-field label="学校" value="江西财经大学" readonly />
          <van-field v-model="registerInfo.numberId" label="学号" value="请填写学号" />
        </van-cell-group>
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit" @click="gotoRegister">提交</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import { Button } from "vant";
import { registerAction } from "@/api/register.js";
import { Toast } from 'vant';
export default {
  components: {
    [Button.name]: Button
  },
  data() {
    return {
      registerInfo: {
        userAccount: "",
        password: "",
        numberId: ""
      },
      telephone: "",
      sms: "",
      title: "欢迎注册"
    };
  },
  methods: {
    gotoRegister() {
      registerAction(this.registerInfo).then(res => {
       if(res.data.success==true)
        {
           Toast.success('注册成功');
           this.$router.push({ path: `/faceRegister` });
        }
        else{
            Toast.fail('学号不存在');
        }
      });
    },    
    onClickLeft() {
      this.$router.go(-1);
  },
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