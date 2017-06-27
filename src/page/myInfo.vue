<template>
  <div class="myInfo">
    <div class="top"></div>
    <div class="topDetail">
      <div class="avatar">
        <img src="https://sfault-avatar.b0.upaiyun.com/357/506/3575066146-5949b8b0e8f01_huge256">
      </div>
      <div class="memberName">Reckless</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

</script>
<style lang="scss">
  .myInfo {
    .top {
      background: url("https://sfault-avatar.b0.upaiyun.com/357/506/3575066146-5949b8b0e8f01_huge256") no-repeat;
      background-size: cover;
      -webkit-filter: blur(5px);
      height: 15rem;

    }
    .topDetail {
      width: 100%;
      position: absolute;
      top:2rem;
    }
    .avatar {
      text-align: center;
      width: 100%;
      img {
        width: 20%;
        border-radius: 50%;
      }
    }
    .memberName {
      text-align: center;
      color: #fff;
      font: {
        size: 1.2rem;
      }
    ;
    }

  }

</style>
