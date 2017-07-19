<template>
  <div class="my">
    <div>
      <v-header :headerProps="headerProps"></v-header>
      <div class="top" @click='toMyInfo'>
        <div class="avatar"><img src="https://sfault-avatar.b0.upaiyun.com/357/506/3575066146-5949b8b0e8f01_huge256">
        </div>
        <div class="name">Reckless</div>
        <div class="iconRight"><img src="http://oqjgod7s1.bkt.clouddn.com/rightA.png"></div>
      </div>
      <div class="latest">
        <div class="latestName">最新动态</div>
        <div class="latestIcon"><img src="http://oqjgod7s1.bkt.clouddn.com/rightA.png"></div>
      </div>
      <div class="msg">
        <div class="msgList" @click='toNext(2)'>
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
        <div class="msgList" @click='toNext(5)'>
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
        propTab: 4,
        headerProps: {
          name: '我的',
          isBack: false
        }
      }
    },
    methods: {
      toMyInfo(){
        this.$router.push({path: '/myInfo'})
      },
      toNext(index){
        switch (index) {
          case 2:
            this.$router.push({path: '/message'})
            break
          case 5:
            this.$router.push({path: '/collection'})
            break
        }
      }
    },
    components: {
      vHeader: Header,
      vTab: Tab
    }
  }
</script>

<style lang='scss'>
  .my {
    .top {
      display: flex;
      justify-content: space-between;
      margin: 3rem 0 0 0;
      width: 100%;
      height: 5rem;
      border-bottom: 1px solid #dedede;
      background: #fff;
      .avatar {
        padding: 1rem 0 0 .5rem;
        img {
          width: 3rem;
          border-radius: 50%;
        }
      }
      .name {
        position: relative;
        left: 1rem;
        flex: 5;
        line-height: 5rem;
        font-size: 1.3rem;
        color: #000;
      }
      .iconRight {
        line-height: 6rem;
        img {
          width: 1.5rem;
        }
      }
    }
    .latest {
      display: flex;
      justify-content: space-between;
      margin-top: .5rem;
      border: {
        top: 1px solid #dedede;
        bottom: 1px solid #dedede;
      }
      height: 3rem;
      width: 100%;
      background: #fff;
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
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #dedede;
        height: 3rem;
        width: 100%;
        background: #fff;
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
