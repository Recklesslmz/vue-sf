<template>
<div class="Register">
  <div class="logo">
    <img src="https://static.segmentfault.com/v-59410548/global/img/logo-b.svg">
  </div>
  <div class="content">
    <div class="name">
      <input type="text" placeholder="真实姓名或者常用昵称">
    </div>
    <div class="phone">
      <input type="text" placeholder="手机号（仅支持大陆手机号）">
    </div>
    <div class="password">
      <input type="text" placeholder="密码">
    </div>
  </div>

  <div class="regBtn">
    <button>注册</button>
  </div>

  <div class="rules">
    <span class="accept">同意并接受</span>
    <span class="service">《服务条款》</span>
  </div>
</div>
</template>

<script>
export default {


}
</script>

<style lang='scss'>
.Register {
    .logo {
        img {
            width: 80%;
            margin: {
                top: 30%;
                left: 10%;
            }
        }
    }
    .content {
      margin: {
        top: 3rem;
      }
        .phone {
            margin: {
              top:1px;
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
                color: #bbb
            }
        }
        .name{
            @extend .phone;
        }
        .password {
            @extend .phone;
        }
    }
    .regBtn{
      width: 96%;
      margin-left: 2%;
      margin-top: 2rem;
      button{
        width: 100%;
        height: 3rem;
        background: #159963;
        color: #fff;
        border: none;
        font-size: 1.3rem;
        font-weight: 300;
        border-radius: .3rem;
      }
    }
    .rules{
      margin-top: 1.2rem;
      text-align: center;
      .accept{
        color: #969696;
      }
      .service{
        color: #159963;
      }
    }
}
</style>
