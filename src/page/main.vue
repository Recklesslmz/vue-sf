<template>
  <div class="main">
    <v-search></v-search>
    <v-nav></v-nav>
    <v-list></v-list>
    <v-tab :propTab="propTab"></v-tab>
  </div>

</template>

<script type="text/ecmascript-6">
  import Tab from '../components/tab.vue'
  import Search from '../components/search.vue'
  import Nav from '../components/nav.vue'
  import List from '../components/list.vue'
  export default{
    data(){
      return {
        propTab: 0
      }
    },
    created(){

    },
    methods: {},
    computed: {},
    components: {
      vTab: Tab,
      vSearch: Search,
      vNav: Nav,
      vList: List
    }
  }
</script>
<style lang="scss">
  .main {
    .list {
      display: flex;
      justify-content: space-between;
      div {
        flex: 1;

      }
    }
  }

</style>
