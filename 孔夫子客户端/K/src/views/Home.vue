<template>
  <div class="home">
    <div class="nav">
      <div class="bgc">
        <img class="img1" src="../assets/logo2.gif" alt="">
        <img class="img2" src="../assets/kt.png" alt="">
      </div>
      <el-radio-group
        v-model="tabPosition"
        class="el-radio-button is-active my-el-radio-button"
        aria-checked="true"
        style="margin-bottom: 0px;margin-left:300px;margin-top: 5px;"
      >
        <div class="el-radio-top1" @click="changes">首页</div>
        <div class="el-radio-top1"  @click="changed">新书</div>
        <div class="el-radio-top1 dandu"  @click="changez" style="color:white">资讯</div>
        <el-radio-button label="top">资讯</el-radio-button>
      </el-radio-group>

      <el-tabs :tab-position="tabPosition"  class="change" style="height: 39px;background-color: #e6e6e6;">
        <el-tab-pane label="首页" ><news></news></el-tab-pane>
        <el-tab-pane :label="label1"><list :ztitle="label1" :bid="1"></list></el-tab-pane>
        <el-tab-pane :label="label2"><list :ztitle="label2" :bid="2"></list></el-tab-pane>
        <el-tab-pane :label="label3"><list :ztitle="label3" :bid="3"></list></el-tab-pane>
        <el-tab-pane :label="label4"><list :ztitle="label4" :bid="4"></list></el-tab-pane>
        <el-tab-pane :label="label5"><list :ztitle="label5" :bid="5"></list></el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  data() {
    return {
      tabPosition: "top",
      label1:"书界新闻",
      label2:"市场动态",
      label3:"夫子书话",
      label4:"收藏学堂",
      label5:"夫子访谈"
    };
  },
  methods:{
    changes:function(){
      this.$router.push({path:'/index'}); //跳转带知道路由
    },
    changed:function(){
      this.$router.push({path:'/newbook'}); //跳转带知道路由
    },
    changez:function(){
      this.$router.push({path:'/home'}); //跳转带知道路由
    }
  }
};
</script>
<style scoped lang="scss">
* {
  margin: 0px;
  padding: 0px;
}
body {
  margin-left: 0px;
}
.nav {
  width: 966px;
  margin: 0 auto;
  text-align: left;
  position: relative;
}
.bgc>.img1{
width: 175px;
height: 30px;
margin-top: 45px;
margin-right: 25px;
cursor: pointer;
}
.bgc>.img2{
  width: 192px;
  height: 16px;
  cursor: pointer;
}
.el-radio-top1 {
  font-size: 18px;
  font-family: "微软雅黑";
  color: #000;
  text-decoration: none;
  position: relative;
  line-height: 23px;
  text-align:center;
  display: inline-block;
  outline: 0;
  height: 25px;
  width: 90px;
  border-radius: 3px 3px 0 0;
  background-color: #fff;
  border: 1px solid #006699;
  border-bottom: none;
  margin-right: 2px;
  cursor: pointer;
}
.dandu{
  background-color: #e6e6e6;
}
.my-el-radio-button > label {
  background-color: #fff;
  display: none;
}
.img3{
  display: inline-block;
}
</style>