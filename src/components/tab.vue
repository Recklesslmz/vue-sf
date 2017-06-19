<template>
  <div class="tab">
    <div class="menu">
      <div class="menuList">
        头条
      </div>
      <div class="menuList">
        专栏
      </div>
      <div class="menuList">
        问答
      </div>
      <div class="menuList">
        发现
      </div>
      <div class="menuList">
        我的
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

</script>
<style lang="scss">
  .tab{
    width:100%;
    position: fixed;
    bottom: 0;
    .menu{
      height:3rem;
      display: flex;
      background: #f5f5f5;
      text-align: center;
      .menuList{
       line-height: 3.8rem;
        font: {
          size: .8rem;
          weight: 300;
        };
        color: #c1c1c1;
       flex: 1;
      }
    }
  }

</style>
