<template>
  <div id="app">
    <transition name="slide-fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss">


  .slide-fade-enter-active {
    transition: opacity .3s ease;
  }

  .slide-fade-leave-active {
    transition: opacity .3s ease;
  }

  .slide-fade-enter, .slide-fade-leave-active {
    opacity: 0;
  }

  .main {
    margin-top: 3rem;
  }
</style>
