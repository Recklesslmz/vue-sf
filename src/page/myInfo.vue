<template>
  <div class="myInfo">
    <img @click="back" class="back" src="http://om10u3y7b.bkt.clouddn.com/left.png">
    <div class="top"></div>
    <div class="topDetail">
      <div class="avatar">
        <img src="https://sfault-avatar.b0.upaiyun.com/357/506/3575066146-5949b8b0e8f01_huge256">
      </div>
      <div class="memberName">Reckless</div>
      <div class="medal">
        <div>
          <img src="http://oqjgod7s1.bkt.clouddn.com/gold.png">
          <span>0</span>
        </div>
        <div>
          <img src="http://oqjgod7s1.bkt.clouddn.com/silver.png">
          <span>10</span>
        </div>
        <div>
          <img src="http://oqjgod7s1.bkt.clouddn.com/bronze.png">
          <span>90</span>
        </div>
      </div>
      <div class="menulist">
        <div class="list listright">
          <div>123</div>
          <div>声望</div>
        </div>
        <div class="list listright">
          <div>456</div>
          <div>关注</div>
        </div>
        <div class="list">
          <div>789</div>
          <div>粉丝</div>
        </div>
      </div>
    </div>
    <div class="tabName">
      <div :class="[tablist,{menuChoose:currentIndex === index}]" v-for="(item,index) in chooseMenu"
           @click="choose(index)">{{item.name}}
      </div>
    </div>
    <div class="tabbottom" :class="chooseTab"></div>

    <div class="main" :class="chooseTab">
      <transition name="fade">
        <div class="tab-main" v-if="currentIndex === 0">
          <div class="personalWeb">
            <div class="latestName">个人网站</div>
            <div class="latestDesc">www.recklesslmz.com</div>
          </div>
          <div class="personalWeb">
            <div class="latestName">我的动态</div>
            <div class="latestIcon"><span>6</span><img src="http://oqjgod7s1.bkt.clouddn.com/rightA.png"></div>
          </div>
          <div class="msg">
            <div class="msgList" v-for="item in infoList">
              <div class="msgName">{{item.name}}</div>
              <div class="msgIcon"><img src="http://oqjgod7s1.bkt.clouddn.com/rightA.png"></div>
            </div>
          </div>
          <div>
            <v-table></v-table>
          </div>
        </div>
      </transition>
      <transition name="fade">
        <div class="tab-personal" v-if="currentIndex === 1">
          <div class="msg">
            <div class="msgList" v-for="item in infoList">
              <div class="msgName">{{item.name}}</div>
              <div class="msgIcon"><img src="http://oqjgod7s1.bkt.clouddn.com/rightA.png"></div>
            </div>
          </div>
        </div>
      </transition>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  import Label from '../components/label'
  export default{
    created(){
      this.choose(0)
    },
    data(){
      return {
        chooseTab: '',
        currentIndex: '',
        tablist: 'tablist',
        chooseMenu: [
          {name: '个人主页'},
          {name: '个人档案'}
        ],
        infoList: [
          {name: '我的提问'},
          {name: '我的回答'},
          {name: '我的文章'},
          {name: '我的分享'},
          {name: '我的收藏'},
          {name: '我的讲座'},
        ]
      }
    },
    components: {
      vTable: Label
    },
    methods: {
      choose(index){
        this.currentIndex = index
        switch (index) {
          case 0:
            this.chooseTab = 'chooseTab0'
            break
          case 1:
            this.chooseTab = 'chooseTab1'
            break
        }
      },
      back(){
        this.$router.push({path: '/my'})
      }
    }
  }

</script>
<style lang="scss">
  .myInfo {
    /*.fade-enter-active, .fade-leave-active {*/
    /*transition: opacity .375s*/
    /*}*/
    /*.fade-enter, .fade-leave-to !* .fade-leave-active in <2.1.8 *!*/
    /*{*/
    /*opacity: .5*/
    /*}*/

    .component-fade-enter-active, .component-fade-leave-active {
      transition: opacity .5s ease;
    }
    .component-fade-enter, .component-fade-leave-active {
      opacity: .5;
    }

    .back {
      position: absolute;
      z-index: 999;
      top: .5rem;
      left: .5rem;
      width: 6%;
    }
    .top {
      background: url("https://sfault-avatar.b0.upaiyun.com/357/506/3575066146-5949b8b0e8f01_huge256") no-repeat;
      background-size: cover;
      -webkit-filter: blur(9px);
      height: 16rem;

    }
    .topDetail {
      width: 100%;
      position: absolute;
      top: 2rem;
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
      margin: {
        top: 1rem;
      }
    ;
      font: {
        size: 1.2rem;
      }
    ;
    }
    .medal {
      display: flex;
      justify-content: center;
      margin: {
        top: .5rem;
      }
    ;
      div {
        width: 55px;
        justify-content: center;
        text-align: center;
        img {
          width: 55%;
        }
        span {
          color: #fff;
          position: relative;
          top: -.6rem;
          font: {
            size: .9rem;
            weight: 300;
          }
        ;
        }
      }
    }
  ;

    .menulist {
      display: flex;
      text-align: center;
      margin: {
        top: .5rem;
      }
    ;
      .list {
        flex: 1;
        color: #fff;
        div {
          line-height: 1.3rem;
          font: {
            weight: 300;
            size: .9rem;
          }
        }
      }
      .listright {
        border: {
          right: 1px solid #fff;
        }
      }
    }
  ;
    .menuChoose {
      color: #159963 !important;
    }
    .tabName {
      width: 100%;
      height: 3rem;
      background: #fff;
      justify-content: center;
      margin: {
        top: .3rem;
      }
    ;
      display: flex;
      text-align: center;
      .tablist {
        justify-content: center;
        color: #a4a5a4;
        width: 100px;
        line-height: 3rem;
        transition: all 0.375s;
      }

    }
    .tabbottom {
      width: 100px;
      border-bottom: 1px solid #159963;
      transition: all 0.375s;
      margin-left: 107px;
      &.chooseTab0 {
        transform: translate3d(0, 0, 0)
      }
      &.chooseTab1 {
        transform: translate3d(100%, 0, 0)

      }
    }
    .main {
      /*transition: all 0.375s;*/
      &.chooseTab0 {
        /*transform: translate3d(0, 0, 0)*/
      }
      &.chooseTab1 {

      }
      .personalWeb {
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
          span {
            color: #aaa;
          }
        }
        .latestDesc {
          color: #aaa;
          position: relative;
          right: 1rem;
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

  }

</style>
