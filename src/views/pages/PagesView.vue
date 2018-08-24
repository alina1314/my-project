<template>
  <!--页面布局layout-->
    <div class="pages-view">
      <!--顶部导航菜单pages-->
      <header-bar @showTalion="open"></header-bar>
      <!--底部详情内容页路由-->
      <router-view></router-view>
      <!--右部折叠按钮-->
      <talion-view v-show="talion" @closeTalion="close"></talion-view>
    </div>
</template>

<script>
  import HeaderBar from '../../components/HeaderBar'
  import TalionView from '../../views/TalionView'

  export default {
    name: "PagesView",
    data(){
      return {
        talion: ''
      }
    },
    components: {
      HeaderBar,
      TalionView
    },
    methods: {
      open: function () {
        this.talion = 'open'
      },
      close: function () {
        this.talion = ''
      }
    }
  }
</script>

<style scoped>

</style>
