<template>
  <div class="lecture">
    <v-header :headerProps="headerProps"></v-header>
    <div class="main">
      <div class="lectureTab">
        <div v-for="(item,index) in menuList" @click="chooseTab(index)" :class="{tabChecked:chooseIndex === index}">
          {{item.name}}
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import Header from '../components/header.vue'
  export default{
    data(){
      return {
        headerProps: {
          name: '我的讲座',
          isBack: true
        },
        menuList: [
          {name: '发起的'},
          {name: '参与的'},
          {name: '收藏的'},
        ],
        chooseIndex: ''
      }
    },
    created(){
       this.chooseTab(0)
    },
    methods: {
      chooseTab(index){
        this.chooseIndex = index
      }
    },
    components: {
      vHeader: Header
    }
  }

</script>
<style lang="scss">
  .lecture {
    .lectureTab {
      display: flex;
      text-align: center;
      height: 2.5rem;
      box-shadow: 1px 1px 1px #eee;
      div {
        line-height: 2.5rem;
        flex: 1;
        font: {
          size: .8rem;
        }
        width: 1rem;
        color: #777;
      }
      .tabChecked {
        color: #159963;
        border-bottom: .1rem solid #159963;
      }
    }
  }
</style>
