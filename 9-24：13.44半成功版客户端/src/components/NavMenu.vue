<template>
  <div class="navmenu">
    <div class="header-wrap">
      <div class="slogan-box">
        <span>网罗天下图书</span>
        <span>传承中华文明</span>
      </div>
      <div class="user-info-box">
        <el-dropdown>
          <span class="el-dropdown-link">登录/注册</span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <div class="login-btn">
                <router-link to="/loginRegister">登&nbsp;&nbsp;&nbsp;录</router-link>
                <!-- <router-link :to="{ path: '/loginRegister', query: { userId: 666}}">Login</router-link> -->
                <!-- 登&nbsp;&nbsp;&nbsp;录 -->
              </div>
            </el-dropdown-item>
            <el-dropdown-item>
              <div class="register-btn">
                <router-link to="/aregister">免费注册</router-link>
                <!-- 免费注册 -->
              </div>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown>
          <span class="el-dropdown-link">
            <i class="el-icon-shopping-cart-2" style="fontSize:14px"></i>
            <!-- 购物车的路由 -->
            <router-link to="/shop">购物车</router-link>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>您的购物车是空的，</el-dropdown-item>
            <el-dropdown-item>登录后可以同步购物车中的商品哦</el-dropdown-item>
            <el-dropdown-item>
              <div class="login-btn">登&nbsp;&nbsp;&nbsp;录</div>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown>
          <span class="el-dropdown-link">我的订单</span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <div class="login-btn">进入我的订单</div>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown>
          <span class="el-dropdown-link">个人中心</span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <div class="login-btn">进入个人中心</div>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown>
          <span class="el-dropdown-link">{{admin}}</span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <div class="login-btn">管理员进入</div>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      admin: "管理员"
    };
  }
};
</script>

<style>
body {
  font-family: Helvetica, Arial, Microsoft YaHei, sans-serif;
  font-size: 14px;
  line-height: 22px;
  color: #333;
}
/* 媒体查询设置 */
@media only screen and (min-width: 1200px) {
  .header-wrap {
    width: 1200px;
  }
}
@media only screen and (max-width: 1199px) {
  .header-wrap {
    width: 1000px;
  }
}

.navmenu {
  width: 100%;
  height: 36px;
  background-color: #8c222c;
}

.header-wrap {
  position: relative;
  height: 100%;
  margin: 0 auto;
}

.header-wrap .slogan-box {
  position: absolute;
  top: 0;
  left: 0;
  padding-left: 6px;
  height: 36px;
  line-height: 36px;
  font-size: 12px;
  color: #e2c8ca;
  cursor: default;
}

.header-wrap .slogan-box > span {
  margin-right: 6px;
}

.header-wrap .user-info-box {
  position: absolute;
  top: 0;
  right: 0;
  height: 36px;
}

.user-info-box > div {
  padding: 2px 15px;
  float: left;
  height: 36px;
  line-height: 36px;
  font-size: 12px;
  color: #e2c8ca;
  cursor: pointer;
}

.user-info-box > div:hover span {
  border-bottom: 2px solid #e2c8ca;
}

.login-btn {
  width: 130px;
  height: 30px;
  margin-top: 15px;
  margin-bottom: 15px;
  line-height: 30px;
  text-align: center;
  font-size: 12px;
  border-radius: 3px;
  border: 1px solid #8c222c;
  color: #fff;
  background-color: #8c222c;
  cursor: pointer;
}

.login-btn:hover {
  background-color: #7b111b;
}

.login-btn > a {
  color: #fff;
}

.register-btn {
  width: 130px;
  height: 30px;
  margin-bottom: 16px;
  line-height: 30px;
  text-align: center;
  font-size: 12px;
  border-radius: 3px;
  border: 1px solid #d4c4b8;
  color: #8c222c;
  background-color: #f8f7f3;
  cursor: pointer;
}

.register-btn:hover {
  border: 1px solid #8c222c;
}

.el-dropdown-menu__item:focus,
.el-dropdown-menu__item:not(.is-disabled):hover {
  background-color: #fff;
  color: #66b1ff;
}
</style>