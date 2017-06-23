<template>
  <div class="nav">
    <div class="navSub" ref="wrapper">
      <div :class="[navList,{chooseNav:chooseIndex == index}]" @click='chooseIndexNav(index)'
           v-for="(item,index) in navLists.list">
        {{item.name}}
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    data() {
      return {
        navList: 'navList',
        chooseIndex: ''
      }
    },
    created() {
      this.getInfo()
    },
    mounted() {

    },
    methods: {
      getInfo() {
        this.$store.dispatch('NAV_TAB_LIST')
      },
      chooseIndexNav(index){
        this.chooseIndex = index
        console.log(index)
      }

    },
    computed: {
      ...mapState({
        navLists: state => state.navList
      })

    }
  }
</script>
<style lang="scss">
  .nav {
    position: fixed;
    width: 100%;
    top: 3.4rem;
    background: #159963;
    .navSub {
      height: 2rem;
      width: 100%;
      display: inline-flex;
      overflow: scroll;
      .navList {
        line-height: 1.5rem;
        font: {
          size: .9rem;
        }
      ;
        color: rgba(250, 250, 250, .8);
        margin-left: 1rem;
      }
    ;
      .chooseNav {
        color: #fff;
      }
    ;
      &::-webkit-scrollbar {
        display: none;
      }
    ;
    }
  }
</style>
