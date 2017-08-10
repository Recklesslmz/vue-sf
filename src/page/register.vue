<template>
  <div class="Register">
    <div class="logo">
      <img src="https://static.segmentfault.com/v-59410548/global/img/logo-b.svg">
    </div>
    <div class="content">
      <div class="name">
        <input type="text" v-model="username" placeholder="真实姓名或者常用昵称">
      </div>
      <div class="phone">
        <input type="text" v-model="phone" placeholder="手机号（仅支持大陆手机号）">
      </div>
      <div class="password">
        <input type="password" v-model="password" placeholder="密码">
      </div>
    </div>

    <div class="regBtn">
      <button @click="register">注册</button>
    </div>

    <div class="rules">
      <span class="accept">同意并接受</span>
      <span class="service">《服务条款》</span>
    </div>
  </div>
</template>
<script>
  import {Toast} from 'mint-ui';

  export default {
    data(){
      return {
        username: '',
        phone: '',
        password: ''
      }
    },
    methods: {
      checkForm(name, mobile){
        if (!name) return Toast('请输入你的姓名')
        if (/[@#\$%\^&\*\_\!><,.]+/g.test(name)) return Toast('姓名含有非法字符')
        if (!(/^1[3|4|5|7|8][0-9]\d{4,8}$/.test(mobile))) return Toast('请输入正确的手机号码')
      },
      register(){
        const isValid = this.checkForm(this.username, this.phone)
        if (isValid) return
        let instance = Toast('注册成功')
        setTimeout(() => {
          instance.close()
          this.$router.push({path: '/'})
        }, 500)
        //将账号密码保存在本地的localStorage中
        window.localStorage.setItem('username', this.username)
        window.localStorage.setItem('phone', this.phone)
        window.localStorage.setItem('password', this.password)
      }
    }
  }
</script>

<style lang='scss'>
  .Register {
    .logo {
      img {
        width: 80%;
        margin: 30% 0 0 10%;
      }
    }
    .content {
      margin-top: 3rem;
      .phone, .name, .password {
        margin-top: 1px;
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
          color: #bbb
        }
      }
    }
    .regBtn {
      margin-left: 2%;
      margin-top: 2rem;
      width: 96%;
      button {
        border: none;
        font-size: 1.3rem;
        font-weight: 300;
        border-radius: .3rem;
        width: 100%;
        height: 3rem;
        outline: none;
        background: #159963;
        color: #fff;
      }
    }
    .rules {
      margin-top: 1.2rem;
      text-align: center;
      .accept {
        color: #969696;
      }
      .service {
        color: #159963;
      }
    }
  }
</style>
