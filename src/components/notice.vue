<template>
  <div>
    <div v-if="notice.noticeIndex===0">
      <div class="notice" v-for="item in num">
        <div class="noticeNav">
          <div class="userName"><span>小明</span>评价了你的答案</div>
          <div class="noticeTime">1分钟前</div>
        </div>
        <div class="noticeArticle">
          <div class="articleName">vue全家桶仿segmentFault前端开发</div>
        </div>
      </div>
    </div>
    <div v-if="notice.noticeIndex===1">
      <div class="notice" v-for="item in num">
        <div class="noticeNav">
          <div class="userName"><span>小明</span>评价了你的答案</div>
          <div class="noticeTime">1分钟前</div>
        </div>
        <div class="noticeArticle">
          <div class="articleName">vue全家桶仿segmentFault前端开发</div>
          <div class="articlePoint">+15</div>
        </div>
      </div>
    </div>
    <div v-if="notice.noticeIndex===2">
      <div class="noticeFocus" v-for="item in num">
        <div class="avatar">
          <img src="https://sfault-avatar.b0.upaiyun.com/357/506/3575066146-5949b8b0e8f01_huge256">
        </div>
        <div class="name">
          <div class="name-focus"><span class="name-username">Recklesslmz</span><span class="focussu">关注了你</span></div>
          <div class="time">1天前</div>
        </div>
        <div class="btn">
          <button>关注</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    props: {
      notice: Object
    },
    data(){
      return {
        num: 10
      }
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
    }
  }

</style>
