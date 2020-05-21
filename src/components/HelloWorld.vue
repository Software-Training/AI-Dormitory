<template>
  <div id="app">
    <p>Welcome to</p>
    <p>AI accommodation</p>
    <img
      id="logo"
      src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590052348429&di=ef90f1e0912ce3fe1e15074b8526b848&imgtype=0&src=http%3A%2F%2Ffile06.16sucai.com%2F2016%2F0921%2F2b04bfeb965677fe8c2d5a4dbd292478.jpg"
    />
    <router-link to="/login">
      <van-button id="login" type="primary" size="large">登录</van-button>
    </router-link>
    <router-link to="/register">
      <van-button id="register" type="primary" size="large">注册</van-button>
    </router-link>
  </div>
</template>

<script>
import { Button } from "vant";

export default {
  components: {
    [Button.name]: Button
  },
  methods: {
    gotologin() {
      //点击跳转至上次浏览页面
      // this.$router.go(-1)

      //指定跳转地址
      // this.$router.replace('/login')
      alert("login");
    },
    gotoregister() {
      //点击跳转至上次浏览页面
      // this.$router.go(-1)

      //指定跳转地址
      // this.$router.replace('/register')
      alert("register");
    }
  }
};
</script>  

<style>
#logo {
  width: 200px;
  height: 200px;
}
#login {
  margin-top: 20px;
}
#register {
  margin-top: 20px;
  background-color: white;
  color: green;
}
</style>