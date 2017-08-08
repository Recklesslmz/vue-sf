<template>
  <div>
    <v-header :header="header"></v-header>
    <div class="content-state">
      <div class="content-list" v-for="item in dataList">
        <div class="content-wrapper">
          <img class="avatar" src="http://oqjgod7s1.bkt.clouddn.com/sfavatar.jpeg">
          <span class="name">{{item.name}}</span>
          <span class="time">{{item.time}}</span>
        </div>
        <div class="content-detail">
          {{item.message}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import vHeader from '../components/messageHeader.vue'
  import moment from 'moment'
  export default{
    data(){
      return {
        header: {
          isShowTab: false
        },
        dateCurrent: '',
        dataList: [
          {name: 'segmentFault团队', time: '2015-08-01', message: '尊敬的segmentFault用户你好'},
          {name: 'Recklesslmz', time: '2016-08-01', message: 'https://segmentfault.com/'},
          {name: 'GitHub', time: '2017-08-01', message: '欢迎来到GitHub'}
        ]
      }
    },
    created(){
      this.getInfo()
    },
    methods: {
      getInfo(){
        this.dataList.forEach(item => {
          item.time = moment(item.time).locale('zh-cn').startOf('day').fromNow()
        })
      }
    },
    components: {
      vHeader: vHeader
    }
  }
</script>
<style lang="scss" scoped>
  @import "../assets/sass/common";

  .content-list {
    margin-top: .1rem;
    background: #fff;
  }

  .content-wrapper {
    padding-top: .5rem;
    width: 96%;
    margin-left: 2%;
  }

  .avatar {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
  }

  .name {
    position: relative;
    top: -.7rem;
    color: $commonColor;
  }

  .time {
    float: right;
    position: relative;
    top: .5rem;
    font: {
      weight: 300;
      size: .8rem;
    }
    color: $commonGrey;
  }

  .content-detail {
    width: 96%;
    margin-left: 2%;
    margin-top: 1rem;
    padding-bottom: .8rem;
    font: {
      weight: 300;
    }
    color: $commonGrey;
  }
</style>
