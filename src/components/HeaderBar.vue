<template>
   <div class="header-bar">
     <h1 class="title">
       <router-link :to="{name:'HomeView'}">豆瓣</router-link>
     </h1>
    <ul>
      <li>
        <router-link :to="{name:'MovieView'}">电影</router-link>
      </li>
      <li>
        <router-link :to="{name:'BookView'}">图书</router-link>
      </li>
      <li>
        <router-link :to="{name:'StatusView'}">广播</router-link>
      </li>
      <li>
        <router-link :to="{name:'GroupView'}">小组</router-link>
      </li>
      <li>
        <router-link :to="{name:'DetailView'}">阅读</router-link>
      </li>
    </ul>
    <el-button icon="el-icon-search" circle size="mini" type="success"
               class="talion" @click="showTalion"></el-button>
   </div>
</template>

<script>
    export default {
      name: "HeaderBar",
      data(){
        return {}
      },
      methods: {
        showTalion: function () {
          // this.$emit('methodName')监听调用事件名
          this.$emit('showTalion')
        }
      }
    }
</script>

<style lang="scss" scoped>
  .header-bar{
    /*position: fixed;*/
    left: 0;
    right: 0;
    top: 0;
    z-index: 2;
    display: flex;
    align-items: center;
    height: 4.8rem;
    padding: 0 1.8rem;
    background: #fff;
    border-bottom: .1rem solid #f3f3f3;
    ul{
      display:flex;
      justify-content: flex-end;
      flex: 1;
      li {
        display: inline-block;
        font-size: 1.6rem;
        margin-right: 1.2rem;
      }
    }
    .talion{
    }
  }
</style>
