<template>
  <div>
    <v-header :header="header"></v-header>
    <div class="content-state">
      <div class="content-list" v-for="item in 5">
        <div class="content-wrapper">
          <img class="avatar" src="http://oqjgod7s1.bkt.clouddn.com/sfavatar.jpeg">
          <span class="name">segmentFault团队</span>
          <span class="time">30天前</span>
        </div>
        <div class="content-detail">
          https://segmentfault.com/
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import vHeader from '../components/messageHeader.vue'
  export default{
    data(){
      return {
        header: {
          isShowTab: false
        }
      }
    },
    methods: {},
    components: {
      vHeader: vHeader
    }
  }
</script>
<style lang="scss" scoped>
  @import "../assets/sass/common";

  .content-list {
    margin-top: .1rem;
    background: #fff;
  }

  .content-wrapper {
    padding-top: .5rem;
    width: 96%;
    margin-left: 2%;
  }

  .avatar {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
  }

  .name {
    position: relative;
    top: -.7rem;
    color: $commonColor;
  }

  .time {
    float: right;
    position: relative;
    top: .5rem;
    font: {
      weight: 300;
      size: .8rem;
    }
    color: $commonGrey;
  }

  .content-detail {
    width: 96%;
    margin-left: 2%;
    padding-bottom: .6rem;
    font: {
      weight: 300;
    }
    color: $commonGrey;
  }
</style>
