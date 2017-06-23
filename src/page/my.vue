<template>
  <div class="my">
    <div>
      <v-header></v-header>
      <div class="top">
        <div class="avatar"><img src="http://oqjgod7s1.bkt.clouddn.com/vue.png"></div>
        <div class="name">segmentFault</div>
        <div class="iconRight"><img src="http://oqjgod7s1.bkt.clouddn.com/rightA.png"></div>
      </div>
      <div class="latest">
        <div class="latestName">最新动态</div>
        <div class="latestIcon"><img src="http://oqjgod7s1.bkt.clouddn.com/rightA.png"></div>
      </div>
      <div class="msg">
        <div class="msgList">
          <div class="msgName">我的消息</div>
          <div class="msgIcon"><img src="http://oqjgod7s1.bkt.clouddn.com/rightA.png"></div>
        </div>
        <div class="msgList">
          <div class="msgName">我的私信</div>
          <div class="msgIcon"><img src="http://oqjgod7s1.bkt.clouddn.com/rightA.png"></div>
        </div>
      </div>
      <div class="msg">
        <div class="msgList">
          <div class="msgName">我的关注</div>
          <div class="msgIcon"><img src="http://oqjgod7s1.bkt.clouddn.com/rightA.png"></div>
        </div>
        <div class="msgList">
          <div class="msgName">我的收藏</div>
          <div class="msgIcon"><img src="http://oqjgod7s1.bkt.clouddn.com/rightA.png"></div>
        </div>
      </div>

      <div class="latest">
        <div class="latestName">设置</div>
        <div class="latestIcon"><img src="http://oqjgod7s1.bkt.clouddn.com/rightA.png"></div>
      </div>
    </div>
    <v-tab :propTab="propTab"></v-tab>
  </div>

</template>

<script>
  import Header from '../components/header'
  import Tab from '../components/tab'
  export default {
    data(){
      return {
        propTab: 4
      }
    },
    created(){

    },
    methods: {},
    components: {
      vHeader: Header,
      vTab: Tab
    }

  }
</script>

<style lang='scss'>
  .my {
    .top {
      width: 100%;
      height: 5rem;
      margin: {
        top: 3rem;
      }
    ;
      border: {
        bottom: 1px solid #dedede;
      }
    ;
      background: #fff;
      display: flex;
      justify-content: space-between;
      .avatar {
        padding: {
          top: 1rem;
          left: .5rem;
        }
      ;
        img {
          width: 3rem;
        }
      }
      .name {
        font: {
          size: 1.3rem;
        }
      ;
        position: relative;
        left: 1rem;
        flex: 5;
        color: #000;
        line-height: 5rem;
      }
      .iconRight {
        line-height: 6rem;
        img {
          width: 1.5rem;
        }
      }
    }
    .latest {
      margin-top: .5rem;
      border: {
        top: 1px solid #dedede;
        bottom: 1px solid #dedede;
      }
    ;
      height: 3rem;
      width: 100%;
      background: #fff;
      display: flex;
      justify-content: space-between;
      div {
        line-height: 3rem;
      }
      .latestName {
        position: relative;
        left: 1rem;
      }
      .latestIcon {
        img {
          position: relative;
          top: .4rem;
          width: 1.5rem;
        }
      }
    }
    .msg {
      margin-top: .5rem;
      .msgList {
        border: {
          bottom: 1px solid #dedede;
        }
      ;
        height: 3rem;
        width: 100%;
        background: #fff;
        display: flex;
        justify-content: space-between;
        div {
          line-height: 3rem;
        }
        .msgName {
          position: relative;
          left: 1rem;
        }
        .msgIcon {
          img {
            position: relative;
            top: .4rem;
            width: 1.5rem;
          }
        }
      }
    }
  }

</style>
