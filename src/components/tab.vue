<template>
  <div class="tab">
    <div class="menu">
      <div :class="[menuList,{menuListChecked:chooseIndex == index}]" @click="chooseTab(index)"
           v-for="(item,index) in menuLists.list">
        <div class="icon" v-if="chooseIndex == index"><img :src="item.icon1"></div>
        <div class="icon" v-if="chooseIndex != index"><img :src="item.icon"></div>
        <div class="name">{{item.name}}</div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Tab from '../components/tab.vue'
  import {mapState} from 'vuex'
  export default{
    props: {
      propTab: Number
    },
    data(){
      return {
        chooseIndex: '',
        menuList: 'menuList',
      }
    },
    created(){
      this.chooseTab(this.propTab)
      this.getInfo()
    },
    methods: {
      getInfo(){
        this.$store.dispatch('MENU_TAB_LIST')
      },
      chooseTab(index){
        this.chooseIndex = index
        switch (index) {
          case 0:
            this.$router.push({path: '/'})
            break
          case 1:
            break
          case 2:
            break
          case 3:
            break
          case 4:
            this.$router.push({path: '/my'})
            break
          default:
            this.$router.push({path: '/'})
        }
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
    border-top: 1px solid #dedede;
    .menu {
      height: 3.5rem;
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
        .icon {
          margin-top: -.2rem;
          img {
            width: 30%;
          }
        }
        .name {
          margin-top: -2.7rem;
        }
      }
      .menuListChecked {
        color: #159963;
      }
    }
  }

</style>
