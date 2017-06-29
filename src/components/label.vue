<template>
  <div class="Label">
    <div class="labelTag">活跃标签</div>
    <div class="labelMain">
      <div class="tagName" v-for="item in labelList.list">
        <div class="tagClass">{{item.title}}</div>
        <div class="tagNum">{{item.num}}</div>
      </div>
      <div class="s-clear"></div>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  export default{
    data(){
      return {}
    },
    created(){
      this.getInfo()
    },
    methods: {
      getInfo(){
        this.$store.dispatch('GET_LABEL_LIST')
      }
    },
    computed: {
      ...mapState({
        labelList: state => state.labelList
      })
    }
  }

</script>
<style lang="scss">
  .s-clear {
    clear: both;
  }

  .Label {
    margin: {
      top: 1rem;
      left: .5rem;
      bottom: 2rem;
    }
  ;
    .labelTag {
      color: #aaa;
      font: {
        size: .9rem;
        weight: 300;
      }
    ;
    }
    .labelMain {
      margin: {
        top: .5rem;
      }
    ;
      background: #fff;
      padding:{
        top:.5rem;
        bottom: 1rem;
      };
    }
    .tagName {
      float: left;
      margin: {
        left: 3%;
        top: .5rem;
      }
    ;
      display: flex;
      height: 1.7rem;
      div {
        line-height: 1.7rem;
        text-align: center;
      }
      .tagClass {
        background: #e6f4f1;
        color: #179a65;
        padding: {
          left: 1rem;
          right: 1rem;
        }
      ;
      }
      .tagNum {
        background: #79c7aa;
        color: #fff;
        padding: {
          left: 1rem;
          right: 1rem;
        }
      ;
      }

    }
  }

</style>
