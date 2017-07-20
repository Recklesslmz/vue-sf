<template>
  <div class="Login">
    <div class="logo">
      <img src="https://static.segmentfault.com/v-59410548/global/img/logo-b.svg">
    </div>
    <div class="content">
      <div class="phone">
        <input type="text" placeholder="手机号" v-model="mobile">
      </div>
      <div class="password">
        <input type="text" placeholder="密码" v-model="password">
      </div>
    </div>

    <div class="regBtn">
      <button @click="login">登录</button>
    </div>

    <div class="thirdWay">
      <div class="line"></div>
      <div class="loginBtn">第三方账号快速登录</div>
      <div class="line"></div>
    </div>
    <div class="thirdWayLogo" @click="showTips">
      <div><img src="http://oqjgod7s1.bkt.clouddn.com/weixinsf.png"></div>
      <div><img src="http://oqjgod7s1.bkt.clouddn.com/qqsf.png"></div>
      <div><img src="http://oqjgod7s1.bkt.clouddn.com/weibosf.png"></div>
      <div><img src="http://oqjgod7s1.bkt.clouddn.com/googlesf.png"></div>
      <div><img src="http://oqjgod7s1.bkt.clouddn.com/githubsf.png"></div>
    </div>
  </div>
</template>

<script>
  import {Toast} from 'mint-ui'
  export default {
    data(){
      return {
        mobile: '',
        password: '',
        localMobile: window.localStorage.getItem('mobile'),
        localPassword: window.localStorage.getItem('password')
      }
    },
    created(){

    },
    methods: {
      checkForm(){
        if (!this.mobile || !this.password) return Toast('用户名或密码不能为空')
        if (this.localMobile !== this.mobile || this.localPassword !== this.password) return Toast('用户名或密码错误')
        return true
      },
      login(){
        const isValid = this.checkForm()
        console.log(isValid)
        if (!isValid) return
        if (this.localMobile === this.mobile && this.localPassword === this.password) this.$router.push({path: '/'})
      },
      showTips(){
        Toast('我只是装饰啦')
      }
    }

  }
</script>

<style lang='scss'>
  .Login {
    .logo {
      img {
        margin: 30% 0 0 15%;
        width: 70%;
      }
    }
    .content {
      margin: 3rem 0 0 0;
      .phone {
        margin: 1px 0 0 0;
        width: 100%;
        input {
          width: 100%;
          height: 3rem;
          outline: none;
        }
        input::-webkit-input-placeholder {
          position: relative;
          left: 1rem;
          font-weight: 100;
          color: #bbb;
        }
      }
      .name {
        @extend .phone;
      }
      .password {
        @extend .phone;
      }
    }
    .regBtn {
      margin: 2rem 0 0 2%;
      width: 96%;
      button {
        border: none;
        border-radius: 0.3rem;
        font-size: 1.3rem;
        font-weight: 300;
        width: 100%;
        height: 3rem;
        outline: none;
        background: #159963;
        color: #fff;
      }
    }
    .thirdWay {
      display: flex;
      width: 70%;
      margin: 1rem 0 0 15%;
      .loginBtn {
        flex: 2;
        position: relative;
        top: 0.3rem;
        text-align: center;
        color: #969696;
        font: {
          size: 0.8rem;
          weight: 300;
        }
      }
      .line {
        flex: 1;
        border-bottom: 1px solid #e5e5e5;
      }
    }
    .thirdWayLogo {
      display: flex;
      margin: 2rem 0 0 15%;
      text-align: center;
      width: 70%;
      div {
        flex: 7;
        img {
          width: 60%;
        }
      }
    }
  }
</style>
