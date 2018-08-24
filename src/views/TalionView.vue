<template>
    <div class="talion-view">
      <!--顶部：搜索框-->
      <div class="header-bar">
        <el-button type="primary" round  size="mini"
                   class="close-talion" @click="closeTalion">关闭</el-button>
        <el-input placeholder="请输入内容" prefix-icon="el-icon-search"
                  v-model="search" @change="goSearch"></el-input>
      </div>
      <!--中间：分类页面pages-->
      <div class="has-header"></div>
      <!--底部：用户登陆状态及切换设备链接-->
      <div class="sub-nav"></div>
    </div>
</template>

<script>
    export default {
      name: "TalionView",
      data(){
        return {
          search: ''
        }
      },
      methods: {
        closeTalion() {
          this.$emit('closeTalion')
        },
        goSearch() {
          console.log(this.search)
        }
      }
    }
</script>

<style lang="scss" scoped>
  .talion-view{
    .close-talion{
      .el-select{
        width: 80%;
      }
    }
  }

</style>
