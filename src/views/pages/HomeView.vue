<template>
    <div class="home-view has-header">
     <!--导航菜单 sub-nav-->
      <sub-nav mold="quickNav"></sub-nav>
      <!--列表信息 list-->
      <!--更多信息加载 infinite-loading-->
    </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'
  import SubNav from '../../components/SubNav'

    export default {
      name: "HomeView",
      components:{
        SubNav
      }
    }
</script>

<style lang="scss" scoped>
  .has-header{
    margin-top:4.8rem;
  }
  .home-view{

  }
</style>
