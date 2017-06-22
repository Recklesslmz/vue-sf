<template>
  <div class="listName">
    <div class="listDetail" v-for="item in num">
      <div class="title">Vue2全家桶仿SegmentFault</div>
      <div class="authors">Reckless&nbsp;&nbsp;&nbsp;6个小时前</div>
      <div class="icon">
        <img src="http://oqjgod7s1.bkt.clouddn.com/%E8%B5%9E.png"> <span>1</span>
        <img class="comment" src="http://oqjgod7s1.bkt.clouddn.com/%E8%AF%84%E8%AE%BA.png"> <span>1</span>
      </div>
      <div class="articleClass">
        #前端
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        num: 10
      }
    },
    created() {

    },
    mounted() {

    },
    methods: {},
    computed: {}
  }
</script>
<style lang="scss">
  .listName {
    margin: {
      top: 100px;
      bottom: 60px;
    }
    .listDetail {
      border-bottom: 1px solid #eee;
      margin-left: .5rem;
      .title {
        margin-top: .7rem;
        font: {
          size: 1rem;
          weight: 300;
        }
      }
      .authors {
        margin: {
          top: .7rem;
          bottom: .5rem;
        }
        color: #bbb;
        font: {
          size: .9rem;
          weight: 300;
        }
      }
      .icon {
        margin: {
          bottom: .7rem;
        }
        img {
          width: 1.3rem;
        }
        span {
          font: {
            weight: 300;
          }
          position: relative;
          top: -.2rem;
          color: #159963;
        }
        .comment {
          position: relative;
          top: .1rem;
        }
      }
      .articleClass {
        float: right;
        color: #999;
        margin: {
          top: -1.8rem;
          right: .5rem;
        }
      }
    }
  }

</style>
