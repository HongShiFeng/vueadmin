<template>
  <el-container class="index">
    <el-header class="my-header" style="height:77px">
      <img src="../assets/img/logo.png" alt />
      <h1>周木木后宫管理</h1>
      <a href="#" @click.prevent="tologin">退出</a>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <div>
          <el-menu class="el-menu-vertical-demo" unique-opened router>
            <el-submenu v-for="(item,index) in menusList" :key="index" :index="index">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{item.authName}}</span>
              </template>
              <el-menu-item :index="'/index/' + sunItem.path" v-for="(sunItem,index) in item.children" :key="index">
                <i class="el-icon-menu"></i>
                {{sunItem.authName}}
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </div>
      </el-aside>
      <el-main class="my-main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { menus } from "../api/http";

export default {
  name: "index",
  data() {
    return {
      menusList: []
    };
  },

  methods: {
    //退出
    tologin() {
      this.$confirm("此操作将退出本系统, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "退出成功!"
          });
          //删除token
          window.localStorage.removeItem("token"),
            //跳转到登录界面
            this.$router.push("/login");
        })

        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消退出"
          });
        });
    }
  },
  created() {
    //左侧菜单获取
    menus().then(res => {
      this.menusList = res.data.data;
    });
  }
};
</script>

<style lang="less" scoped>
.index {
  height: 100%;
  .my-header {
  
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #b1becf;
    img{
      padding: 2px 0 ;
    }
    h1 {
      color: greenyellow;
    }
    a {
      font-size: 20px;
    }
  }
  .my-main {
    padding:0 20px;
    background-color: #e8edf3;
  }
}
</style>