<template>
  <div class="my-login">
    <div class="typeArea">
      <h2>用户登录</h2>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
        label-position="top"
      >
        <el-form-item label="用户名" prop="username">
          <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" class="my-loginbtn" @click="submitForm('ruleForm')">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
// 导入axios
import { login } from "../api/http";

export default {
  name: "login",
  data() {
    return {
      ruleForm: { username: "admin", password: "" },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 3,
            max: 5,
            message: "长度在 3 到 10 个字符",
            trigger: "change"
          }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, max: 16, message: "长度在 3 到 16 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    //提交
    submitForm(formName) {
      this.$refs["ruleForm"].validate(valid => {
        if (valid) {
          login(this.ruleForm).then(res => {
            // console.log(res);

            if (res.data.meta.status == 200) {
              this.$message.success(res.data.meta.msg);
              //跳转之前保存token
              window.localStorage.setItem('token',res.data.data.token );
              //跳转到主页
              this.$router.push("/index");
            } else {
              this.$message.error(res.data.meta.msg);
            }
          });
        } else {
          return false;
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.my-login {
  height: 100%;
  background-color: rgb(175, 170, 170);
  display: flex;
  justify-content: center;
  align-items: center;
  .typeArea {
    border-radius: 10px;
    padding: 50px;
    padding-bottom: 0px;
    width: 400px;
    height: 420px;
    background: white;
    h2 {
      margin-bottom: 30px;
      text-align: center;
    }
    .my-loginbtn {
      width: 100%;
    }
  }
}
</style>>
 
