<template>
  <div class="newbook">
    <!-- 轮播 -->
    <div class="block">
      <el-carousel height="270px">
        <el-carousel-item v-for="(item,index) in imges" :key="index">
          <a href class="lunbo-img">
            <img :src="item.src" alt />
          </a>
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 图书模块   -->
    <el-container>
      <!-- 左边侧栏 -->
      <el-aside width="180px" id="b-line">
        <div class="fenlei">
          <h3>新书分类</h3>
          <ul class="f-new">
            <li v-for="(item,index) in list" :key="index">
              <div class="f-new-l">
                <a href>{{item.name}}</a>
              </div>
              <div class="f-new-r">
                <a href v-for="(item1,index1) in item.symbol" :key="index1">{{item1}}</a>
              </div>
            </li>
          </ul>
        </div>
        <!-- 销售榜 -->
        <div class="fenlei xiaoshou">
          <h3>畅销排行榜</h3>
          <ul class="f-new">
            <li v-for="(item,index) in bxiao" :key="index">
              <div class="f-new-r">
                <a href>{{index+1+"."}}</a>
              </div>
              <div class="f-new-r">
                <a href>{{item}}</a>
              </div>
            </li>
          </ul>
        </div>
      </el-aside>
      <!-- 右边图书 -->
      <el-container>
        <el-main>
          <book></book>
          <!-- 孔夫子新书广场 -->
          <div class="freshbook">
            <p>
              孔夫子新书广场
              <span>/</span>
              <span>
                <a href>进店逛逛</a>
              </span>
            </p>
            <ul class="db-list">
              <li v-for="(item,index) in book1" :key="index" class="freah-li">
                <div class="db-list-li fresh-li-div">
                  <a href>
                    <img src="https://www.kfzimg.com/sw/kfzimg/255/3027ccd65c0022c5_n.jpg" alt />
                  </a>
                  <div class="item-fresh">
                    <div class="bname">
                      <a href>天地盖特藏毛边本《靳以日记书信集》</a>
                    </div>
                    <div
                      class="b-dis"
                    >钤靳以印章（靳以先生遗物，文物级，首次公开） 章洁思先生签名、盖章（靳以长女、本书整理者） 钤书名印（文物鉴定家、篆刻名家王敦化先生的关门弟子潘方尔刻） 藏书票（版画家杨可扬先生的哲嗣杨以磊创作。靳以印、章洁思印及签名、书名印均在藏书票上呈现，粘贴与扉页） 特制孔网毛边本定制版专属纸盒（按1930年代法藏馆天地盖瓦楞纸盒形制，并作内设改良）</div>
                    <div class="b-tag">
                      <span>
                        限量
                        <div class="jiao">
                          <div class="jiao-inner"></div>
                        </div>
                      </span>
                      <span>
                        欢迎
                        <div class="jiao">
                          <div class="jiao-inner"></div>
                        </div>
                      </span>
                      <span>
                        限量
                        <div class="jiao">
                          <div class="jiao-inner"></div>
                        </div>
                      </span>
                      <span>
                        限量
                        <div class="jiao">
                          <div class="jiao-inner"></div>
                        </div>
                      </span>
                      <span>
                        限量
                        <div class="jiao">
                          <div class="jiao-inner"></div>
                        </div>
                      </span>
                    </div>
                    <div class="item-bottom">
                      <div class="f_left">
                        <span style="font-size: 16px;">￥</span>418.00
                        <span>包邮</span>
                      </div>
                      <div class="btn">立即抢购</div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <!-- 公共组件book -->
          <book></book>
          <!-- 特色精品推荐 -->
          <div class="jinpin">
            <p>特色精品推荐</p>
            <div class="j-all">
              <div class="j-header">
                <span class="label">专题</span>
                <span class="title">
                  <a href>名家藏书票及文献资料</a>
                </span>
              </div>
              <div class="j-content">
                <div class="j-c-left">
                  <a href v-for="(item,index) in jinpin" :key="index">{{item}}</a>
                </div>
                <div class="j-c-middle">
                  <div class="j-c-m-img">
                    <a href>
                      <img src alt />
                    </a>
                  </div>
                  <div class="j-c-m-right">
                    <a>“德国20世纪初期著名艺术家”（Hans VOLKERT）蚀刻早期藏书票—《圣母与天使》 1920</a>
                    <div class="j-c-m-r-box">
                      <span>
                        <span>作者:</span> Hans VOLKERT
                      </span>
                      <span>
                        <span>品相:</span>九品
                      </span>
                    </div>
                    <span class="j-price">
                      <span>￥</span>500
                    </span>
                  </div>
                </div>
                <div class="j-c-right">
                  <div>
                    <p>宜家</p>
                    <span>
                      好评率：
                      <span>99%</span>
                    </span>
                    <span>
                      信誉积分：
                      <span>4399</span>
                    </span>
                  </div>
                  <a class="j-c-p">逛逛</a>
                </div>
              </div>
            </div>
          </div>
        </el-main>
      </el-container>
      <!-- 结束 -->
    </el-container>
    <!-- 结束 -->
    <!-- 页脚 -->
    <foter></foter>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imges: [
        { src: require("../../public/img/icons/one.jpg") },
        { src: require("../../public/img/icons/two.jpg") },
        { src: require("../../public/img/icons/three.jpg") }
      ],
      jinpin: [
        "德国20世纪初期著名艺术家”（Hans VOLKERT）蚀刻早期藏书票—《圣母与天使》 1920",
        "德国艺术家“ Hanns Bastanier(1885-c.1966)”蚀刻藏书票—《仰望裸女的裸男》",
        "德国20世纪初期著名艺术家”（Hans Volkert）蚀刻早期藏书票——《葡萄园的裸女》",
        "德国20世纪初期著名艺术家”（Hans Volkert）蚀刻早期藏书票——《葡萄园的裸女》",
        "瑞士艺术家“Alfred Soder  (1880-1957)”蚀刻藏书票—《双手托起孩子的母亲》"
      ],
      book: [
        {
          src: require("../../public/img/icons/book1.jpg")
        },
        {
          src: require("../../public/img/icons/book1.jpg")
        },
        {
          src: require("../../public/img/icons/book1.jpg")
        },
        {
          src: require("../../public/img/icons/book1.jpg")
        },
        {
          src: require("../../public/img/icons/book1.jpg")
        },
        {
          src: require("../../public/img/icons/book1.jpg")
        },
        {
          src: require("../../public/img/icons/book1.jpg")
        },
        {
          src: require("../../public/img/icons/book1.jpg")
        },
        {
          src: require("../../public/img/icons/book1.jpg")
        },
        {
          src: require("../../public/img/icons/book1.jpg")
        },
        {
          src: require("../../public/img/icons/book1.jpg")
        },
        {
          src: require("../../public/img/icons/book1.jpg")
        }
      ],
      bxiao: ["通雅轩", "外涂图书", "北京诚信特价书城", "乐淘书社"],
      list: [
        { name: "小说", symbol: ["推理", "言情", "武侠", "科幻"] },
        { name: "随笔", symbol: ["散文随笔", "诗歌词赋"] },
        { name: "语言文字", symbol: ["汉语", "英语", "日语"] },
        { name: "历史", symbol: ["文物考古", "历史考古"] },
        { name: "地理", symbol: ["风俗", "名胜古迹", "地图"] }
      ],
      book1: ["1", "2", "3"]
    };
  }
};
</script>
<style >
@media only screen and (min-width: 1200px) {
  .newbook {
    width: 1200px;
  }
}
@media only screen and (max-width: 1199px) {
  .newbook {
    width: 1000px;
  }
}
.newbook {
  margin: 0 auto;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}
.lunbo-img > img {
  width: 100%;
}
body {
  background-color: #fff;
}
li {
  text-decoration: none;
}
#b-line {
  border-right: 1px solid #ccc;
}
.f-new,
.f-new > li {
  width: 100%;
}
.f-new > li {
  display: flex;
  height: 30px;
  line-height: 30px;
  border-top: 1px solid #e5e5e5;
}
.f-new-l {
  padding-left: 4px;
  padding-right: 2px;
  color: #333;
  font-size: 14px;
  font-weight: 700;
}
.f-new-l > a:hover {
  color: #8c222c;
}
.f-new-r {
  padding-left: 6px;
  color: #333;
  font-size: 12px;
}
.f-new-r > a:hover {
  color: #8c222c;
}
h3 {
  text-align: left;
  margin-left: 4px;
}
ul {
  margin: 0;
  padding: 0;
}
.f-new-r > a {
  margin-right: 4px;
}
.fenlei {
  border-bottom: 1px solid #e5e5e5;
}
.el-main {
  padding-top: 0px;
  overflow: visible;
}
.el-aside {
  border-right: 1px solid #e5e5e5;
}
/* 右侧  近期图书*/
.goodbook > p,
.freshbook > p,
.jinpin > p {
  text-align: left;
  margin-left: 25px;
  font-size: 18px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 15px;
  color: #333;
  font-weight: 700;
}
a:hover {
  cursor: pointer;
  color: #bf7f5f;
}
.goodbook a,
.freshbook a,
.jinpin > a {
  font-size: 12px;
  color: #0057a0;
}
.goodbook a:hover {
  color: #bf7f5f;
}
.freshbook a:hover {
  color: #bf7f5f;
}
.jinpina:hover {
  color: #bf7f5f;
}
.db-list {
  height: 550px;
  display: flex;
  margin-top: 15px;

  flex-wrap: wrap;
  justify-content: space-between;
}
.db-list > li {
  width: 160px;
  flex-shrink: 0;
  height: 240px;
  display: flex;

  flex-direction: column;
  align-items: center;
}
/* // 新书广场 */
.db-list .freah-li {
  width: 332px;
}
.db-list-li {
  display: flex;
  flex-direction: column;
  width: 130px;
  align-items: center;
}
.fresh-li-div {
  width: 350px;
  height: 410px;
}
.db-list-li img {
  width: 107px;
  height: 150px;
}
.fresh-li-div img {
  width: 300px;
  height: 240px;
}
.db-list-li p,
.price {
  width: 110px;
  text-align: left;
  margin: 0;
  font-size: 12px;
  color: #333;
  word-break: break-all;
  max-height: 40px;
  line-height: 20px;
  overflow: hidden;
}
.price {
  margin-top: 20px;
  font-size: 16px;
  color: #bf7f5f;
}
.name {
  height: 22px;
  color: #999;
}
.per {
  color: #bbb;
  font-size: 12px;
}
/* // 孔夫子新书广场 */
.freshbook .db-list {
  margin-top: 15px;
  margin-left: 10px;
}
.item-fresh {
  width: 286px;
  margin: 0 auto;
}
.bname {
  padding-top: 12px;
  height: 34px;
  overflow: hidden;
}
.b-dis {
  font-size: 12px;
  color: #666;
  margin-top: 6px;
  height: 36px;
  line-height: 18px;
  overflow: hidden;
}
.b-tag {
  width: 100%;
  height: 36px;
  margin-top: 10px;
  border-bottom: 1px solid #e5e5e5;
  overflow: hidden;
}
.b-tag > span {
  position: relative;
  float: left;
  font-size: 12px;
  line-height: 13px;
  height: 13px;
  border: 1px solid #dfc49b;
  padding: 5px 6px;
  color: #c28f42;
  margin-right: 9px;
  margin-bottom: 12px;
}
/* 特色精品推荐 */
.j-all {
  margin-left: 30px;
}
.j-header {
  height: 60px;

  display: flex;
  align-items: center;
  background-color: #f9f7f4;
}
.j-header .label {
  display: inline-block;
  vertical-align: middle;
  width: auto;
  height: 18px;
  padding: 0 4px;
  margin-right: 6px;
  line-height: 18px;
  font-size: 12px;
  color: #8c222c;
  border: 1px solid #8c222c;
}
.j-header .title {
  display: inline-block;
  vertical-align: middle;
  width: 300px;
  font-size: 16px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.j-content {
  border: 1px solid #e5e5e5;
  display: flex;
}
.j-c-left {
  width: 300px;
  height: 206px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #e5e5e5;
  background-color: #f8f8f8;
}
.j-c-left > a {
  height: 41px;
  line-height: 41px;
  padding: 0 20px;
  font-size: 12px;
  overflow: hidden;
  cursor: pointer;
  color: #666;
}
.j-c-active {
  width: 300px;
  height: 206px;
  border-bottom: 1px solid #e5e5e5;
  background-color: #fff;
}
.j-c-middle {
  width: 490px;
  display: flex;
  box-sizing: border-box;
  height: 206px;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
}
.j-c-middle > a {
  max-height: 72px;
  line-height: 24px;
  font-size: 14px;
  overflow: hidden;
  word-break: break-word;
  word-wrap: break-word;
  color: #333;
}
.j-c-m-right {
  width: 240px;
  height: 160px;
}
.j-c-m-right > p {
  margin-top: 0px;
}
.j-c-m-right span {
  line-height: 20px;
  font-size: 12px;
  color: #666;
}
.j-c-m-r-box {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}
.j-c-m-img,
.j-c-m-img > a,
.j-c-m-img > a > img {
  width: 160px;
  height: 160px;
  background-color: #eee;
}
.j-c-m-right span.j-price {
  line-height: 20px;
  font-size: 16px;
  color: #bf7f5f;
}
.j-c-right {
  width: 211px;
  display: flex;
  flex-direction: column;
  height: 206px;
  box-sizing: border-box;
  padding: 25px 35px;
  border-left: 1px solid #e5e5e5;
  background-color: #eee;
}
.j-c-right > div,
.j-c-p {
  display: flex;
  margin-bottom: 10px;
  font-size: 12px;
  color: #666;
  flex-direction: column;
}
</style>