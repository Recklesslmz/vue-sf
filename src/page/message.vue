<template>
  <div>
    <v-header v-on:currentIndex="currentIndex"></v-header>
    <div class="noticeMain">
      <v-notice :notice="notice"></v-notice>
    </div>
  </div>
</template>

<script>
  import MsgHeader from '../components/messageHeader.vue'
  import Notice from  '../components/notice.vue'
  export default{
    data(){
      return {
        bindIndex: '',
        notice: {
          noticeIndex: ''
        }
      }
    },
    methods: {
      currentIndex(index){
        this.bindIndex = index
        this.notice.noticeIndex = index
      }
    },
    components: {
      vHeader: MsgHeader,
      vNotice: Notice
    }
  }
</script>
<style lang="scss">
  .noticeMain {
    margin-top: 3.5rem;
  }

</style>
