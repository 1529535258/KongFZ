<template>
  <div class="test">
    <Back-Top :bottom="60"></Back-Top>
    <div class="header-tab">
      <div class="tips">所有商品</div>
    </div>
    <div class="search-wrap">
      <!-- 面包屑 -->
      <div class="crumbs-bar">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>{{results}} 条结果</el-breadcrumb-item>
          <el-breadcrumb-item>{{content}}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <!-- 搜索区域 -->
      <div class="search-main">
        <div class="filter-box">
          <dl>
            <dt>孔网特色</dt>
            <dd>期刊（）</dd>
            <dd>名人墨迹（）</dd>
            <dd>外文原版（）</dd>
          </dl>
          <dl>
            <dt>孔网特色</dt>
            <dd>期刊（）</dd>
            <dd>名人墨迹（）</dd>
            <dd>外文原版（）</dd>
          </dl>
        </div>
        <div class="result-content">
          <span>图书条目</span>
          <ul>
            <li>
              <div class="item">
                <div class="item-img" @click="toBookInfo">
                  <div class="img-box">
                    <img src="../assets/logo.png" alt />
                  </div>
                  <div class="big-img-box">
                    <img src="../assets/logo.png" alt />
                  </div>
                </div>
                <div class="item-info">
                  <div class="title">三体</div>
                  <el-breadcrumb separator="/">
                    <el-breadcrumb-item>作者 著</el-breadcrumb-item>
                    <el-breadcrumb-item>ISBN</el-breadcrumb-item>
                    <el-breadcrumb-item>出版社</el-breadcrumb-item>
                    <el-breadcrumb-item>出版时间</el-breadcrumb-item>
                    <el-breadcrumb-item>版次</el-breadcrumb-item>
                    <el-breadcrumb-item>价格</el-breadcrumb-item>
                    <el-breadcrumb-item>类型</el-breadcrumb-item>
                  </el-breadcrumb>
                  <div class="bookinfo">
                    <p>书本简介 ：</p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      results: "555",
      content: "555",
      bookInfo: [],
      bookname: ""
    };
  },
  created: function() {
    this.bookname = this.$route.query.bookname;
    console.log(this.bookname);
    this.axiosFindInfo();
  },
  methods: {
    axiosFindInfo: function() {
      this.axios
        .get("/book/getBookinfo", {
          params: {
            bookname: this.bookname
          }
        })
        .then(response => {
          console.log(response.data);
          this.bookInfo = response.data;
          // this.bookinfo = response.data;
          // if (this.bookinfo.length == 0) {
          //   this.$message(this.msg);
          // }
        })
        .catch(error => {
          console.log(error);
        });
    },
    toBookInfo: function() {
      this.$router.push({ path: "/item", query: { bid: "666" } }).catch(err => {
        console.log(err);
      });
    }
  }
};
</script>


<style scoped>
body {
  font-family: Helvetica, Arial, Microsoft YaHei, sans-serif;
  font-size: 14px;
  color: #333;
  background-color: #fff;
}
ul li {
  list-style: none;
}
@media only screen and (min-width: 1200px) {
  .header-tab {
    width: 1200px;
  }
  .search-wrap {
    width: 1200px;
  }
}
@media only screen and (max-width: 1199px) {
  .header-tab {
    width: 1000px;
  }
  .search-wrap {
    width: 1000px;
  }
}

.header-tab {
  height: 40px;
  margin: 0 auto;
  font-size: 16px;
  line-height: 40px;
  border-bottom: 1px solid #b5aa9a;
}

.tips {
  width: 120px;
  padding-left: 0;
  text-align: center;
  background-color: #b5aa9a;
  color: #fff;
  height: 39px;
  margin-right: 30px;
  font-weight: 500;
}

.search-wrap {
  margin: 0 auto;
}

.crumbs-bar {
  padding-top: 20px;
  margin-bottom: 8px;
  color: #333;
  background-color: #fff;
  width: 1000px;
  /* border-bottom: 1px solid #e5e5e5; */
}

.el-breadcrumb {
  height: 42px;
  line-height: 42px;
}

.filter-box {
  position: relative;
  display: inline-block;
  vertical-align: top;
  padding-bottom: 180px;
  width: 180px;
  background: #f7f7f6;
  border-top: 1px solid #e5e5e5;
  border-right: 1px solid #e5e5e5;
}

.filter-box {
  width: 179px;
  padding: 10px 17px;
}

.filter-box > dl > dt {
  margin-top: 12px;
  line-height: 20px;
  word-break: break-word;
  word-wrap: break-word;
  font-size: 12px;
  color: #111;
  font-weight: 700;
}

.filter-box > dl > dd {
  margin-top: 4px;
  margin-left: 12px;
  line-height: 20px;
  word-break: break-word;
  word-wrap: break-word;
  color: #333;
  font-size: 12px;
}

.result-content {
  display: inline-block;
  vertical-align: top;
  padding-bottom: 180px;
  width: 820px;
  border-top: 1px solid #e5e5e5;
}

.result-content {
  padding-left: 40px;
  padding-top: 20px;
}

.result-content > span {
  padding: 0 7px;
  color: #c4ccd4;
  font-size: 12px;
  font-weight: 700;
}

.result-content > ul li {
  position: relative;
  padding-top: 20px;
  padding-bottom: 5px;
  border-bottom: 1px solid #e5e5e5;
}

.item::after {
  content: "";
  display: block;
  clear: both;
}

.item-img {
  position: relative;
  float: left;
  width: 140px;
}
.big-img-box {
  display: none;
}
.item-img:hover .big-img-box {
  display: block;
}

.img-box {
  display: block;
  width: 100%;
  height: 140px;
  margin-bottom: 15px;
  line-height: 138px;
  font-size: 0;
  text-align: center;
  border: 1px solid #e5e5e5;
  cursor: pointer;
  overflow: hidden;
}

.img-box > img {
  display: inline-block;
  max-width: 100%;
  max-height: 100%;
  vertical-align: middle;
}

.big-img-box {
  position: absolute;
  top: 0;
  left: 150px;
  z-index: 100000;
  width: 300px;
  height: 300px;
  line-height: 298px;
  text-align: center;
  overflow: hidden;
  background-color: #fff;
  border: 1px solid #e5e5e5;
  box-shadow: 0 0 2px #e5e5e5;
  font-size: 0;
}

.item-info {
  float: left;
  width: 580px;
  margin: -4px 34px 0 20px;
  height: 150px;
}

.item-info .title {
  display: block;
  max-height: 44px;
  height: 26px;
  line-height: 26px;
  font-size: 14px;
  word-break: break-word;
  word-wrap: break-word;
  overflow: hidden;
}

.item-info .bookinfo > p {
  width: 100%;
  height: 70px;
  color: #666;
  font-size: 12px;
}
</style>