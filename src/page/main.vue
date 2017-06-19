<template>
  <div class="main">
    <!--<div class="list">-->
    <!--<div>1</div>-->
    <!--<div>2</div>-->
    <!--<div>3</div>-->
    <!--<div>4</div>-->
    <!--<div>5</div>-->
    <!--<div>5</div>-->
    <!--<div>5</div>-->
    <!--<div>5</div>-->
    <!--</div>-->
    <v-tab></v-tab>
  </div>

</template>

<script type="text/ecmascript-6">
  import Tab from '../components/tab.vue'
  export default{
    created(){

    },
    methods: {},
    components: {
      vTab: Tab
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
