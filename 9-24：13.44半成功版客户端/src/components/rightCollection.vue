<template>
  <div class="all-right">
    <el-header style="height:33px" class="my-el-header">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">个人中心</el-breadcrumb-item>
        <el-breadcrumb-item>我的收藏夹</el-breadcrumb-item>
      </el-breadcrumb>
    </el-header>
    <div class="line"></div>
    <el-main class="right" style="padding-top:10px ;">
      <div class="right-content">
        <div class="upper">
          <ul>
            <li>商品名称</li>
            <li>售价(元)</li>
            <li>
              店铺名称
              <a href>排序</a>
            </li>
            <li>
              收藏时间
              <a href>排序</a>
            </li>
            <li>备注</li>
            <li>操作</li>
          </ul>
        </div>
        <ul class="right-content-book">
          <li>
            <div class="a one">
              <input type="checkbox" ref="fuxuan"/>
              <a href>清代通史 （五册全）</a>
            </div>
            <div class="a two">960.00</div>
            <div class="a three">
              <a href>安徽芜湖万卷书屋</a>
            </div>
            <div class="a four">2019-09-17 15:09:36</div>
            <div class="a five">备注</div>
            <div class="a six">
              <p>
                <a href>加入购物车</a>
              </p>
              <p>
                <a href>备注</a>&nbsp;
                <a href>删除</a>
              </p>
            </div>
          </li>
        </ul>
        <div class="right-header">
          <input type="checkbox" @change="choose" ref="chooseAll"/>
          <span>全选</span>&nbsp;&nbsp;
          <a class="a1">删除所选</a>&nbsp;&nbsp;
          <a class="a2">批量加入购物车</a>&nbsp;&nbsp;
        </div>
      </div>
      <div class="block" style="width:600px;">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
        ></el-pagination>
      </div>
    </el-main>
  </div>
</template>
<script>
export default {
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
     choose:function(){
      if(this.$refs.chooseAll.checked==true){
        this.$refs.fuxuan.checked=true;
        this.$refs.fuxuan1.checked=true;
      }else{
        this.$refs.fuxuan.checked=false;
        this.$refs.fuxuan1.checked=false;       
      }
      }
  },
  data() {
    return {
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4
    };
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
  padding-left: 10px;
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

.right-content > .upper {
  height: 33px;
  font-size: 12px;
  font-weight: 400;
  background: #deebf7;
  padding-left: 5px;
  border: 1px solid #d7d7d7;
  border-bottom: 0px solid #a4c8e8;
}

.right-content > .upper > ul {
  display: flex;
  margin: 0;
  height: 100%;
  padding: 0;
}
.right-content > .upper > ul > li {
  text-align: center;
  line-height: 33px;
  width: 100px;
  border-right: 1px solid #d7d7d7;
}
.right-content > .upper > ul > li > a {
  color: #004499;
}
.right-content > .upper > ul > li > a:hover {
  color: #8c222c;
}
.right-content > .upper > ul > li:first-child {
  width: 350px;
  height: 100%;
}
.right-content > .upper > ul > li:nth-child(2) {
  width: 80px;
  height: 100%;
}
.right-content-book {
  padding: 0;
  margin: 0;
}
.right-content-book > li {
  display: flex;
  height: 66px;
}
.right-content-book > li > .a {
  text-align: center;
  width: 100px;
  border: 1px solid #dcdcdc;
  line-height: 66px;
}
.right-content-book > li a {
  color: #004499;
}
.right-content-book > li a:hover {
  color: #8c222c;
}
.right-content-book > li > .one {
  width: 350px;
  font-size: 14px;
  padding-left: 10px;
  text-align: left;
}
.right-content-book > li > .two {
  width: 80px;
  font-size: 12px;
  line-height: 66px;
  font-family: tahoma, arial, sans-serif, "宋体";
  color: #f00;
}
.right-content-book > li > .three {
  padding-top: 20px;
  font-size: 12px;
  line-height: 16px;
  font-family: tahoma, arial, sans-serif, "宋体";
}
.right-content-book > li > .four {
  padding-top: 20px;
  font-size: 12px;
  line-height: 16px;
  font-family: tahoma, arial, sans-serif, "宋体";
  color: #333;
}
.right-content-book > li > .five {
  text-align: left;
  width: 80px;
  line-height: 16px;
  font-size: 12px;
  font-family: tahoma, arial, sans-serif, "宋体";
}
.right-content-book > li > .six {
  padding-top: 10px;
}
.right-content-book > li > .six a {
  font-size: 14px;
  font-family: "宋体";
  font-weight: 400;
  margin: 0;
}
.right-content-book > li > .six > p {
  margin: 0;
  line-height: 18px;
}
.block {
  margin-top: 20px;
  float: right;
}
.block::after {
  content: "";
  display: block;
  clear: both;
}
</style>