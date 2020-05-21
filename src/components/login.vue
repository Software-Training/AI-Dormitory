<template>
  <div id="app">
    <div id="title">
      <h1>欢迎使用AI宿舍系统</h1>
    </div>
    <img
      id="logo"
      src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590052348429&di=ef90f1e0912ce3fe1e15074b8526b848&imgtype=0&src=http%3A%2F%2Ffile06.16sucai.com%2F2016%2F0921%2F2b04bfeb965677fe8c2d5a4dbd292478.jpg"
    />
    <!-- <van-cell-group class="top">
   <van-field v-model="userAccount" placeholder="请输入账号" label="账号"/>
 </van-cell-group>
 <van-cell-group class="top">
   <van-field v-model="password" placeholder="请输入密码" label="密码"/>
 </van-cell-group>
    <van-button id="login" type="primary" size="large" @click="gotologin">确认登录</van-button>-->
    <van-form @submit="onSubmit" v-model="account">
      <van-field
        v-model="account.userAccount"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="account.password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit" @click="gotologin">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { Button } from "vant";
import { loginAction } from "@/api/login.js";

export default {
  components: {
    [Button.name]: Button
  },
  data() {
    return {
      account: {
        userAccount: "",
        password: ""
      }
    };
  },
  methods: {
    gotologin() {
      loginAction(this.account).then(res => {
        console.log(res);
        alert(res.data.msg);
      });
    }
  }
};
</script>  

<style>
#app {
  /* background-color: antiquewhite; */
  width: 100%;
  height: 100%;
}
#logo {
  width: 200px;
  height: 200px;
}
#login {
  margin-top: 20px;
}
.top {
  margin-top: 20px;
}
</style>