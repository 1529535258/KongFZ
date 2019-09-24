<template>
  <div id="mapp">
    <div id="nav">
      <div class="head_content">
        <a href class="Book_net">
          <img src="../assets/fuzi.png" alt />
        </a>
        <a href>给新版提建议</a>
      </div>
    </div>
    <div class="main_body">
      <!-- 左边 -->
      <div class="left">
        <mlog @mychange="changeN"></mlog>
        <!-- <router-view @mychange="changeN"></router-view> -->
      </div>
      <!-- 右边 -->
      <div class="right">
        <div class="info_box">
          <span>还没有孔网帐号？</span>
            <router-link to="/aregister" @click.native='change' :class="flag?'state':'state1'" >快速注册</router-link>
            <router-link to="/loginRegister"  @click.native='change1' :class="flag?'state1':'state'" >快速登录</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // components: {
  //   mlogin
  // },
  data: function() {
    return {
      flag: true,
      mytext:"",
      text: "还没有孔网帐号？"
    };
  },
  methods: {
    changeN:function(val){
      this.flag=true;
    },
    change: function() {
      this.flag=false;
      this.text="已有孔网帐号"
    },
    change1: function() {
      this.flag=true;
      this.text="还没有孔网账号？"
    }
  }
};
</script>>

<style lang="scss">
body {
  margin: 0;
  background-color: rgb(247, 247, 246);
  overflow-x: hidden;
}
a {
  text-decoration: none;
}
#nav {
  width: 100%;
  height: 78px;
  border-bottom: 1px solid #ccc;
}
* {
  margin: 0;
  padding: 0;
}
.head_content {
  width: 980px;
  margin: 0 auto;
}
.head_content > .Book_net {
  display: block;
  float: left;
  height: 35px;
  width: 206px;
  margin-top: 20px;
}
.head_content > .Book_net > img {
  height: 35px;
  width: 206px;
}
.head_content > a {
  float: right;
  font-size: 12px;
  color: #bbb;
  margin-top: 56px;
}
.head_content::after {
  content: "";
  display: block;
  clear: both;
}
.head_content > a:hover {
  color: #8c222c;
}
.main_body {
  width: 1200px;
  margin: 0 auto;
  position: relative;
}
.main_body > .left {
  width: 300px;
  padding-left: 50px;
  padding-top: 73px;
}
// .main_body > .left >p{

// }

.main_body > .right {
  height: 43.57px;
  background: #eee;
  padding: 0px 20px;
  position: absolute;
  top: 50px;
  left: 750px;
  width: 100%;
}
.main_body > .right > .info_box {
  line-height: 43.57px;
}
.main_body > .right > .info_box > span {
  line-height: 30px;
  font-size: 16px;
  color: #999;
  margin-right: 20px;
}
.info_box > a {
  color: #365899;
}
.info_box > a:hover {
  color: #8c222c;
}
.state{
  display:inline-block;
}
.state1{
  display: none;
}
</style>
