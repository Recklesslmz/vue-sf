<template>
  <div class="tab">
    <div class="menu">
      <div :class="[menuList,{menuListChecked:chooseIndex == index}]"  @click="chooseTab(index)" v-for="(item,index) in menuLists.list">
        <div class="icon"><img :src="item.icon"> </div>
        <div>{{item.name}}</div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Tab from '../components/tab.vue'
  import {mapState} from 'vuex'
  export default{
    data(){
      return {
        chooseIndex: '',
        menuList:'menuList',
      }
    },
    created(){
      this.getInfo()
    },
    methods: {
      getInfo(){
        this.$store.dispatch('MENU_TAB_LIST')
      },
      chooseTab(index){
        this.chooseIndex = index
        console.log(index)
      }
    },
    computed: {
      ...mapState({
        menuLists: state => state.menuList
      })
    },
    components: {
      vTab: Tab
    }
  }
</script>
<style lang="scss">
  .tab {
    width: 100%;
    position: fixed;
    bottom: 0;
    .menu {
      height: 3rem;
      display: flex;
      background: #f5f5f5;
      text-align: center;
      .menuList {
        line-height: 3.8rem;
        font: {
          size: .8rem;
          weight: 400;
        }
      ;
        color: #c1c1c1;
        flex: 1;
        .icon{
          img{
            width: 30%;
          }
        }
      }
      .menuListChecked{
        color:#159963;
      }
    }
  }

</style>
