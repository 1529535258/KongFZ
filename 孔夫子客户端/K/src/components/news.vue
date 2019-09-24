<template>
  <div class="mbody">
    <div class="picture">
      <img src="../assets/tu1.png" alt="国际学者汇聚天一阁，探讨汉字活字的古今东西" />
      <a :href="'/details?bid='+1+'&nav='+'书界新闻'">国际学者汇聚天一阁，探讨汉字活字的古今东西</a>
    </div>
    <div class="dynamic">
      <div class="left">
        <div class="on">
          <a :href="'/details?bid='+1+'&nav='+'书界新闻'">
            <img src="../assets/tu2.png" alt="动态" /> 首家考古专题类博物馆西安开工
          </a>
          <span>
            边看文物边考古。[
            <a class="xx" :href="'/details?bid='+1+'&nav='+'书界新闻'">详细</a>]
          </span>
          <p>
            <a class="stitle" :href="'/details?bid='+1+'&nav='+'书界新闻'">文物修复师马宇：怀敬畏之心 让秦俑重现千年风采</a>&nbsp;|
            <a class="stitle" :href="'/details?bid='+1+'&nav='+'书界新闻'">灵璧石何以号称四大名石之首</a>
          </p>
          <p>
            <a class="stitle" :href="'/details?bid='+1+'&nav='+'书界新闻'">伯远帖五牛图等六百国宝今展出</a>&nbsp;|
            <a class="stitle" :href="'/details?bid='+1+'&nav='+'书界新闻'">徐悲鸿纪念馆新馆开放 齐白石前来“道贺”</a>
          </p>
        </div>
        <div class="on">
          <a :href="'/details?bid='+1+'&nav='+'书界新闻'">首家考古专题类博物馆西安开工</a>
          <span>
            边看文物边考古。[
            <a class="xx" :href="'/details?bid='+1+'&nav='+'书界新闻'">详细</a>]
          </span>
          <p>
            <a class="stitle" :href="'/details?bid='+1+'&nav='+'书界新闻'">文物修复师马宇：怀敬畏之心 让秦俑重现千年风采</a>&nbsp;|
            <a class="stitle" :href="'/details?bid='+1+'&nav='+'书界新闻'">灵璧石何以号称四大名石之首</a>
          </p>
          <p>
            <a class="stitle" :href="'/details?bid='+1+'&nav='+'书界新闻'">伯远帖五牛图等六百国宝今展出</a>&nbsp;|
            <a class="stitle" :href="'/details?bid='+1+'&nav='+'书界新闻'">徐悲鸿纪念馆新馆开放 齐白石前来“道贺”</a>
          </p>
        </div>
      </div>

      <div class="right">
        <p>
          市场热点
          <a href>更多>></a>
        </p>
        <ul>
          <li v-for="(tvalue,index) in bookNews" :key="index">
            <a :href="'/details?bid='+tvalue.bid+'&nav='+'书界新闻'">{{tvalue.filmname}}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="booknews">
      <div class="titleone">
        <span>书界新闻</span>
        <a href>更多>></a>
      </div>
      <ul>
        <li v-for="(tvalue,index) in bookNews" :key="index">
          <a :href="'/details?bid='+tvalue.bid+'&nav='+'书界新闻'">{{tvalue.filmname}}</a>
          <div class="info-mag">
            <img :src="tvalue.coverimgs" alt="作者图片" />
            <div class="mytext">
              <span>{{tvalue.synopsis}}</span>
              <span>
                [
                <a class="xx" :href="'/details?bid='+tvalue.bid+'&nav='+'书界新闻'">详细</a>]
              </span>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="booknews">
      <div class="titleone">
        <span>夫子书话</span>
        <a :href="'/details?bid='+Master.bid">更多>></a>
      </div>
      <ul>
        <li v-for="(tvalue,index) in Master" :key="index">
          <a :href="'/details?bid='+tvalue.bid+'&nav='+'夫子书话'">{{tvalue.filmname}}</a>
          <div class="info-mag">
            <img :src="tvalue.coverimgs" alt="作者图片" />
            <div class="mytext">
              <span>{{tvalue.synopsis}}</span>
              <span>
                [
                <a class="xx" :href="'/details?bid='+tvalue.bid+'&nav='+'夫子书话'">详细</a>]
              </span>
            </div>
          </div>
        </li>
      </ul>
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
  data: function() {
    return {
      hots: ["xxxxxx", "xxxxxxx", "xxxxxxx", "xxxxxxx", "xxxxxxx"],
      bookNews: [
        {
          bid: 1,
          title: "范用：最后的书时光",
          mimg: require("../assets/fan.png"),
          mtext:
            "记得是2005年底，范用先生交给我一页'范用编著书目'，嘱我印在即将出版的《叶雨书衣》的后勒口上。他还分别标注了排印时的字体和字号。书目所列共十二种，其中《我爱穆源》《泥土 脚印》《泥土 脚印（续编）》等三种署名“范用著”，《战斗在白区》《漫画范用》《郑超麟回忆录》《买书琐记》《文人饮食谭》《爱看书的广告》《存牍辑览》等七种署名“范用编”，《莎士比亚画册》署名“范用、葛一虹编”，《叶雨书衣》署名“范用作”。其实还有一本《晚翠文谈新编》，不知为何未列，后来又出版了“范用编”《凭画识人——人物漫画集》《买书琐记（续编）》等两种，总计范用编著图书十五种。"
        },
        {
          bid: 2,
          title: "嘉靖本的鉴定",
          mimg: require("../assets/shu.png"),
          mtext:
            "古籍是文物，文物离不开收藏，收藏首先要鉴别真伪与价值，于是就有了版本鉴定。版本鉴定，即确定一书在何时何地由何人制作而成，其制作过程如何。具体到古籍刻本，版本鉴定包括确定刻书者、刻书时间和刻书地点，确定印刷者、印刷时间和印刷地点（即前印、后印情况），弄清楚刻书和印书的全过程。"
        }
      ],
      Master: [
        {
          bid: 3,
          title: "快乐的蟹会",
          mimg: require("../assets/xuieh.png"),
          mtext:
            "蟹会是一种聚餐会的另类形式，随意、不拘、亲和、欢洽，菜肴稀少，以蟹为主。食物的品种琳琳琅琅，难计其数，可是独独以蟹相招而聚集共食，并且给人以无限快乐，说明了蟹的特别魅力和中国人对它的格外赏识。追溯起来，实际上，蟹会早在唐宋间就有了，比如据宋杨亿《谈苑》里说，南唐建州将领陈德诚宴客，“食蟹”，席间布衣诗人朱贞白“咏蟹”，咏蟹通俗俏皮，“众客皆笑绝”；比如据宋韩琦"
        },
        {
          bid: 4,
          title: "昌邑年号：王国纪年的衰落与汉廷纪年的兴起",
          mimg: require("../assets/wan.png"),
          mtext:
            "我国汉代兴起的年号纪年方式，以历史悠久、内涵丰富、使用连贯、记录准确、形式独特而闻名于世。这是中华民族的祖先为我们留下的一份丰厚文化遗产。在海昏侯墓的发掘过程中，人们在漆器、金器、青铜器以及竹简、木牍上，发现了许多带有古代年号的文字。弄清这些年号的含义及其相互之间的关系，进而理解中华文明中年号纪年的丰富内涵，对于深入研究海昏侯刘贺的生平以及所处的时代，研究中国古代历史的诸多细节，具有重要意义。"
        }
      ]
    };
  },
  created: function() {
    var that = this;
    function getUserAccount() {
      return that.axios.get("/note/getcate");
    }

    function getUserPermissions() {
      return that.axios.get("/note/market");
    }

    this.axios.all([getUserAccount(), getUserPermissions()]).then(
      that.axios.spread((acct, perms) => {
        // 两个请求现在都执行完成
        this.bookNews = acct.data[1];
        this.Master = perms.data[1];
      })
    );
  }
};
</script>

<style scoped lang="scss">
.mbody {
  width: 950px;
  margin: 0 auto;
}
a {
  color: #253385;
  cursor: pointer;
  text-decoration: none;
}
li {
  list-style: none;
}
a:hover {
  text-decoration: underline;
  color: #ba2636;
}
.picture {
  border: 1px solid #eee;
  margin: 0 auto;
  height: 256px;
  font-size: 18px;
  text-align: center;
}
.picture > img {
  width: 600px;
  height: 200px;
  margin-left: 18px;
  margin-top: 21px;
}
.picture > a {
  display: block;
  color: #253385;
  cursor: pointer;
}
.picture > a:hover {
  text-decoration: underline;
  color: #ba2636;
}
.dynamic {
  height: 250px;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}
.dynamic > .left {
  width: 60%;
  height: 250px;
}
.dynamic > .left > .on {
  width: 100%;
  height: 120px;
  border-top: 1px dashed #000;
}
.left > .on > a {
  display: block;
  height: 30px;
  line-height: 22px;
  font-size: 16px;
}
.left > .on > a > img {
  width: 50px;
  height: 22px;
  vertical-align: biddle;
}
.left > .on > span {
  font-size: 14px;
  line-height: 22px;
  font-family: 宋体;
}
.xx {
  color: #ba2636;
  text-decoration: none;
}
.xx:hover {
  text-decoration: underline;
}
.left > .on > p {
  width: 450px;
  white-space: nowrap;
}

.left > .on {
  font-size: 12px;
  line-height: 18px;
  font-family: 宋体;
}

.stitle {
  display: inline-block;
  width: 200px;
  height: 15px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 12px;
}
.dynamic > .right {
  width: 30%;
  height: 250px;
}
.dynamic > .right > p {
  font-size: 16px;
  line-height: 32px;
  font-family: 宋体;
}
.dynamic > .right > p > a {
  font-size: 14px;
  line-height: 32px;
  font-family: 宋体;
  float: right;
  margin-right: 20px;
}
.dynamic > .right > ul > li {
  width: 250px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin: 5px;
}
.dynamic > .right > ul > li > a {
  font-size: 14px;
  color: #ba2636;
}

.booknews {
  margin-top: 10px;
  margin-bottom: 30px;
  width: 100%;
  padding: 0;
}
.titleone {
  height: 40px;
  width: 100%;
  font-size: 16px;
  line-height: 39px;
  font-family: 宋体;
  border-top: 1px solid rgb(187, 187, 187);
  border-bottom: 1px solid rgb(187, 187, 187);
}
.titleone > a {
  font-size: 14px;
  float: right;
  margin-right: 20px;
}
.dynamic > .booknews > .titleone::after {
  display: block;
  content: "";
  clear: both;
}
.booknews > ul > li {
  margin-top: 10px;
  border-top: 1px solid rgb(187, 187, 187);
}
.booknews > ul > li > a {
  font-size: 16px;
  line-height: 20px;
  font-family: 宋体;
  font-weight: bold;
}

.booknews > ul > li > .info-mag {
  height: 110px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
}
.booknews > ul > li:first-child {
  border: 0 solid;
}
.booknews > ul > li > .info-mag > img {
  width: 130px;
  height: 100px;
  margin-right: 20px;
}
.booknews > ul > li > .info-mag > .mytext {
  width: 800px;
  height: 100px;
}
.booknews > ul > li > .info-mag > .mytext > span {
  align-self: flex-start;
  font-size: 14px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
}
</style>
