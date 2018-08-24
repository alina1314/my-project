<template>
    <div class="HomePage">
      <div class="banner">
        <el-carousel trigger="click" height="150px">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3>{{item}}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
</template>

<script>
  export default {
    name: "HomePage"
  }
</script>

<style scoped>

</style>
