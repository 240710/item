<template>
  <div>
    <img
      src="https://www.stourweb.com/ueditor/php/upload/image/20171114/1510643317606947.png"
      alt=""
    />
    <div class="login_container">
      <!--登录表单区域-->
      <div class="header">
        <h2>行政审批系统</h2>
      </div>
      <!-- 头像图标 -->
      <div class="image">
        <el-avatar icon="el-icon-user-solid" :size="55"></el-avatar>
      </div>
      <!--账号-->
      <el-input
        prefix-icon="el-icon-user-solid"
        v-model="account_number"
        placeholder="请输入账号"
      ></el-input>
      <!--密码-->
      <el-input
        prefix-icon="el-icon-lock"
        v-model="password"
        placeholder="请输入密码"
      ></el-input>
      <div class="laginButton">
        <el-button type="primary" :loading="isloading" @click="input">
          登录
        </el-button>
      </div>
    </div>
  </div>
</template>>

<script>
export default {
  name: "login-",
  data() {
    return {
      //接收账号和密码
      account_number: "",
      password: "",
      isloading: false,
      mes: "登录",
    };
  },
  methods: {
    //利用input方法来使登录按钮显示一个加载状态，并使用$router的push来跳转到系统界面
    input() {
      this.isloading = "true";
      //使用定时器来延迟界面的跳转
      setTimeout(() => {
        this.$router.push({
          name: "Home",
        });
      }, 1500);
    },
  },
};
</script>

<style scoped>
.login_container {
  width: 20%;
  height: 30%;
  position: absolute;
  left: 36%;
  top: 30%;
  padding: 40px;
  border: 2px;
  border-radius: 25px;
  background-color: rgba(240, 255, 255, 0.5);
}
.image {
  position: relative;
  left: 40%;
}
.laginButton {
  position: relative;
  top: 15px;
  left: 37%;
}
.header > h2 {
  position: relative;
  left: 25%;
  margin-bottom: 15px;
}
img {
  height: 760px;
  width: 1462px;
}
</style>>