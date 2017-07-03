<template>
  <div class="listName">
    <div class="listDetail" @click="toArticle" v-for="item in articleList.list">
      <div class="title">{{item.title}}</div>
      <div class="authors">{{item.author}}&nbsp;&nbsp;&nbsp;{{item.time}}</div>
      <div class="icon">
        <img src="http://oqjgod7s1.bkt.clouddn.com/%E8%B5%9E.png"> <span>1</span>
        <img class="comment" src="http://oqjgod7s1.bkt.clouddn.com/%E8%AF%84%E8%AE%BA.png"> <span>1</span>
      </div>
      <div class="articleClass">
        {{item.classify}}
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  export default {
    data() {
      return {
        num: 10,
      }
    },
    created() {
      this.getInfo()
    },
    methods: {
      getInfo(){
        this.$store.dispatch('GET_ARTICLE_LIST');
      },
      toArticle(){
        this.$router.push({path: '/article'})
      }
    },
    computed: {
      ...mapState({
        articleList: state => state.articleList
      })
    }
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
        line-height: 1.2rem;
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
