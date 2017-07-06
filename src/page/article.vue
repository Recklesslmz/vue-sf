<template>
  <div class="article">
    <div class="an">

    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    mounted(){
    },
    methods: {},
  }
</script>
<style lang="scss">
  .an{
    width: 100px;
    height: 100px;
    background: red;
    position: relative;
    animation: theanimation .4s infinite;

  }

  @keyframes theanimation {
    0% {
      top: 0;
      left: 0;
      background: red;
    }
    100% {
      top: 0;
      left: 100px;
      background: red;
    }
  }

</style>
