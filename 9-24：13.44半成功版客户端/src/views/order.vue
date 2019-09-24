<template>
  <div class="my-subject">
    <el-container>
      <el-aside width="168px" style="height:200px" class="left">
        <div class="left-option">
          <span>我是买家</span>
        </div>
        <ul>
          <li>
            <p href @click="changeOrder" :style="{'color':(flag==1?'#d04245':'#333')}">我的订单</p>
          </li>
          <li>
            <p href @click="changeCollection" :style="{'color':(flag==2?'#d04245':'#333')}">我收藏的商品</p>
          </li>
          <li>
            <p href @click="changeAddress" :style="{'color':(flag==3?'#d04245':'#333')}">我的收货地址</p>
          </li>
        </ul>
      </el-aside>
      <el-container>
        <rightOrder :class="flag==1?'display':'displayHide'"></rightOrder>
        <rightCollection :class="flag==2?'display':'displayHide'"></rightCollection>
        <rightAddress :class="flag==3?'display':'displayHide'"></rightAddress>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      flag: 1
    };
  },
  methods: {
    changeOrder: function() {
      this.flag = 1;
    },
    changeCollection: function() {
      this.flag = 2;
    },
    changeAddress: function() {
      this.flag = 3;
    }
  }
};
</script>

<style>
.my-subject {
  width: 980px;
  margin: 0 auto;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
}
.el-header {
  background-color: transparent;
  color: #333;
  text-align: center;
  line-height: 33px;
  display: flex;
  align-items: center;
}
.my-el-header > .el-breadcrumb {
  font-size: 14px;
}

.el-aside {
  border: 1px solid rgb(220, 220, 220);
  color: #333;
  text-align: center;
  line-height: 200px;
  padding: 0;
}

.el-main {
  color: #333;
}

body > .el-container {
  margin-bottom: 40px;
}

.left-option {
  height: 33px;
  text-align: center;
  line-height: 33px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  background: #c63b40 url("../assets/buyer_left_title.png") no-repeat 0 -33px;
}
.left > ul {
  padding: 0;
  margin: 0;
}
.left > ul > li {
  height: 30px;
  line-height: 30px;
  vertical-align: middle;
  margin: 3px 0;
  background: url(../assets/user_ico.jpg) no-repeat 22px -35px;
}
.left > ul > li:nth-child(2) {
  background: url(../assets/user_ico.jpg) no-repeat 22px -76px;
}
.left > ul > li:nth-child(3) {
  background: url(../assets/user_ico.jpg) no-repeat 21px -193px;
}
.left > ul > li > p {
  color: #333;
  padding: 0 10px 0 55px;
  display: block;
  text-align: left;
  width: 100px;
  font-size: 14px;
  cursor: pointer;
}
.left > ul > li > p:hover {
  color: #d04245;
}
.display {
  display: block;
}
.displayHide {
  display: none;
}
</style>