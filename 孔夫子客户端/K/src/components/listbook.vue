<template>
  <div class="listbook">
    <div class="listbook-title">
      <span>旧书</span>
    </div>
    <div class="listbook-bottom">
      <div class="left">
        <div class="article">
          <p>
            国学今典
            <span>/</span>
            <span>
              <a href>更多</a>
            </span>
          </p>
        </div>
        <ul>
          <li v-for="(item,index) of tableData" :key="index">
            <router-link :to="'Item?bid='+item.bid">
              <img :src="item.imgs" class="a-img" />
              <p class="a-title">春秋左传注（全四册）</p>
              <p class="a-name">杨伯峻</p>
              <p class="gallery-main-product-price">
                <i>
                  <span style="font-size:14px;color: #bf7f5f;">￥</span>35.00
                </i>
                <span>起</span>
              </p>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="a-right">
        <div class="article">
          <p>
            新书排行榜
            <span>/</span>
            <span>
              <a href>更多</a>
            </span>
          </p>
        </div>
        <ul>
          <li v-for="(item,index) of book" :key="index">
            <div class="a-rigtht-tt">
              <div class="text_box">
                <span class="ico-item-list">{{index+1}}</span>
                <a
                  href="http://item.kongfz.com/book/28169766.html"
                  target="_blank"
                  class="list-book-rank-name"
                >{{item.name}}</a>
              </div>

              <span class="price-color">
                <i>
                  <span style="width:12px;font-size:12px;line-height:22px;color: #bf7f5f;">￥</span>
                  {{item.price}}
                </i>
                <span class="grayb">起</span>
              </span>
            </div>
            <p
              class="list-recommand-list-intro"
              style="margin-left:15px;"
              v-bind:title="item.athor"
            >{{item.athor}}</p>
            <p class="list-shop-line"></p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "List",
  data() {
    return {
      book: [
        { name: "《年方六千：文物的故事》", price: "33", athor: "郑岩" },
        {
          name: "南京传--南京人立《南京传》,叶兆言四",
          price: "53.04",
          athor: "叶兆言 著"
        },
        {
          name: "远行译丛：老巴塔哥尼亚快车（精装）",
          price: "38.86",
          athor: "[美]保罗·索鲁 著；陈朵思、胡洲贤 译"
        },
        {
          name: "疯癫与文明（修订译本）（五版）",
          price: "24.7",
          athor: "[法]米歇尔·福柯 著"
        },
        { name: "《年方六千：文物的故事》", price: "33", athor: "郑岩" },
        { name: "当代中国社会分层", price: "33", athor: "郑岩" },
        { name: "《年方六千：文物的故事》", price: "33", athor: "郑岩" },
        { name: "《年方六千：文物的故事》", price: "33", athor: "郑岩" }
      ],
      tableData: ""
    };
  },
  methods: {
    getAllGoods() {
      this.axios
        .get("/goods/getallgoods")
        .then(response => {
          response.data = response.data.slice(12, 22);
          this.tableData = response.data;
          console.log(this.tableData);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  created() {
    this.getAllGoods();
  }
};
</script>
<style scoped>
.listbook {
  height: 675px;
}
.listbook-title {
  height: 44px;
  border-bottom: 1px solid #ccc;
}
.listbook-title > span {
  line-height: 30px;
  font-size: 30px;
  color: #333;
  display: inline-block;
  margin-right: 20px;
  padding-bottom: 14px;
  font-weight: 700;
}
.listbook-bottom {
  display: flex;
}
.listbook-bottom > .left {
  width: 70%;
}
.listbook-bottom > .a-right {
  width: 30%;
}
.article {
  margin-top: 30px;
}
.article a {
  font-size: 12px;
  color: #0057a0;
}
.article a:hover {
  color: #bf7f5f;
}
.article p {
  text-align: left;
  margin-left: 10px;
  font-size: 18px;
  color: #333;
  font-weight: 700;
}
.left > ul,
.left > ul > li,
.a-right > ul {
  height: 520px;
  display: flex;
  flex-wrap: wrap;
}
.left > ul > li {
  width: 150px;
  height: 240px;
  margin: 5px;
  text-align: center;
  flex-direction: column;
}
.a-img {
  width: 120px;
  height: 140px;
}
.a-title {
  margin: 0 auto;
  font-size: 12px;
  color: #333;
  max-height: 40px;
  line-height: 20px;
  text-align: left;
  word-break: break-all;
  overflow: hidden;
  margin-left: 15px;
}
.a-title:hover,
.a-name:hover {
  color: #bf7f5f;
}
.a-name {
  height: 16px;
  text-align: left;
  overflow: hidden;
  font-size: 12px;
  color: #999;
  margin: 0px;
  margin-top: 5px;
  margin-left: 15px;
}
.gallery-main-product-price {
  text-align: left;
  margin-left: 15px;
}
.gallery-main-product-price i {
  list-style: none;
  font-size: 16px;
  color: #bf7f5f;
  font-style: normal;
}
.gallery-main-product-price span:nth-child(2) {
  font-size: 12px;
  color: #bbb;
  margin-left: 3px;
}
.list-shop-line {
  width: 100%;
  height: 1px;
  margin-top: 2px;
  margin-bottom: 6px;
  border-top: 1px solid #e5e5e5;
}
.list-recommand-list-intro {
  font-size: 12px;
  color: #999;
  height: 12px;
  line-height: 12px;
  margin-top: 8px;
  margin-bottom: 8px;
  overflow: hidden;
}
.a-rigtht-tt {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.text_box {
  display: flex;
  align-items: center;
}
.ico-item-list {
  display: block;
  width: 5px;
  height: 12px;
  color: #55453d;
  line-height: 12px;
  margin-right: 10px;
  margin-top: 1px;
}
.text_box {
  height: 24px;
}
.list-book-rank-name {
  display: inline-block;
  font-size: 14px;
  color: #333;
  width: 240px;
  height: 19px;
  overflow: hidden;
}
.price-color {
  color: #a87;
  position: relative;
  top: -2px;
  line-height: 19px;
}
.price-color i {
  font-style: normal;
  font-size: 14px;
  float: left;
}
.price-color span {
  float: left;
  font-size: 12px;
  margin-left: 2px;
}
.a-right ul > li {
  width: 381px;
}
.list-book-rank-name:hover {
  color: #8c222c;
}
</style>