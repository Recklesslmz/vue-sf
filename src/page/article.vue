<template>
  <div class="article">
    <input type="text" placeholder="username"/>
    <input type="text" placeholder="password"/>
    <button @click="login">test</button>
  </div>
</template>

<script type="text/ecmascript-6">



  export default{
    methods: {
      login(){
        this.$http.post('/api/login', {
          username: 'Fred',
          password: 'Flintstone'
        })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    },
  }
</script>
<style lang="scss">
  @import "../assets/sass/common";

  .article {
    button {
      width: 5rem;
      height: 2rem;
      background: $commonColor;
      border: none;
    }
  }

</style>
