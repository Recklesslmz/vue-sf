<template>
  <div class="article">

    <div class="animated fadeOut">李木子</div>
  </div>
</template>

<script type="text/ecmascript-6">
  function* helloWorld () {
    yield 'hello'
    yield 'world'
    return 'ending'
  }
  var hw = helloWorld()

  console.log(hw.next())
  console.log(hw.next())
  console.log(hw.next())
  export default{
    mounted(){
    },
    methods: {},
  }
</script>
<style lang="scss">


</style>
