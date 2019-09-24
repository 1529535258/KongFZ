<template>
  <div class="register">
    <!-- <img class="saoma" src="../assets/saoman.png" alt="扫码图片" /> -->
    <p>登录</p>
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
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
        下次自动登录
        <a href>忘记密码</a>
      </p>
      <el-form-item>
        <el-button class="Submission" @click="submitForm('ruleForm')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>


<script>
export default {
  name: "mlogin",
  data() {
    var validatePass2 = (rule, value, callback) => {
      let reg = /[\u4e00-\u9fa5_a-zA-Z0-9_]{2,6}/;
      var a=this.ruleForm.checkPass;
      console.log(a.length);
      if (value === "") {
        callback(new Error("请输入用户名"));
      }
       else if (!reg.test(this.ruleForm.checkPass)||this.tips==-1) {
        callback(new Error("用户名不存在"));
      }else if(a.length<2||a.length>6){
        callback(new Error("用户名太长"));
      }else{
        callback();
      }
    };

    var passWd = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
        console.log(this.tips);
      } else {
        let reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;
        if(!reg.test(this.ruleForm.passwd)||this.tips==0){
          callback(new Error("密码错误"));
        }
        callback();
      }
    };

    return {
      username:"",
      flag: false,
      num: 0,
      theight: "0px",
      tips:5,
      ruleForm: {
        checkPass: "",
        passwd: ""
      },
      rules: {
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        passwd: [{ validator: passWd, trigger: "blur" }]
      }
    };
  },
   watch:{
        'ruleForm.passwd':function(){
          this.myaxios();
        },
        'ruleForm.checkPass':function(){
          this.myaxios();
        }
      },
  methods: {
    myaxios:function(){
        this.axios
            .post("/user/login", {
              username: this.ruleForm.checkPass,
              passwd: this.ruleForm.passwd
            })
            .then((response)=>{
              this.tips=response.data.code;
              this.username = response.data.Info[0].username;
            })
            .catch(function(error) {
              console.log(error);
            });
    },
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
        this.myaxios();
         if(this.tips==1){
                 this.$router.push({path:`/index`}); //跳转带知道路由
              }
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
      console.log("我是登录");
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
  position: relative;
}
.register > .saoma {
  width: 62px;
  height: 62px;
  position: absolute;
  top: 40px;
  left: 385px;
}
.my-el-input {
  width: 300px;
}
.el-form-item__error {
  left: 100px !important;
}
.tips {
  margin-left: 100px;
  width: 300px;
  height: 0px;
}
.tips > .bgc {
  height: 40px;
  background-color: #f2f2f1;
}
.hide {
  display: none;
}
.tips > .bgc > .nei {
  width: 250px;
  height: 40px;
  margin: 0 auto;
  font-size: 12px;
  color: #999;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.tips > .bgc > .nei > a {
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
.Submission:hover {
  background: #7b111b;
  color: #fff;
}

.Agreement {
  width: 300px;
  color: #666 !important;
  margin-left: 100px;
  font-size: 12px;
  white-space: nowrap;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
    Noto Sans CJK SC, Lantinghei SC, Microsoft YaHei, WenQuanYi Micro Hei, Arial,
    sans-serif;
}
.Agreement > a {
  color: #999 !important;
  float: right;
}
.Agreement::after {
  content: "";
  display: block;
  clear: both;
}
.Agreement > a:hover {
  color: #333 !important;
}
.el-form-item__error {
  top: 25%;
  left: -77px;
}
</style>
