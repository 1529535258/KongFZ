<template>
  <div class="register">
    <p>注册</p>
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label prop="pass">
        <el-input
          type="text"
          class="my-el-input"
          placeholder="手机号"
          v-model="ruleForm.pass"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label prop="checkPass">
        <el-input
          type="text"
          @focus="display"
          class="my-el-input"
          placeholder="用户名"
          v-model="ruleForm.checkPass"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <div :class="flag?'tips':'hide'" :style="{height:theight}">
          <div class="bgc">
          <div class="nei">
            <span>注册后用户名不可修改</span>
            <a href>帮我生成用户名</a>
          </div>
          </div>
        </div>


  <el-form-item label prop="passwd">
        <el-input
          type="text"
          class="my-el-input"
          placeholder="密码"
          v-model="ruleForm.passwd"
          autocomplete="off"
        ></el-input>
      </el-form-item>

      <p class="Agreement">
        <input type="checkbox" />
        <span>我已阅读并接受孔网</span>《
        <a href>服务协议</a>》和《
        <a href>账户协议</a>》
      </p>
      <el-form-item>
        <el-button  class="Submission" @click="submitForm('ruleForm')">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>


<script>
export default {
  name: 'register',
  data() {
    var validatePass2 = (rule, value, callback) => {
      let reg=/[\u4e00-\u9fa5_a-zA-Z0-9_]{2,6}/      
      // /^$|^\w{2,6}$/
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else if(!reg.test(this.ruleForm.checkPass)){
         callback(new Error("请输入2到6个字母/中文/下划线的用户名"));
      } else {
        callback();
      }
    };

    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入手机号"));
      } else {
        let reg=/^1[3456789]\d{9}$/;
        if(!reg.test(this.ruleForm.pass)){
          callback(new Error("请输入正确的手机号"));
        }
        callback();
      }
    };

      var passWd = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        let reg=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;
        if(!reg.test(this.ruleForm.passwd)){
          callback(new Error("请设置必须包含数字、字母且长度为8到16位的密码"));
        }
        callback();
      }
    };

    return {
      flag: false,
      num: 0,
      theight: "0px",
      ruleForm: {
        pass: "",
        checkPass: "",
        passwd: ""
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        passwd: [{ validator: passWd, trigger: "blur" }]
      }
    };
  },
  methods: {
    display: function() {
      this.flag = true;
      var timer = setInterval(() => {
        this.num += 1;
        this.theight = this.num + "px";
        if (this.num >= 40) {
          clearTimeout(timer);
        }
      }, 10);
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.axios
            .get("/user/reg", {
              params:{
              username: this.ruleForm.checkPass,
              passwd: this.ruleForm.passwd,
              tel:this.ruleForm.pass
            }})
            .then((response)=>{
              this.tips=response.data.Msg;
              console.log(response);
              this.$message('注册成功！');
              this.$router.push({path:'/loginRegister'}); //跳转带知道路由
              // window.location.href="https://www.baidu.com";  //直接跳转到百度
            })
            .catch(function(error) {
              console.log(error);
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  created(){
      this.$emit("mychange",1);
      console.log("我是注册");
    }
};
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.register > p {
  font-size: 30px;
  font-weight: 500;
  margin-left: 100px;
  margin-bottom: 40px;
  color: #666;
}
.my-el-input {
  width: 300px;
}
.tips {
  margin-left: 100px;
  width: 300px;
  height: 0px;
}
.tips>.bgc{
  height: 40px;
  background-color: #f2f2f1;
}
.hide {
  display: none;
}
.tips >.bgc> .nei {
  width: 250px;
  height: 40px;
  margin: 0 auto;
  font-size: 12px;
  color: #999;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.tips >.bgc> .nei > a {
  color: #365899 !important;
}
.Submission {
  width: 300px;
  height: 40px;
  border-radius: 3px;
  margin-top: 35px;
  background-color: #8c222c;
  color: #fff;
  font-size: 16px;
  text-align: center;
  border-radius: 3px;
  letter-spacing: 10px;
  cursor: pointer;
}
.Submission:hover{
   background: #7b111b;
   color: #fff;
}
.Agreement {
  color: #666 !important;
  margin-left: 100px;
  font-size: 12px;
  white-space: nowrap;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
    Noto Sans CJK SC, Lantinghei SC, Microsoft YaHei, WenQuanYi Micro Hei, Arial,
    sans-serif;
}
.el-form-item__error {
  top: 25%;
  left: -77px;
}
</style>
