<template>
    <div class="home-view has-header">
     <!--导航菜单 sub-nav-->
      <sub-nav mold="quickNav"></sub-nav>
      <!--列表信息 list-->
      <list mold="thumbnail" :items="events"></list>
      <!--更多信息加载 infinite-loading-->
      <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading">
        <loading slot="spinner"></loading>
      </infinite-loading>
    </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'

  import InfiniteLoading from 'vue-infinite-loading'
  import SubNav from '../../components/SubNav'
  import List from '../../components/List'
  import Loading from '../../components/Loading'

    export default {
      name: "HomeView",
      components:{
        SubNav,
        List,
        InfiniteLoading,
        Loading
      },
      computed: {
        // Getting Vuex State from store/modules/activities
        ...mapState({
          events: state => state.activities.events
        })
      },
      methods: {
        // Using vue-infinite-loading
        onInfinite () {
          setTimeout(() => {
            this.loadMore()
            this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded')
          }, 1000)
        },
        // Dispatching Actions
        ...mapActions([
          'loadMore'
        ])
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
