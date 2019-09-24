<template>
  <div class="shop">
    <div class="allcheck" >
      <el-checkbox
        :indeterminate="isIndeterminate"
        v-model="checkAll"
        @change="handleCheckAllChange"
      >全选</el-checkbox>
      <div>商品</div>
      <div>品相</div>
      <div>单价</div>
      <div>数量</div>
      <div>金额</div>
      <div>操作</div>
    </div>
    <!-- 下划线 -->
    <div class="line"></div>
    <!-- 全部购物车订单 -->
    <div class="content">
      <el-checkbox-group v-model="checkedshop" @change="handleCheckedshopChange">
        <el-checkbox v-for="item in shops" :label="item.id" :key="item.id" class="all">
          <div class="xinxi">
            <img v-bind:src="item.src" alt="书籍图片" />
            <div class="name">
              <a href>{{item.name}}</a>
            </div>
          </div>
          <span class="all-2">品相</span>
          <span class="all-3">{{item.price}}</span>
        </el-checkbox>
      </el-checkbox-group>
      <div class="changeNum">
        <ul>
          <li v-for="item in shops" :key="item.id">
            <div class="all-4" >
              <div class="all-4-num">
                <div class="subl" @click="delCount(item.id)">-</div>
                <input class="subm" :value="item.count" disabled>
                <div class="subf" @click="addCount(item.id)">+</div>
              </div>
            </div>
            <input class="all-5" :value="(item.count*item.price).toFixed(2)" disabled>
            <div class="all-6" @click="delectGoods(item.id)">删除</div>
          </li>
        </ul>
      </div>
    </div>
    <div class="bill">
      <div class="left">
        <el-checkbox
          :indeterminate="isIndeterminate"
          v-model="checkAll"
          @change="handleCheckAllChange"
          id="bill"
        >全选</el-checkbox>
        <div class="all-6" @click="delectGoodsAll(checkedshop)">批量删除</div>
      </div>
      <div class="right">
        <span>已选&nbsp;&nbsp;{{AllCount}}&nbsp;&nbsp;件商品</span>
        <span>合计(不含运费):</span>
        <span class="bookprice">￥{{AllPrice}}</span>
        <div class="submit-bill">去结算</div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
const Options = [];
export default {
  data() {
    return {
      flagshop:false,
      checkAll: false,
      checkedshop: [],
      isIndeterminate: true
    };
  },
  computed: {
    ...mapGetters(["shop_list", "getAllCount", "getAllPrice", "getPrice"]),
    shops: function() {
      return this.$store.state.added;
    },
    AllCount:function(){
       return this.$store.getters.getAllCount;
    },
    AllPrice:function(){
       return this.$store.getters.getAllPrice;
    }
  },
  methods: {
    ...mapMutations(["delectGoodsAll", "delectGoods","addCount","delCount"]),
    handleCheckAllChange(val) {
      this.checkAll = !!this.checkAll;
      let checked = this.$store.state.shop_list.map(function(item) {
        return item.id;
      });
      this.checkedshop = this.checkAll ? checked : [];
      this.isIndeterminate = false;
      console.log("1：" + this.checkedshop);
    },
    handleCheckedshopChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.shops.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.shops.length;
      console.log("2:" + this.checkedshop);
    },

  }
};
</script>
<style>
.subl,
.subf {
  width: 22px;
  height: 22px;
  cursor: pointer;
  background-color: #e5e5e5;
}
.subm {
  width: 40px;
  height: 22px;
  border: 0px;
  text-align: center;
  background-color: #fff;
}
.all-4 {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.all-4-num {
  border: 1px solid #e5e5e5;
  justify-content: center;
  align-items: center;
  display: flex;
  height: 100%;
}
.shop {
  margin: 20px 70px;
}
.line {
  height: 1px;
  width: 100%;
  background-color: #999;
  margin: 10px 0px;
}
.allcheck {
  color: #666;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
}
/* 订单 */
.all-5{
  background-color: #fff;
  border:0px;
}
.el-checkbox img {
  width: 82px;
  height: 82px;
}
.el-checkbox {
  display: block;
  display: flex;
}
.el-checkbox__input {
  margin: auto;
}
.el-checkbox__label {
  width: 100%;
  display: block;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.all {
  margin: 20px 0;
  border-bottom: 1px solid #e5e5e5;
}
.is-checked {
  color: rgb(64, 140, 255);
  background: #f8f7f3;
}

.allcheck > div:nth-child(2),
.xinxi {
  width: 400px;
  text-align: center;
}
.allcheck > div:nth-child(3),
.all-2 {
  width: 87px;
  text-align: center;
}
.allcheck > div:nth-child(4),
.all-3 {
  width: 75px;
  text-align: center;
}
.allcheck > div:nth-child(5),
.all-4 {
  width: 148px;
  text-align: center;
}
.allcheck > div:nth-child(6),
.all-5 {
  width: 73px;
  text-align: center;
}
.allcheck > div:nth-child(7),
.all-6 {
  width: 119px;
  text-align: right;
}
.all-6:hover {
  color: rgb(252, 89, 89);
  cursor: pointer;
}
.xinxi {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 70px;
}
.name {
  width: 300px;
  margin-left: 10px;
  display: flex;
  align-items: center;
  height: 100px;
}
.name > a {
  white-space: pre-wrap;
}
/* 账单 */
.bill,
.right,
.left {
  background: #e6e4e0;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.right {
  width: 400px;
}
#bill {
  background: #e6e4e0;
}
.submit-bill {
  font-size: 20px;
  width: 100px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  cursor: pointer;
  background-color: #7b111b;
  color: #fff;
}
.bookprice {
  font-weight: 700;
  color: #8c222c;
  font-size: 26px;
}
.el-checkbox-group {
  width: 740px;
  float: left;
}
.changeNum {
  width: 425px;
  float: right;
}
.changeNum > ul {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.changeNum > ul > li {
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
  margin-bottom: 40px;
}

.content::after {
  content: "";
  display: block;
  clear: both;
}
</style>