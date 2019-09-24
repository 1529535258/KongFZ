<template>
  <div class="index">
    <Nav></Nav>
    <!-- 中间部分 侧边栏   右边（轮播图 ，图片，好书推荐）-->
    <el-container class="body-color">
      <!-- 侧边栏 -->
      <el-aside width="180px" id="left-aside">
        <!-- 图书 -->
        <div class="list">
          <div class="list-title">
            <div class="left">图书</div>
            <div class="right">
              <a href="#">最新上书</a>
            </div>
          </div>
          <ul class="aside-ul">
            <li
              v-for="(item,index) in list1"
              :key="index"
              @mouseenter="change(item[0].name)"
              @mouseleave="leave()"
              :class="cls"
            >
              <div class="aside-ul-name">
                <!-- <a href v-for="(item1,index) in item" :key="index">{{item1.name[0]}} / {{item1.name[1]}}</a> -->
                <a href>{{item[0].catename}} / {{item[1].catename}}</a>
              </div>
              <div class="aside-ul-sym">
                <i class="el-icon-arrow-right"></i>
              </div>

              <!-- 侧边栏出现的二级菜单 -->
              <div class="left-tab" :style="dis">
                <div class="left-tit">
                  <div class="left-tit-div">
                    <i class="el-icon-arrow-right"></i>
                    {{item[0].catename}}
                  </div>
                  <div class="left-content">
                    <ul>
                      <li>
                        <a href>文化</a>
                      </li>
                      <li>
                        <a href>文化</a>
                      </li>
                      <li>
                        <a href>文化</a>
                      </li>
                      <li>
                        <a href>文化</a>
                      </li>
                      <li>
                        <a href>文化</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <!-- 侧边栏出现的二级菜单 -->
          <!-- <div class="left-tab" :style="dis">
            <div class="left-tit">
              <div class="left-tit-div">
                <i class="el-icon-arrow-right"></i>书籍
              </div>
              <div class="left-content">
                <ul>
                  <li>
                    <a href>文化</a>
                  </li>
                  <li>
                    <a href>文化</a>
                  </li>
                  <li>
                    <a href>文化</a>
                  </li>
                  <li>
                    <a href>文化</a>
                  </li>
                  <li>
                    <a href>文化</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>-->
        </div>
        <!-- 艺术品与收藏 -->
        <div class="list">
          <div class="list-title">
            <div class="left">艺术品与收藏</div>
          </div>
          <ul class="aside-ul">
            <li v-for="(item,index) of list2" :key="index">
              <a href>{{item[0].catename}} / {{item[1].catename}}</a>
            </li>
          </ul>
          <!-- 侧边栏出现的二级菜单 -->
          <!-- <div class="left-tab"></div> -->
        </div>
        <!-- 文创与周边 -->
        <div class="list">
          <div class="list-title">
            <div class="left">文创与周边</div>
          </div>
          <ul class="aside-ul">
            <li v-for="(item,index) of list3" :key="index">
              <a href>{{item[0].catename}} / {{item[1].catename}}</a>
            </li>
          </ul>
          <!-- 侧边栏出现的二级菜单 -->
          <!-- <div class="left-tab"></div> -->
        </div>
      </el-aside>
      <!-- 侧边栏  结束 -->

      <!-- 右边（轮播图 ，图片 ，好书推荐） -->
      <el-container class="lunbo">
        <el-main>
          <!--轮播图  elementUI组件 -->
          <div class="block">
            <el-carousel height="270px">
              <el-carousel-item v-for="(item,index) in imges" :key="index">
                <a href>
                  <img :src="item.src" alt />
                </a>
              </el-carousel-item>
            </el-carousel>
          </div>
          <!-- 右边的两张图片 -->
          <div class="middle-img">
            <a href>
              <img src="../../public/img/icons/tu1.jpg" alt />
            </a>
            <a href>
              <img src="../../public/img/icons/tu2.jpg" alt />
            </a>
          </div>
          <!--  好书推荐-->
          <book></book>
        </el-main>
      </el-container>
    </el-container>
    <!-- 结束 -->

    <!-- 书籍的模块 -->
    <el-container>
      <el-main>
        <!-- 孔夫子新书广场 -->
        <div class="freshbook">
          <p>孔夫子新书广场</p>
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
                      签名
                      <div class="jiao">
                        <div class="jiao-inner"></div>
                      </div>
                    </span>
                    <span>
                      铃印
                      <div class="jiao">
                        <div class="jiao-inner"></div>
                      </div>
                    </span>
                    <span>
                      题词
                      <div class="jiao">
                        <div class="jiao-inner"></div>
                      </div>
                    </span>
                    <span>
                      毛边本
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

        <!-- 三张图片 -->
        <div class="middle-img middle body-color" style="padding-bottom: 40px;">
          <a href>
            <img src="../../public/img/icons/middle-one.jpg" alt />
          </a>
          <a href>
            <img src="../../public/img/icons/middle-two.jpg" alt />
          </a>
          <a href>
            <img src="../../public/img/icons/middle-three.jpg" alt />
          </a>
        </div>
        <!-- List为一个公共组件 list.vue   作为下面的三个模块 -->
        <List></List>
      </el-main>
    </el-container>

    <!-- 页脚 -->
    <el-container>
      <foter></foter>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dis: "display:none",
      cls: "binhert",
      list1: [],
      list2: [],
      list3: [],
      imges: [
        { src: require("../../public/img/icons/one.jpg") },
        { src: require("../../public/img/icons/two.jpg") },
        { src: require("../../public/img/icons/three.jpg") }
      ],
      book1: ["1", "2", "3"]
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    change(data) {
      this.dis = "display:block";
      this.cls = "mouse";
    },
    leave() {
      this.dis = "display:none";
      this.cls = "binhert";
    },
    axiosGet: function() {
      this.axios
        .get("/class/getallclass")
        .then(response => {
          var arr1 = response.data.slice(0, 24);
          var arr2 = response.data.slice(24, 36);
          var arr3 = response.data.slice(36, 44);

          this.list1 = this.transformArr(arr1);
          this.list2 = this.transformArr(arr2);
          this.list3 = this.transformArr(arr3);
        })
        .catch(error => {
          console.log(error);
        });
    },
    transformArr: function(arr) {
      // var a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
      var b = new Array(Math.ceil(arr.length / 2));
      for (var i = 0; i < b.length; i++) {
        b[i] = new Array();
      }
      for (var j = 0; j < arr.length; j++) {
        b[parseInt(j / 2)][j % 2] = arr[j];
      }
      // console.log(b);
      return b;
    }
  },
  created: function() {
    this.axiosGet();
    // console.log(localStorage)
  }
  // beforemout: function() {
  //   this.axiosGet();
  // }
};
</script>

<style>
a {
  text-decoration: none;
  color: black;
}
li {
  list-style: none;
}
body {
  /* background-color: #f7f7f6; */
}
@media only screen and (min-width: 1200px) {
  .index {
    width: 1200px;
  }
}
@media only screen and (max-width: 1199px) {
  .index {
    width: 1000px;
  }
}
.index {
  margin: 0 auto;
}
/* // 首页，新书，资讯的导航样式,主要的布局样式 */
.el-header {
  padding: 0;
  margin-bottom: 10px;
}
.el-aside {
  border: 0;
}
.tem {
  height: 120px;
}
/* .first {
  margin-left: 30px;
  margin-right: 30px;
} */
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  height: 60px;
}
.el-menu.el-menu--horizontal {
  border-bottom: 0;
}
aside.el-aside {
  overflow: visible;
  color: #333;
  text-align: center;
}

.lunbo .el-main {
  color: #333;
  text-align: center;
  padding: 0;
}

.el-container > .el-main {
  padding-left: 0px;
  padding-right: 0px;
}
body > .el-container {
  margin-bottom: 40px;
}
.el-header .el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: 2px solid #b5aa9a;
  color: #303133;
}
.el-menu--horizontal > .el-menu-item {
  font-size: 18px;
}
.first .el-header {
  padding: 0;
}

/* //侧边栏样式 */
#left-aside {
  border: 0;
}
.list {
  position: relative;
}
.list ul,
.list li {
  padding: 0;
  margin: 0;
}
.list li {
  height: 36px;
}
.list-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  border: 1px solid #8c222c;
  font-size: 16px;
  color: #fff;
  background-color: #8c222c;
}
.list-title > .left {
  height: 34px;
  line-height: 34px;
  font-weight: 700;
  color: #fff;
  font-size: 15px;
  cursor: default;
}
.right {
  height: 26px;
  line-height: 34px;
  font-size: 12px;
}
.right a {
  color: #d6d6d6;
}
.right a:hover {
  color: #fff;
}
.aside-ul {
  border: 1px solid #ddd;
}
.binhert {
  display: flex;
  padding: 0 15px;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  overflow: hidden;
  border-bottom: 1px solid #ddd;
}
.list li {
  padding: 0 10px;
}
.mouse {
  display: flex;
  padding: 0 15px;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  overflow: hidden;
  /* border: 1px solid #59070f; */
  border-bottom: 1px solid #ddd;
}
.aside-ul-sym {
  color: #ddd;
}
.aside-ul-name > a:hover {
  color: #59070f;
}
.aside-ul {
  border-top: 0px;
}
.aside-ul > li:last-child {
  border-bottom: 0px;
}
/* //侧边栏的二级菜单 */
.left-tab {
  box-sizing: border-box;
  position: absolute;
  width: 800px;
  left: 180px;
  height: 100%;
  top: 0;
  z-index: 100;
  margin-bottom: 15px;
  padding-top: 36px;
  display: flex;
  text-align: left;
  padding-left: 15px;
  flex-direction: column;
  background-color: #fff;
  border: 2px solid #8c222c;
  border-left: 0;
}
.left-tab ul {
  display: flex;
  margin-top: 15px;
  padding-left: 8px;
}
.left-tab ul > li {
  line-height: 16px;
  height: 16px;
  font-size: 14px;
  padding-right: 5px;
  padding-left: 5px;
  border-right: 1px solid #ccc;
}
.left-tab ul > li:last-child {
  border: 0;
}
.left-tab ul > li > a:hover {
  color: #8c222c;
}
.left-tit-div {
  font-weight: 700;
  color: #333;
}
.left-tit-div:hover {
  color: #8c222c;
}
.left-tit {
  display: flex;
  flex-direction: column;
}
.left-tit-div > span {
  font-size: 12px;
  margin-right: 6px;
}
.left-content > ul {
  display: flex;
}
/* // 轮播样式 */
.el-carousel__item img {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  margin: 0;
  width: 1070px;
  height: 270px;
}
.lunbo {
  margin-left: 8px;
}
/* //轮播下面两张图片 */
.middle-img {
  height: 50px;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.middle-img > a {
  display: block;
  height: 50px;
  width: 510px;
  display: flex;
}
.middle-img > a > img {
  height: 50px;
  width: 510px;
}
.freshbook > p {
  text-align: left;
  margin-left: 10px;
  font-size: 18px;
  color: #333;
  font-weight: 700;
}
.line {
  width: 100%;
  height: 1px;
  background-color: #ccc;
}
.freshbook a {
  font-size: 12px;
  color: #0057a0;
}
.freshbook a:hover {
  color: #bf7f5f;
}
.db-list {
  height: 550px;
  display: flex;
  padding: 0;
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
  width: 350px;
  height: 410px;
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
  width: 350px;
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
  height: 480px;
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
  height: 22px;
  border: 1px solid #dfc49b;
  padding: 5px 6px;
  color: #c28f42;
  margin-right: 9px;
  margin-bottom: 12px;
}
</style>