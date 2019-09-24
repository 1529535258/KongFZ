<template>
  <div class="mybody">
    <div class="infobox">
      <div class="left">
        <div class="mbody">
          <div class="line"></div>
          <div class="mheader">
            <h1>{{text.filmname}}</h1>
            <p class="timeread">
              <span>{{text.showtime}} &nbsp;&nbsp;&nbsp;</span>
              <span>阅览:{{text.readnum}}</span>
            </p>
            <p>编辑：资讯编辑&nbsp;&nbsp;&nbsp;&nbsp;来源：澎湃新闻</p>
          </div>

          <div class="mcontent">
            <img :class="text.coverimgs?'mmimg':''" :src="text.coverimgs" alt style />
            {{text.synopsis}}
          </div>
        </div>
      </div>
      <div class="right">
        <div class="rbox">
          <div class="r-top">
            <b>{{mnav}}</b>
            <a href>更多</a>
          </div>
          <ul class="rcontent">
            <li v-for="(value,index) in rbox" :key="index">
              <a :href="'/details?bid='+value.bid+'&nav='+mnav">{{value.filmname}}</a>
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
    mbid: String,
    mnav: String
  },
  data: function() {
    return {
      bbid: "",
      text: [],
      rbox: []
    };
  },
  created: function() {
    let urls = "";
    let urlss = "";
    switch (this.mnav) {
      case "书界新闻":
        urls = "/note/getinfo";
        urlss = "/note/getcate";
        break;
      case "市场动态":
        urls = "/note/getwinfo";
        urlss = "/note/market";
        break;
      case "夫子书话":
        urls = "/note/getwinfo";
        urlss = "/note/market";
        break;
      case "收藏学堂":
        urls = "/note/getwinfo";
        urlss = "/note/market";
        break;
      case "夫子访谈":
        urls = "/note/getwinfo";
        urlss = "/note/market";
        break;
    }
    var that = this;
    function getUserAccount() {
      return that.axios.get(`${urls}?bid=${that.mbid}`);
    }

    function getUserPermissions() {
      return that.axios.get(`${urlss}`);
    }

    this.axios.all([getUserAccount(), getUserPermissions()]).then(
      that.axios.spread((acct, perms) => {
        // 两个请求现在都执行完成
        // console.log(perms);
        that.rbox = perms.data[1];
        acct.data[0].showtime = acct.data[0].showtime.substring(0, 10);
        that.text = acct.data[0];
      })
    );
  }
};
</script>
<style scoped>
.infobox {
  width: 980px;
  margin: 10px auto;
  display: flex;
  justify-content: space-between;
}
.mbody {
  width: 640px;
  padding: 0px;
  border: 1px solid rgb(187, 186, 186);
  margin-top: 20px;
}
.mbody > .line {
  width: 100%;
  height: 0px;
  border-bottom: 3px solid rgb(172, 170, 170);
}
.mbody > .mheader {
  height: 80px;
  width: 640px;
  border-bottom: 1px solid rgb(224, 224, 224);
  margin: 0 auto;
  text-align: center;
  margin-top: 20px;
}
.mbody > .mheader > h1 {
  text-align: center;
  font-size: 20px;
  margin-bottom: 10px;
}
.mbody > .mheader > p {
  text-align: center;
  font-size: 12px;
  color: #7e7e7e;
}
.mbody > .mheader > p > span {
  color: red;
}
.mmimg {
  width: 500px;
  height: 300px;
  margin: 0 auto;
  display: block;
}
.mbody > .mcontent {
  line-height: 30px;
  font-size: 14px;
  word-break: normal;
  font-family: Arial, Helvetica, sans-serif;
  width: 600px;
  padding: 20px;
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
  background-color: #ccc;
}
.r-top > a {
  float: right;
  margin-right: 20px;
  color: #000;
  text-decoration: none;
}
.r-top > a:hover {
  color: rgb(129, 121, 110);
}
.r-top > a:visited {
  color: #000;
}
.footer {
  position: absolute;
  bottom: 10px;
  left: 30px;
}
.timeread > span {
  margin: 0 20px;
}
</style>