<template>
  <div class="main">
    <v-tab></v-tab>
  </div>

</template>

<script type="text/ecmascript-6">
  import Tab from '../components/tab.vue'
  export default{
    created(){

    },
    methods: {},
    computed: {},
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
