<template>
  <div class="myInfo">
    <img @click="back" class="back" src="http://om10u3y7b.bkt.clouddn.com/left.png">
    <div class="top"></div>
    <div class="topDetail">
      <div class="avatar">
        <img src="http://oqjgod7s1.bkt.clouddn.com/sfavatar.jpeg">
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
      <div :class="['tablist',{menuChoose:currentIndex === index}]" v-for="(item,index) in chooseMenu"
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
            <div class="latestIcon"><img src="http://oqjgod7s1.bkt.clouddn.com/rightA.png"></div>
          </div>
          <div class="msg">
            <div class="msgList" @click='toNext(item.mark)' v-for="item in infoList">
              <div class="msgName">{{item.name}}</div>
              <div class="msgIcon"><span>{{item.num}}</span><img src="http://oqjgod7s1.bkt.clouddn.com/rightA.png">
              </div>
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
        chooseMenu: [
          {name: '个人主页'},
          {name: '个人档案'}
        ],
        infoList: [
          {name: '我的提问', num: 2, mark: 1},
          {name: '我的回答', num: 30, mark: 2},
          {name: '我的文章', num: 6, mark: 3},
          {name: '我的分享', num: 2, mark: 4},
          {name: '我的收藏', num: 4, mark: 5},
          {name: '我的讲座', num: 0, mark: 6},
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
            break;
          case 1:
            this.chooseTab = 'chooseTab1'
            break;
        }
      },
      toNext(index){
        console.log(index)
        switch (index) {
          case 1:
            break;
          case 3:
            break;
          case 4:
            break;
          case 5:
            break;
          case 6:
            this.$router.push({path: '/lecture'})
            break;
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
    .component-fade-enter-active, .component-fade-leave-active {
      transition: opacity .5s ease;
    }
    .component-fade-enter, .component-fade-leave-active {
      opacity: .5;
    }

    .back {
      position: absolute;
      top: .5rem;
      left: .5rem;
      z-index: 999;
      width: 6%;
    }
    .top {
      background: url("https://sfault-avatar.b0.upaiyun.com/357/506/3575066146-5949b8b0e8f01_huge256") no-repeat;
      background-size: cover;
      -webkit-filter: blur(9px);
      height: 16rem;

    }
    .topDetail {
      position: absolute;
      top: 2rem;
      width: 100%;
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
      font: {
        size: 1.2rem;
      }
    }
    .medal {
      display: flex;
      justify-content: center;
      margin-top: .5rem;
      div {
        width: 55px;
        justify-content: center;
        text-align: center;
        img {
          width: 55%;
        }
        span {
          position: relative;
          top: -.6rem;
          font: {
            size: .9rem;
            weight: 300;
          }
          color: #fff;
        }
      }
    }
    .menulist {
      display: flex;
      margin-top: .5rem;
      text-align: center;
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
    .menuChoose {
      color: #159963 !important;
    }
    .tabName {
      display: flex;
      justify-content: center;
      margin-top: .3rem;
      text-align: center;
      width: 100%;
      height: 3rem;
      background: #fff;
      .tablist {
        justify-content: center;
        line-height: 3rem;
        width: 100px;
        transition: all 0.375s;
        color: #a4a5a4;
      }
    }
    .tabbottom {
      width: 100px;
      border-bottom: 1px solid #159963;
      transition: all 0.375s;
      margin-left: 107px;
      &.chooseTab0 {
        transform: translateX(0)
      }
      &.chooseTab1 {
        transform: translateX(100%)
      }
    }
    .main {
      margin-top: .5rem;
      .personalWeb {
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
          span {
            color: #aaa;
          }
        }
        .latestDesc {
          position: relative;
          right: 1rem;
          color: #aaa;
        }
      }
      .msg {
        margin-top: .5rem;
        .msgList {
          display: flex;
          justify-content: space-between;
          border: {
            bottom: 1px solid #dedede;
          }
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
            span {
              color: #aaa;
            }
          }
        }
      }
    }
  }

</style>
