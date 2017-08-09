<template>
  <div>
    <v-header :headerProps="headerProps"></v-header>
    <div class="content-state">
      <div>关注的人</div>
      <div>标签</div>
      <div>问题</div>
      <div>专栏</div>
      <div>收藏夹</div>
    </div>
  </div>
</template>

<script>
  import Header from '../components/header.vue'
  export default{
    data(){
      return {
        headerProps: {
          name: '我的关注',
          isBack: true
        },
      }
    },
    methods: {},
    components: {
      vHeader: Header
    }
  }
</script>
<style lang="scss" scoped>
  @import "../assets/sass/common";

  .content-state {
    div {
      width: 100%;
      height: 2.5rem;
      line-height: 2.5rem;
      padding-left: 5px;
      margin-top: 1px;
      background: #fff;
    }
  }

</style>
