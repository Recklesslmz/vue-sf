<template>
  <div>
    <div v-if="notice.noticeIndex===0">
      <div class="notice" v-for="item in messageList.listF">
        <div class="noticeNav">
          <div class="userName"><span>{{item.name}}</span>{{item.type}}</div>
          <div class="noticeTime">1分钟前</div>
        </div>
        <div class="noticeArticle">
          <div class="articleName">{{item.article}}</div>
        </div>
      </div>
    </div>
    <div v-if="notice.noticeIndex===1">
      <div class="notice" v-for="item in messageList.listS">
        <div class="noticeNav">
          <div class="userName"><span>{{item.name}}</span>点赞了你的答案</div>
          <div class="noticeTime">1分钟前</div>
        </div>
        <div class="noticeArticle">
          <div class="articleName">{{item.article}}</div>
          <div class="articlePoint">+15</div>
        </div>
      </div>
    </div>
    <div v-if="notice.noticeIndex===2">
      <div class="noticeFocus" v-for="item in messageList.listT">
        <div class="avatar">
          <img src="https://sfault-avatar.b0.upaiyun.com/357/506/3575066146-5949b8b0e8f01_huge256">
        </div>
        <div class="name">
          <div class="name-focus"><span class="name-username">{{item.name}}</span><span class="focussu">关注了你</span>
          </div>
          <div class="time">{{item.time}}</div>
        </div>
        <div class="btn">
          <button :class="[{attention:item.type === '1'}]">{{item.type === '1' ? '互相关注' : '关注'}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  export default{
    props: {
      notice: Object
    },
    mounted(){
      this.$store.dispatch('GET_MESSAGE_LIST')
    },
    data(){
      return {
        num: 10
      }
    },
    computed: {
      ...mapState({
        messageList: state => state.messageList
      })
    }
  }
</script>
<style lang="scss">
  .notice {
    border-bottom: 1px solid #ddd;
    margin-top: 1rem;
    .noticeNav {
      display: flex;
      justify-content: space-between;
      .userName {
        position: relative;
        left: .5rem;
        color: #777;
        span {
          color: #159963;
        }
      }
      .noticeTime {
        color: #aaa;
        position: relative;
        right: .5rem;
        font: {
          size: .8rem;
          weight: 300;
        }
      ;
      }
    }
    .noticeArticle {
      display: flex;
      justify-content: space-between;
      margin: {
        top: 1rem;
      }
    ;
      color: #159963;
      padding: {
        bottom: 1rem;
      }
    ;
      .articleName {
        position: relative;
        left: .5rem;
        width: 90%;
        line-height: 1.4rem;
      }
      .articlePoint {
        width: 2rem;
        height: 1rem;
        text-align: center;
        border: 1px solid #159963;
        border-radius: 2rem;
        font: {
          size: .8rem;
        }
      ;
        line-height: 1rem;
        position: relative;
        top: .2rem;
        right: .5rem;
      }
    }
  }

  .noticeFocus {
    height: 5.5rem;
    width: 100%;
    border-bottom: 1px solid #ddd;
    display: flex;
    .avatar {
      flex: 1;
      line-height: 7.5rem;
      position: relative;
      left: .5rem;
      img {
        width: 3rem;
        border-radius: 50%;
      }
    }
    .name {
      flex: 7;
      position: relative;
      line-height: 2.5rem;
      left: 2rem;
      font: {
        size: 1rem;
      }
    ;
      .name-focus {
        .name-username {
          color: #159963;
        }
        .focussu {
          color: #999;
          position: relative;
          left: .3rem;
          font: {
            weight: 300;
          }
        ;
        }
      }
      .time {
        color: #888;
        font: {
          weight: 300;
        }
      ;
      }
    }
    .btn {
      flex: 2;
      text-align: right;
      position: relative;
      right: 1rem;
      line-height: 5rem;
      button {
        width: 6rem;
        height: 2rem;
        background: #fff;
        color: #159963;
        border: {
          radius: .2rem;
        }
      ;
        font: {
          size: 1rem;
        }
      ;
        border: 1px solid #159963;
      }
      .attention {
        background: #e5e5e5;
        color: #a5a5a5;
        border: 1px solid #e5e5e5;
      }
    }
  }

</style>
