<template>
    <div class="first">
      <el-container>
        <!-- tem这个为导航公共组件插入位置 -->
        <!-- <div class="tem"></div> -->
        <!-- 导航 （首页  新书 资讯 ）-->
        <el-header>
          <el-menu
            :default-active="this.$route.path"
            router
            mode="horizontal"
            @select="handleSelect"
          >
            <el-menu-item index="/Index">首页</el-menu-item>
            <el-menu-item index="/newbook">新书</el-menu-item>
            <el-menu-item index="/Home">资讯</el-menu-item>
          </el-menu>
        </el-header>
        <!-- <router-view /> -->
      </el-container>
    </div>
</template>
<script>
export default {
  name: "Nav",
  data() {
    return {
      navList: [
        { name: "/Index", navItem: "首页" },
        { name: "/newbook", navItem: "新书" },
        { name: "/news", navItem: "资讯" }
      ],
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {}
  }
};
</script>
<style>
.el-header {
  padding: 0;
  margin-bottom: 10px;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  height: 60px;
}
.el-menu.el-menu--horizontal {
  border-bottom: 0;
}
.tem {
  height: 120px;
}
body > .el-container {
  margin-bottom: 40px;
}
</style>