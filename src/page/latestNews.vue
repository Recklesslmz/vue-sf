<template>
  <div>
    <v-header :headerProps="headerProps"></v-header>
    <div class="content-state">
      <div class="state-list" v-for="item in feedList">
        <div class="state-wrapper">
          <img class="avatar" src="http://oqjgod7s1.bkt.clouddn.com/sfavatar.jpeg">
          <span class="tag">{{item.tag}}</span><span class="tag-desc">标签的热门提问</span>
          <img class="hot" src="http://oqjgod7s1.bkt.clouddn.com/%E7%81%AB.png">
          <span class="time">{{item.time}}前</span>
        </div>
        <div class="state-title">
          {{item.title}}
        </div>
        <div class="state-focus">
          <span>{{item.focus}}关注</span>
          <span>{{item.answer}}回答</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import vHeader from '../components/header.vue'
  export default{
    data(){
      return {
        headerProps: {
          name: 'Feed',
          isBack: true
        },
        feedList: []
      }
    },
    created(){
      this.feedList = [
        {tag: 'javascript', time: '16分钟', title: '检测一个属性是不是对象的方法？', focus: '7', answer: '8'},
        {tag: 'php', time: '15分钟', title: '请问php如何做到多次请求能够共享某个变量的值？', focus: '17', answer: '21'},
        {tag: 'vue.js', time: '1分钟', title: 'Vue.js的平行组件之间如何互相通信？？', focus: '33', answer: '69'},
        {tag: 'node.js', time: '1小时', title: 'express框架jade模板问题', focus: '23', answer: '39'},
        {tag: 'canvas', time: '1小时', title: 'Canvas画的圆的周长怎么计算', focus: '2', answer: '2'},
      ]
    },
    methods: {},
    components: {
      vHeader: vHeader
    }
  }
</script>
<style lang="scss" scoped>
  @import "../assets/sass/common";

  .state-list {
    margin-top: .3rem;
    background: #fff;
  }

  .state-wrapper {
    width: 96%;
    margin-left: 2%;
    padding-top: .5rem;
  }

  .avatar {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
  }

  .hot {
    position: relative;
    top: -.3rem;
    width: 1rem;
    height: 1rem;
  }

  .tag {
    position: relative;
    top: -.4rem;
    font-size: .8rem;
    color: $commonColor;
  }

  .tag-desc {
    position: relative;
    top: -.4rem;
    margin-left: .3rem;
    font: {
      size: .8rem;
      weight: 300;
    }
    color: $commonGrey;
  }

  .time {
    position: relative;
    top: .4rem;
    font-weight: 300;
    font-size: .8rem;
    right: .3rem;
    float: right;
    color: $commonGrey;
  }

  .state-title {
    width: 96%;
    margin-left: 2%;
    margin-top: .5rem;
  }

  .state-focus {
    width: 96%;
    margin-left: 2%;
    margin-top: .5rem;
    padding-bottom: .5rem;
    span {
      font-weight: 300;
      font-size: .9rem;
      color: $commonGrey;
    }
  }
</style>
