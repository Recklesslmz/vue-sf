<template>
<div class="Login">
  <div class="logo">
    <img src="https://static.segmentfault.com/v-59410548/global/img/logo-b.svg" />
  </div>
  <div class="content">
    <div class="phone">
      <input type="text" placeholder="Email/手机号" />
    </div>
    <div class="password">
      <input type="text" placeholder="密码" />
    </div>
  </div>

  <div class="regBtn">
    <button>登录</button>
  </div>

  <div class="thirdWay">
    <div class="line"></div>
    <div class="loginBtn">第三方账号快速登录</div>
    <div class="line"></div>
  </div>
  <div class="thirdWayLogo">
    <div><img src="http://oqjgod7s1.bkt.clouddn.com/weixinsf.png" /></div>
    <div> <img src="http://oqjgod7s1.bkt.clouddn.com/qqsf.png" /></div>
    <div> <img src="http://oqjgod7s1.bkt.clouddn.com/weibosf.png" /></div>
    <div><img src="http://oqjgod7s1.bkt.clouddn.com/googlesf.png" /></div>
    <div> <img src="http://oqjgod7s1.bkt.clouddn.com/githubsf.png" /></div>
  </div>
</div>
</template>

<script>
export default {
  created(){
    this.getCurrent()
  },
  methods:{
      getCurrent(){
         console.log(this.commonUrl.name)
      }
  }

}
</script>

<style lang='scss'>
.Login {
    .logo {
        img {
            width: 70%;
            margin: {
                top: 30%;
                left: 15%;
            }
        }
    }
    .content {
        margin: {
            top: 3rem;
        }
        .phone {
            margin: {
                top: 1px;
            }
            width: 100%;
            input {
                width: 100%;
                height: 3rem;
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
        width: 96%;
        margin-left: 2%;
        margin-top: 2rem;
        button {
            width: 100%;
            height: 3rem;
            background: #159963;
            color: #fff;
            border: none;
            font-size: 1.3rem;
            font-weight: 300;
            border-radius: 0.3rem;
        }
    }
    .thirdWay {
        width: 70%;
        margin: {
            top: 1rem;
            left: 15%;
        };
        display: flex;
        .loginBtn {
            text-align: center;
            flex: 2;
            position: relative;
            top: 0.3rem;
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
        text-align: center;
        margin-top: 1rem;
        div {
            flex: 7;
            img {
                width: 60%;
            }
        }
    }
}
</style>
