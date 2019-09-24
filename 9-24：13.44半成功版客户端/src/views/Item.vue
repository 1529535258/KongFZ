<template>
  <div class="item">
    <div class="detail-wrap">
      <h1 class="detail-title">{{bookinfo.bookname}}</h1>
      <div class="detail">
        <div class="detail-con">
          <div class="detail-con-left">
            <div class="detail-img">
              <a href>
                <img :src="bookinfo.imgs" alt="图片去火星了..." :title="bookinfo.bookname" />
              </a>
            </div>
          </div>
          <div class="btns">
            <div class="go-buy" @click="toShop">立即购买</div>
            <div class="add-cart" @click="openMsg">
              <i class="el-icon-shopping-cart-2" style="fontSize:14px"></i>加入购物车
            </div>
          </div>
          <div class="detail-con-right">
            <div class="detail-con-right-top">
              <div class="info-con-box">
                <p>作者：{{bookinfo.author}}</p>
                <p>出版社：{{bookinfo.book_company}}</p>
                <p>出版时间：{{bookinfo.book_date}}</p>
                <p>版次：{{bookinfo.book_edition}}</p>
                <p>ISBN：{{bookinfo.ISBN}}</p>
                <p>定价：{{bookinfo.price}}</p>
                <p>装帧：</p>
              </div>
              <div class="info-con-box">
                <p>开本：{{bookinfo.kaiben}}</p>
                <p>纸张：{{bookinfo.pagecate}}</p>
                <p>页数：{{bookinfo.book_pages}}</p>
                <p>字数：{{bookinfo.wordsnum}}</p>
              </div>
            </div>
            <div class="detail-con-right-bottom">
              <ul class="gray3 text">
                <li>
                  <h4>内容简介:{{bookinfo.book_intro}}</h4>
                  <p></p>
                </li>
                <!-- <li>
                  <h4>作者简介:</h4>
                  <p></p>
                </li>
                <li>
                  <h4>目录:</h4>
                  <p></p>
                </li>-->
              </ul>
            </div>
          </div>
        </div>
        <div class="detail-other">
          <div class="detail-other-title">相关分类</div>
          <div class="detail-other-con">
            <ul>
              <li v-for="someclass in bookclass" :key="someclass.cid">{{someclass.catename}}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="recommend-box">
        <div class="recommend-title">好书推荐</div>
        <div class="recommend-list">
          <ul>
            <li
              v-for="bookinfo in bookinfolist"
              :key="bookinfo.bid"
              @click="toBookInfo(bookinfo.bid)"
            >
              <div class="recommend-list-pic">
                <img :src="bookinfo.imgs" alt />
              </div>
              <div class="recommend-list-title">{{bookinfo.bookname}}</div>
              <div class="recommend-list-author">{{bookinfo.author}} 著</div>
              <div class="recommend-list-price">￥{{bookinfo.price}}起</div>
            </li>
          </ul>
        </div>
      </div>
      <!-- <List></List> -->
    </div>

    <!-- 页脚 -->
    <!-- <el-container> -->
    <div class="footer">
      <foter></foter>
    </div>
    <!-- </el-container> -->
  </div>
</template>
    
<script>
export default {
  data() {
    return {
      bookinfo: [],
      bookclass: [],
      bookinfolist: []
    };
  },
  methods: {
    getGoodsByid() {
      let search = window.location.search;
      let bid = search.split("=").pop();
      // console.log(this.$route.query.bid);
      this.axios
        .get("/goods/getgoodsbybid", {
          params: {
            bid: bid
          }
        })
        .then(response => {
          response.data[0].book_date = response.data[0].book_date.substring(
            0,
            10
          );
          this.bookinfo = response.data[0];
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    toBookInfo: function(bid) {
      // console.log(bid);
      this.$router.push({ path: "/item", query: { bid: bid } }).catch(err => {
        console.log(err);
      });
    },
    openMsg: function() {
      this.$message({
        message: "恭喜你，添加成功！",
        type: "success"
      });
    },
    toShop: function() {
      // this.$router.push({ path: "/item", query: { bid: bid } }).catch(err => {
      //   console.log(err);
      // });
    }
  },
  created() {
    // this.getGoodsByid();
    // console.log(this.$route.query.bid);
    var that = this;
    function getGoodsByid() {
      return that.axios.get(
        `/goods/getgoodsbybid?bid=${that.$route.query.bid}`
      );
    }
    function getAllClass() {
      return that.axios.get("/class/getallclass");
    }
    function getAllGoods() {
      return that.axios.get("/goods/getallgoods");
    }
    this.axios.all([getGoodsByid(), getAllClass(), getAllGoods()]).then(
      this.axios.spread(function(acct, perms, thrid) {
        // 两个请求现在都执行完成
        // console.log(acct.data);
        that.bookinfo = acct.data[0];
        // console.log(perms.data.slice(0,10));
        that.bookclass = perms.data.slice(0, 13);
        // console.log(thrid.data);
        that.bookinfolist = thrid.data.slice(0, 12);
        // console.log(that.bookinfo);
      })
    );
  }
};
</script>>

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
  .footer {
    width: 1200px;
  }
}
@media only screen and (max-width: 1199px) {
  .footer {
    width: 1000px;
  }
}
.footer {
  margin: 0 auto;
}

.detail-wrap {
  position: relative;
  width: 1000px;
  min-height: 100%;
  margin: 0 auto;
  overflow: hidden;
  padding-bottom: 10px;
}

.detail::after {
  content: "";
  display: block;
  clear: both;
}

.detail-title {
  margin: 26px 0;
  line-height: 26px;
  color: #333;
  padding-left: 20px;
  font-size: 20px;
}

.btns {
  width: 160px;
  position: absolute;
  top: 200px;
  left: 0;
}

.btns button {
  display: inline-block;
}

.go-buy {
  overflow: hidden;
  width: 160px;
  border-radius: 2px;
  background-color: #f8f7f3;
  color: #8c222c;
  cursor: pointer;
  border: 1px solid #8c222c;
  height: 40px;
  font-size: 14px;
  line-height: 38px;
  text-align: center;
  box-sizing: border-box;
}

.go-buy:hover {
  background-color: #fff;
}

.add-cart {
  overflow: hidden;
  width: 160px;
  border-radius: 2px;
  color: #fff;
  cursor: pointer;
  background-color: #8c222c;
  height: 40px;
  font-size: 14px;
  line-height: 38px;
  text-align: center;
  box-sizing: border-box;
  margin-top: 17px;
}

.add-cart:hover {
  background-color: #7b111b;
}

.detail-con {
  position: relative;
  float: left;
  width: 706px;
}

.detail-con::after {
  content: "";
  display: block;
  clear: both;
}

.detail-con .detail-con-left {
  float: left;
  width: 160px;
}

.detail-con .detail-con-left .detail-img {
  width: 160px;
  height: 160px;
  line-height: 158px;
  text-align: center;
  font-size: 0;
}

.detail-con .detail-con-left .detail-img img {
  display: inline-block;
  max-width: 100%;
  max-height: 100%;
  vertical-align: middle;
}

.detail-con .detail-con-right {
  float: right;
  width: 506px;
}

.detail-con .detail-con-right .detail-con-right-top {
  padding-top: 3px;
  overflow: hidden;
  padding-bottom: 14px;
}

.detail-con .detail-con-right .info-con-box {
  float: left;
  width: 50%;
  overflow: hidden;
}

.detail-con .info-con-box p {
  padding-right: 30px;
  word-break: break-all;
  line-height: 20px;
  font-size: 12px;
  color: #333;
}

.detail-con .detail-con-right .detail-con-right-bottom {
  font-size: 12px;
}

.detail-con-right-bottom li {
  margin-bottom: 20px;
  font-size: 13px;
  word-wrap: break-word;
}

.detail-con-right-bottom li h4 {
  margin-bottom: 9px;
}

.detail-other {
  float: right;
  width: 240px;
}

.detail-other .detail-other-title {
  padding-bottom: 6px;
  border-bottom: 1px solid #e5e5e5;
  margin-bottom: 10px;
  font-size: 14px;
  color: #333;
}

.detail-other .detail-other-con li {
  line-height: 15px;
  margin-bottom: 9px;
  color: #365899;
  font-size: 12px;
  word-break: keep-all;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.recommend-box {
  width: 100%;
  margin-top: 70px;
  margin-bottom: 30px;
}

.recommend-box .recommend-title {
  font-size: 18px;
  color: #333;
  margin-bottom: 26px;
  padding-left: 20px;
}

.recommend-list li {
  position: relative;
  display: inline-block;
  width: 144px;
  height: 234px;
  vertical-align: top;
  margin-bottom: 40px;
}

.recommend-list .recommend-list-pic {
  display: block;
  width: 140px;
  height: 140px;
  margin: 0 auto 8px;
  text-align: center;
  text-align-last: center;
  line-height: 140px;
  font-size: 0;
}

.recommend-list .recommend-list-pic img {
  display: inline-block;
  /* width: 100%; */
  height: 100%;
  vertical-align: middle;
}

.recommend-list .recommend-list-title {
  width: 100px;
  margin: 0 auto;
  font-size: 13px;
  margin-bottom: 4px;
  word-break: keep-all;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.recommend-list .recommend-list-author {
  width: 100px;
  margin: 0 auto;
  font-size: 13px;
  color: #999;
  margin-bottom: 4px;
  word-break: keep-all;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.recommend-list .recommend-list-price {
  width: 100px;
  margin: 0 auto;
  font-size: 17px;
  color: #bf7f5f;
}
</style>>