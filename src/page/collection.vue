<template>
  <div class="collection">
    <v-header :headerProps="headerProps"></v-header>
    <div class="main">
      <div class="contents" v-for="item in menuList">
        <div class="contentsName">
          {{item.name}}
        </div>
        <div class="contentsNum">
          {{item.num}}个目录
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import Header from '../components/header.vue'
  export default{
    data(){
      return {
        headerProps: {
          name: '我的收藏',
          isBack: true
        },
        menuList: [{
          name: 'git',
          num: 2
        }, {
          name: 'webpack',
          num: 3
        }, {
          name: 'vue',
          num: 55
        }, {
          name: 'react',
          num: 88
        }]
      }
    },
    components: {
      vHeader: Header
    }
  }

</script>
<style lang="scss">
  @import "../assets/sass/common";

  .collection {
    .contents {
      margin: .5rem 0 0 0;
      width: 100%;
      height: 4rem;
      border: {
        top: 1px solid #eee;
        bottom: 1px solid #eee;
      }
      background: #fff;
    }
    .contentsName {
      position: relative;
      left: 1rem;
      line-height: 2.3rem;
    }
    .contentsNum {
      @extend .contentsName;
      line-height: 1.5rem;
      font: {
        size: .9rem;
        weight: 300;
      }
      color: #989898;
    }
  }
</style>
