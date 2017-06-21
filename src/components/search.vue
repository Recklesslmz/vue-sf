<template>
  <div class="search">
    <div class="search-input">
      <input type="text" placeholder="搜索内容、标签和用户"/>
    </div>

  </div>

</template>

<script type="text/ecmascript-6">
  export default{
      data(){
          return{

          }
      },
    methods:{

    },

  }

</script>
<style lang="scss">
  .search{
    position: fixed;
    top:0;
    width: 100%;
    height:3.5rem;
    background: #159963;
    .search-input{
      width: 90%;
      margin: {
        top:.5rem;
        left: 5%;
      };
      input{
        color: #fff;
        width: 100%;
        height:2rem;
        border-radius: .3rem;
        background: rgba(250,250,250,.1);
      }
      input::-webkit-input-placeholder {
        position: relative;
        left: 1rem;
        font-weight: 100;
        color: rgba(250,250,250,.5);
      }
    }
  }

</style>
