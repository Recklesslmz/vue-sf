<template>
  <div class="header">
    <div class="back" v-if="headerProps.isBack">
      <img @click="back" src="http://om10u3y7b.bkt.clouddn.com/left.png">
    </div>
    <div class="name">{{headerProps.name}}</div>
  </div>

</template>

<script>
  export default {
    props: {
      headerProps: Object
    },
    created(){

    },
    methods: {
      back(){
        this.$router.go(-1)
      }
    }

  }
</script>

<style lang='scss'>
  @import "../assets/sass/common";

  .header {
    width: 100%;
    height: 3rem;
    background: $commonColor;
    position: fixed;
    top: 0;
    .back {
      float: left;
      img {
        width: 1.5rem;
        position: relative;
        top: .4rem;
      }
    }
    .name {
      text-align: center;
    }
    div {
      line-height: 3rem;
      color: #fff;
    }
  }

</style>
