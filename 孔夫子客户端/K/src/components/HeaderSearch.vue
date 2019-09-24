<template>
  <div class="header-search-box">
    <div class="header-search">
      <a href class="logo-text">
        <img src="../assets/logo/logo-220.png" alt="孔夫子旧书网-网上买书卖书、古旧书收藏品交易平台" class="logo-220" />
        <img src="../assets/logo/logo-250.png" alt="孔夫子旧书网-网上买书卖书、古旧书收藏品交易平台" class="logo-250" />
      </a>
      <div class="search-box">
        <input type="text" class="input" placeholder="商品名称、作者" ref="searchinfo" />
        <div id="searchBtn" class="btn" @click="search" @keyup.enter="onEnter">搜孔网</div>
      </div>

      <!-- <div class="infocont">
        <h2>book info</h2>
        <ul>
          <li v-for="book in bookinfo" v-bind:key="book.bid">{{book.bookname}}</li>
        </ul>
      </div>-->
    </div>
  </div>
</template>
    
<script>
export default {
  data: function() {
    return {
      info: "",
      msg: "图书不存在",
      bookinfo: []
    };
  },
  methods: {
    search: function() {
      this.info = this.$refs.searchinfo.value;
      // console.log(this.info);
      this.$router
        .push({ path: "/search", query: { bookname: this.info } })
        .catch(err => {
          console.log(err);
        });
      // this.axiosFindInfo();
    },
    onEnter:function() {
      console.log(this.$refs.searchinfo.value);
    },
    axiosFindInfo: function() {
      this.axios
        .get("/book/getBookinfo", {
          params: {
            info: this.info
          }
        })
        .then(response => {
          // console.log(response.data);
          this.bookinfo = response.data;
          if (this.bookinfo.length == 0) {
            this.$message(this.msg);
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  created: function() {
    // this.axiosFindInfo();
  }
};
</script>>

<style scoped>
.infocont {
  position: absolute;
  top: 100px;
  width: 900px;
  height: 500px;
}

body {
  font-family: Helvetica, Arial, Microsoft YaHei, sans-serif;
  font-size: 14px;
  line-height: 22px;
  color: #333;
}
/* 媒体查询设置 */
@media only screen and (min-width: 1200px) {
  .header-search {
    width: 1200px;
  }
  .header-search .logo-text {
    width: 262px;
  }
  .header-search .logo-text img.logo-220 {
    display: none;
  }
  .header-search .logo-text img.logo-250 {
    display: inline-block;
    vertical-align: middle;
  }
  .search-box {
    width: 560px;
  }
  .input {
    width: 468px;
  }
}
@media only screen and (max-width: 1199px) {
  .header-search {
    width: 1000px;
  }
  .header-search .logo-text {
    width: 232px;
  }
  .header-search .logo-text img.logo-220 {
    display: inline-block;
    vertical-align: middle;
  }
  .header-search .logo-text img.logo-250 {
    display: none;
  }
  .search-box {
    width: 460px;
  }
  .input {
    width: 368px;
  }
}

.header-search-box {
  width: 100%;
  height: 100px;
  background: #f2f1ea;
}

.header-search {
  position: relative;
  height: 100px;
  margin: 0 auto;
  padding: 30px 0;
}

.header-search .logo-text {
  position: absolute;
  left: 0;
  top: 0;
  float: left;
  display: block;
  height: 100px;
  padding-left: 0;
  line-height: 95px;
  overflow: hidden;
}

.logo-text::after {
  content: "";
  display: block;
  clear: both;
}

.header-search .logo-text img {
  width: 100%;
}

.search-box {
  position: relative;
  float: right;
  height: 40px;
  border: 2px solid #8c222c;
}

.input,
.btn {
  float: left;
  height: 36px;
}

.input {
  outline: none;
  border: none;
  font-size: 12px;
  color: #999;
  padding: 10px;
  line-height: 18px;
}

.btn {
  width: 88px;
  height: 36px;
  padding-left: 2px;
  line-height: 36px;
  font-size: 16px;
  color: #fff;
  border-radius: 0;
  border: 0;
  background-color: #8c222c;
  text-align: center;
  cursor: pointer;
  margin-top: 0px;
}

.search-box::after {
  content: "";
  display: block;
  clear: both;
}
</style>>