<template>
  <div class="item">
    <div class="detail-wrap">
      <h1 class="detail-title">{{bookinfo.bookname}}</h1>
      <div class="detail">
        <div class="detail-con">
          <div class="detail-con-left">
            <div class="detail-img">
              <a href>
                <img :src="bookinfo.imgs" alt />
              </a>
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
              </ul>
            </div>
          </div>
        </div>
        <div class="detail-other">
          <div class="detail-other-title">相关分类</div>
          <div class="detail-other-con">
            <ul>
              <li>文学</li>
              <li>文学</li>
              <li>文学</li>
            </ul>
          </div>
        </div>
      </div>
      <!-- <div class="recommend-box">
        <div class="recommend-title">好书推荐</div>
        <div class="recommend-list">
          <ul>
            <li>
              <div class="recommend-list-pic">
                <img src="../assets/logo.png" alt />
              </div>
              <div class="recommend-list-title">wen</div>
              <div class="recommend-list-author">wen 著</div>
              <div class="recommend-list-price">￥wen起</div>
            </li>
          </ul>
        </div>
      </div> -->
      <List></List>
    </div>
  </div>
</template>
    
<script>
export default {
  data() {
    return {
      bookinfo: ""
    };
  },
  methods: {
    getGoodsByid() {
      let search = window.location.search;
      let bid = search.split("=").pop();
      this.axios
        .get("/goods/getgoodsbybid", {
          params: {
            bid: bid
          }
        })
        .then(response => {
          response.data[0].book_date = response.data[0].book_date.substring(0,10);
          this.bookinfo = response.data[0];
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  created() {
    this.getGoodsByid();
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

.detail-wrap {
  position: relative;
  width: 1000px;
  min-height: 100%;
  margin: 0 auto;
  overflow: hidden;
  padding-bottom: 140px;
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

.detail-con {
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
  width: 100%;
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
  margin-top: 24px;
  font-size: 17px;
  color: #bf7f5f;
}
</style>>