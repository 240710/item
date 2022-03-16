<template>
  <div>
    <el-container class="home-container">
      <!-- 头部区域 -->
      <el-header>
        <span>行政审批系统</span>
        <el-button class="logout" type="info" @click="logout"
          >退出登录</el-button
        >
      </el-header>
      <!-- 页面主体区域 -->
      <el-container>
        <!-- 侧边栏 -->
        <div class="Sidebar">
          <!-- el-menu中的router用来控制导航菜单根据index跳转路由 -->
          <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            router="true"
          >
            <el-menu-item index="/Layout/Home">
              <i class="el-icon-menu"></i>
              <span slot="title">首页</span>
            </el-menu-item>
            <el-menu-item index="/Layout/User">
              <i class="el-icon-user-solid"></i>
              <span slot="title">用户管理</span>
            </el-menu-item>
            <el-menu-item index="/Layout/TaskList">
              <i class="el-icon-document"></i>
              <span slot="title">任务列表</span>
            </el-menu-item>
            <el-menu-item index="/Layout/Schedule">
              <i class="el-icon-setting"></i>
              <span slot="title">任务完成度</span>
            </el-menu-item>
          </el-menu>
        </div>
        <!-- 右侧内容主体 -->
        <el-main><router-view /></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "home-",
  data() {
    return {
      isCollapse: "false",
    };
  },
  methods: {
    //header上的退出方法，
    logout() {
      //使用了$confirm，类似于原生的confirm会弹出一个消息提示框
      this.$confirm("此操作将退出登录, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$message(
            {
              type: "success",
              message: "退出成功!",
            },
            //在这里加入一个$router的replace方法来使页面跳转到登录界面
            this.$router.replace({
              name: "Login",
            })
          );
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消退出",
          });
        });
    },
  },
};
</script>

<style scoped>
.el-aside {
  background: #333744;
}
.el-main {
  background-color: #eaedf1;
}
.home-container {
  height: 100%;
}
.el-header {
  background-color: #373d41;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: #fff;
  font-size: 20px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: 1000px;
}
.logout {
  position: relative;
  left: 1220px;
  top: 10px;
}
.el-header > span {
  position: relative;
  top: 25px;
  left: 30px;
}
</style>