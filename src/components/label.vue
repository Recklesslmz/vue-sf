<template>
  <div class="Label">
    <div class="labelTag">{{label.title}}</div>
    <div class="labelMain">
      <div class="tagName" v-for="item in label.list">
        <div class="tagClass">{{item.title}}</div>
        <div v-show="label.isShowNum" class="tagNum">{{item.num}}</div>
      </div>
      <div class="s-clear"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    props: {
      label: Object,
    },
  }
</script>
<style lang="scss">
  .s-clear {
    clear: both;
  }

  .Label {
    margin: {
      top: 1rem;
      bottom: 2rem;
    }
    .labelTag {
      color: #aaa;
      margin: 0 0 0 .5rem;
      font: {
        size: .9rem;
        weight: 300;
      }
    }
    .labelMain {
      margin: {
        top: .5rem;
      }
      background: #fff;
      padding: {
        top: .5rem;
        bottom: 1rem;
      }
    }
    .tagName {
      float: left;
      margin: {
        left: 3%;
        top: .5rem;
      }
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
      }
      .tagNum {
        background: #79c7aa;
        color: #fff;
        padding: {
          left: 1rem;
          right: 1rem;
        }
      }

    }
  }
</style>
