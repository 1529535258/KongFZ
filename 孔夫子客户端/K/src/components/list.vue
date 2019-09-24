<template>
  <div class="mybody">
    <div class="infobox">
      <div class="left">
        <div class="top">
          <b>{{ztitle}}</b>
        </div>
        <ul class="lcontent">
          <li v-for="(l,index) in leftList" :key="index">
            <a class="fa" :href="'/details?bid='+l.bid+'&nav='+ztitle">{{l.filmname}}</a>
            <span class="readnum" style="margin:0 10px">(阅读：{{l.readnum}})</span>
            <span class="date">{{l.showtime}}</span>
          </li>
        </ul>
        <el-pagination background layout="prev, pager, next" :total="1000" class="footer"></el-pagination>
      </div>
      <div class="right">
        <div class="rbox" v-for="(value,index) in rbox" :key="index">
          <div class="r-top">
            <b>{{ztitle}}</b>
            <a href>更多</a>
          </div>
          <ul class="rcontent">
            <li v-for="(l,index) in leftList" :key="index">
              <a :href="'/details?bid='+l.bid+'&nav='+ztitle">{{l.filmname}}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <myfooter></myfooter>
  </div>
</template>
<script>
import myfooter from "./myfooter.vue";
export default {
  components: {
    myfooter
  },
  props: {
    // bid: Number,
    ztitle: String
  },
  data: function() {
    return {
      nav: "",
      leftList: [
        {
          kbid: 1,
          title: "文物修复师马宇：怀敬畏之心 让秦俑重现千年风采",
          read: 100,
          time: new Date().toLocaleDateString()
        },
        {
          kbid: 2,
          title: "文物修复师马宇：怀敬畏之心 让秦俑重现千年风采",
          read: 100,
          time: new Date().toLocaleDateString()
        },
        {
          kbid: 3,
          title: "文物修复师马宇：怀敬畏之心 让秦俑重现千年风采",
          read: 100,
          time: new Date().toLocaleDateString()
        }
      ],
      rbox: [
        ["xxxxxx", "xxxxxxx", "xxxxxxx", "xxxxxxx", "xxxxxxx"],
        ["ccccccc", "ccccccc", "ccccccc", "ccccccc", "v"]
      ]
    };
  },
  created: function() {
    let urls = "";
    switch (this.ztitle) {
      case "书界新闻":
        urls = "/note/getcate";
        break;
      case "市场动态":
        urls = "/note/market";
        break;
      case "夫子书话":
        urls = "/note/market";
        break;
      case "收藏学堂":
        urls = "/note/market";
        break;
      case "夫子访谈":
        urls = "/note/market";
        break;
    }
    this.axios
      .get(urls, {
        params: {}
      })
      .then(response => {
        response.data[1].forEach(element => {
          element.showtime = element.showtime.substring(0, 10);
        });
        this.leftList = response.data[1];
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>
<style scoped>
.infobox {
  width: 980px;
  height: 600px;
  margin: 10px auto;
  display: flex;
  justify-content: space-between;
}
.left {
  width: 640px;
  height: 600px;
  position: relative;
  border: 1px solid #d3dbe6;
}
.left > .top {
  background-color: rgb(243, 248, 255);
  text-align: left;
  line-height: 30px;
  padding-left: 15px;
  font-size: 15px;
}
.left > .lcontent {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  padding-left: 20px;
}
.lcontent > li {
  width: 100%;
  text-align: left;
  line-height: 30px;
  font-size: 14px;
}
.lcontent > li a {
  cursor: pointer;
  color: #000;
  text-decoration: none;
}
.lcontent > li a:visited {
  color: #000;
}
.lcontent > li a:hover {
  color: rgb(109, 102, 93);
  text-decoration: underline;
}
.lcontent .date {
  float: right;
  margin-right: 30px;
}

.right {
  width: 300px;
  height: 600px;
}
.right > .rbox {
  border: 1px solid rgb(226, 204, 204);
  /* border-bottom: 15px; */
  margin-bottom: 15px;
  background-color: rgb(243, 240, 240);
}
.right > .rbox > ul {
  list-style: none;
  padding-left: 20px;
  text-align: left;
  margin: 0;
}
.rbox li {
  line-height: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.rbox li > a {
  text-decoration: none;
  color: #000;
}
.rbox li > a:visited {
  color: #000;
}
.rbox li > a:hover {
  color: rgb(158, 126, 126);
  text-decoration: underline;
}
.right .r-top {
  text-align: left;
  padding-left: 12px;
  line-height: 30px;
  font-size: 14px;
  border-bottom: 1px solid rgb(243, 226, 226);
  background: linear-gradient(#fcfcfc, #eaeaea);
}
.r-top > a {
  float: right;
  margin-right: 20px;
  color: #000;
  text-decoration: none;
}
.r-top > a:hover {
  color: rgb(129, 121, 110);
  text-decoration: underline;
}
.r-top > a:visited {
  color: #000;
}
.footer {
  position: absolute;
  bottom: 10px;
  left: 30px;
}
</style>