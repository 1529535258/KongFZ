<template>
  <div class="all-right">
    <el-header style="height:33px" class="my-el-header">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">个人中心</el-breadcrumb-item>
        <el-breadcrumb-item>我的订单</el-breadcrumb-item>
      </el-breadcrumb>
    </el-header>
    <div class="line"></div>
    <el-main class="right" style="padding-top:10px ;">
      <div class="right-content">
        <div class="right-header">
          <input type="checkbox" @change="choose" ref="chooseAll"/>
          <span>全选</span>&nbsp;&nbsp;
          <a class="a1">批量付款</a>&nbsp;&nbsp;
          <a class="a2">批量确认收货</a>&nbsp;&nbsp;
        </div>
        <ul>
          <li>
            <div class="upper">
              <p>
                <input type="checkbox" ref="fuxuan"/>订单号：132156&nbsp;&nbsp;&nbsp;&nbsp;购买时间：2019-9-8&nbsp;&nbsp;&nbsp;&nbsp;
              </p>
            </div>

            <div class="lower">
              <div class="lower-one">
                <div class="lower-one-left">
                  <a href>
                    <img src="../assets/shu1.jpg" alt="书的封面" />
                  </a>
                  <a href>坏血：“女版乔布斯”如何利用欲望和贪婪打造出硅谷商业神话</a>
                </div>
                <div class="lower-one-middle">3件</div>
                <div class="lower-one-right">
                  <p>34.86</p>
                  <p>元/件</p>
                </div>
              </div>
              <div class="lower-two">
                <p class="p1">订单总额(元)</p>
                <p class="p2">116.58</p>
                <p class="p3">(快递：12.00)</p>
              </div>
              <div class="lower-three">
                <p>等待买家付款</p>
                <a href>订单详情</a>
              </div>
              <div class="lower-four">
                <a class="a1" href>付款</a>
                <a class="a2" href>取消订单</a>
              </div>
            </div>
          </li>
          <li>
            <div class="upper">
              <p>
                <input type="checkbox" ref="fuxuan1"/>订单号：132156&nbsp;&nbsp;&nbsp;&nbsp;购买时间：2019-9-8&nbsp;&nbsp;&nbsp;&nbsp;
              </p>
            </div>

            <div class="lower">
              <div class="lower-one">
                <div class="lower-one-left">
                  <a href>
                    <img src="../assets/shu1.jpg" alt="书的封面" />
                  </a>
                  <a href>坏血：“女版乔布斯”如何利用欲望和贪婪打造出硅谷商业神话</a>
                </div>
                <div class="lower-one-middle">3件</div>
                <div class="lower-one-right">
                  <p>34.86</p>
                  <p>元/件</p>
                </div>
              </div>
              <div class="lower-two">
                <p class="p1">订单总额(元)</p>
                <p class="p2">116.58</p>
                <p class="p3">(快递：12.00)</p>
              </div>
              <div class="lower-three">
                <p>等待买家付款</p>
                <a href>订单详情</a>
              </div>
              <div class="lower-four">
                <a class="a1" href>付款</a>
                <a class="a2" href>取消订单</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </el-main>
  </div>
</template>
<script>
export default {
  data: function() {
    return {}
  },
  methods:{
    choose:function(){
      if(this.$refs.chooseAll.checked==true){
        this.$refs.fuxuan.checked=true;
        this.$refs.fuxuan1.checked=true;
      }else{
        this.$refs.fuxuan.checked=false;
        this.$refs.fuxuan1.checked=false;       
      }
    }
  }
};
</script>
<style scoped>
.all-right {
  width: 100%;
}
.line {
  margin: 10px 20px 0px 20px;
  border-top: 1px solid rgb(220, 220, 220);
}
.right > .right-content > .right-header {
  background: #fafafa;
  border: 1px solid #dcdcdc;
  height: 35px;
  line-height: 35px;
  font-size: 12px;
  display: flex;
  align-items: center;
}

.right > .right-content > .right-header > a {
  display: inline-block;
  background: url(../assets/btn_bg.gif) no-repeat -70px -372px;
  width: 70px;
  height: 25px;
  line-height: 24px;
  text-align: center;
  color: #333;
  font-size: 12px;
  cursor: pointer;
}
.right > .right-content > .right-header > .a2 {
  background: url(../assets/btn_bg.gif) -90px -251px no-repeat;
  width: 90px;
}
.right > .right-content > .right-header > a:hover {
  color: #8c222c;
  background-position: 0 -372px;
}
.right > .right-content > .right-header > .a2:hover {
  color: #8c222c;
  background-position: 0 -251px;
}
.right-content > ul {
  padding: 0px;
}
.right-content > ul > li {
  height: 138px;
  margin-bottom: 15px;
}
.right-content > ul > li > .upper {
  height: 33px;
  font-size: 12px;
  font-weight: 400;
  background: #deebf7;
  padding-left: 5px;
  border: 1px solid #a4c8e8;
  border-top: 2px solid #a4c8e8;
  border-bottom: 0px solid #a4c8e8;
}
.right-content > ul > li > .upper > p {
  height: 33px;
  margin: 0;
  line-height: 33px;
}
.right-content > ul > li > .upper > p > input {
  vertical-align: middle;
}
.right-content > ul > li > .lower {
  height: 105px;
  border: 1px solid #a4c8e8;
  display: flex;
  flex-wrap: nowrap;
}
.lower-one {
  width: 430px;
  display: flex;
  border-right: 1px solid rgb(224, 224, 224);
}
.lower-one > .lower-one-left {
  width: 250px;
  height: 105px;
  display: flex;
  align-items: center;
  padding-left: 30px;
}
.lower-one > .lower-one-left > a {
  display: inline-block;
  color: #049;
  font-size: 14px;
  line-height: 24px;
}
.lower-one > .lower-one-left > a:hover {
  color: rgb(140, 34, 44);
}
.lower-one > .lower-one-left > a > img {
  height: 50px;
  width: 50px;
  margin-right: 10px;
  border: 1px solid #dcdcdc;
}

.lower-one > .lower-one-middle {
  width: 69px;
  font-size: 12px;
  color: #333;
  padding-top: 10px;
  text-align: center;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
    Noto Sans CJK SC, Lantinghei SC, Microsoft YaHei, WenQuanYi Micro Hei, Arial,
    sans-serif;
}
.lower-one > .lower-one-right {
  width: 74px;
  font-size: 12px;
  color: #333;
  padding-top: 10px;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
    Noto Sans CJK SC, Lantinghei SC, Microsoft YaHei, WenQuanYi Micro Hei, Arial,
    sans-serif;
}
.lower-one > .lower-one-right > p {
  margin: 0;
  line-height: 24px;
  text-align: right;
}
.lower-two {
  width: 130px;
  text-align: center;
  border-right: 1px solid rgb(224, 224, 224);
}
.lower-two > .p1 {
  font-size: 12px;
  color: #333;
  margin-top: 8px;
  margin-bottom: 20px;
}
.lower-two > .p2 {
  color: #f00;
  font-size: 16px;
  margin-top: 15px;
  margin-bottom: 5px;
}
.lower-two > .p3 {
  color: #999;
  font-size: 12px;
}
.lower-three {
  width: 102px;
  border-right: 1px solid rgb(224, 224, 224);
  text-align: center;
}
.lower-three > p {
  font-size: 14px;
  font-weight: 700;
  margin: 0px;
  margin-top: 4px;
  line-height: 24px;
  margin-bottom: 17px;
}
.lower-three > a {
  font-size: 14px;
  color: #049;
}
.lower-three > a:hover {
  color: rgb(140, 34, 44);
}

.lower-four {
  width: 102px;
  text-align: center;
}
.lower-four > .a1 {
  display: block;
  width: 50px;
  height: 24px;
  background: url(../assets/list_pic.gif) no-repeat 0 -350px;
  color: #ffffff;
  line-height: 24px;
  text-align: center;
  color: #fff;
  font-size: 14px;
  text-shadow: 1px -1px 1px #d06900;
  margin: 0 auto;
  margin-top: 5px;
  margin-bottom: 15px;
}
.lower-four > .a1:hover {
  background-position: -50px -350px;
}
.lower-four > .a2 {
  font-size: 14px;
  color: #049;
}
.lower-four > .a2:hover {
  color: rgb(140, 34, 44);
}
</style>