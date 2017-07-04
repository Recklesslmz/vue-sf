<template>
  <div class="messageHeader">
    <div class="back">
      <img @click="back" src="http://om10u3y7b.bkt.clouddn.com/left.png">
    </div>
    <div class="mid-menu">
      <div :class="['list',{listChecked:chooseIndex === index}]" v-for="(item,index) in midMenuList"
           @click="chooseMenu(index)">{{item.name}}
      </div>
    </div>
    <div class="ignore">
      忽略
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  export default{
    data(){
      return {
        midMenuList: [
          {name: '通知'},
          {name: '点赞'},
          {name: '关注'}
        ],
        chooseIndex: '',
      }
    },
    created(){
      this.chooseMenu(0)
    },
    methods: {
      chooseMenu(index){
        this.chooseIndex = index
        this.$emit("currentIndex", index)
      },
      back(){
        this.$router.go(-1)
      }
    }
  }

</script>
<style lang="scss">
  .messageHeader {
    width: 100%;
    height: 3rem;
    background: #159963;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    z-index: 99;
    .back {
      img {
        width: 1.7rem;
      }
      line-height: 4rem;
    }
    .mid-menu {
      display: flex;
      border: 1px solid #fff;
      height: 2rem;
      margin-top: .5rem;
      border-radius: .2rem;
      div {
        line-height: 2rem;
        padding-left: 1rem;
        padding-right: 1rem;
      }
      .list {
        color: #fff;
        font: {
          size: .9rem;
        }
      ;
      }
      .listChecked {
        color: #159963;
        background: #fff;
      }

    }
    .ignore {
      color: #fff;
      line-height: 3rem;
      position: relative;
      right: .5rem;
      font: {
        size: 1.2rem;
        weight: 300;
      }
    ;
    }
  }


</style>
