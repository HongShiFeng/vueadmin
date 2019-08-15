<template>
  <el-container class="index">
    <el-header class="my-header" style="height:80px">
      <img src="../assets/img/logo.png" alt="">
      <h1>周木木后宫管理</h1>
      <a>退出</a>
    </el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main class="my-main">Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "index"
};
</script>

<style lang="less" scoped>
.index {
  height: 100%;
  .my-header {
    display: flex ;
    justify-content: space-between;
    align-items: center;
    background-color: #b1becf;
    h1{
      color:greenyellow;
    }
    a{
      font-size: 20px;
    }
  }
  .my-main {
    background-color: #e8edf3;
  }
}
</style>