<template>
  <div class="login_form">
    <div class="login_right login_right_same">
      <input type="text"  class="login_user qxs-icon"  placeholder="用户名" v-model="userName" ref="login_userName">
      <input type="password"  class="login_password qxs-icon"  placeholder="密码" ref="login_password" v-model="password">
      <button class="login_btn" type="button" @click="login()">登录</button>
      <div style="margin-top: 10px">
        <span style="float: left;color: #000099;">管理员账号登陆</span><span style="float: right;color: #A9A9AB">忘记密码？</span>
      </div>
    </div>
  </div>
</template>

<script>
import {loginFunc} from './js/login.js'
export default {
  name: 'Login',
  data () {
    return {
      userName: '',
      password:''
    }
  },
  methods:{
    login:function(){
      var loginName = this.$refs.login_userName.value;
      var password = this.$refs.login_password.value;
      loginFunc(loginName,password);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import './css/login.css'
</style>
