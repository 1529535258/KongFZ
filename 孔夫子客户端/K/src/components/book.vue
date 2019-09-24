<template>
  <div class="goodbook">
    <p>
      好书推荐
      <span>/</span>
      <span>
        <a href>更多</a>
      </span>
    </p>
    <ul class="db-list">
      <li v-for="(item,index) in tableData" :key="index">
        <router-link :to="'Item?bid='+item.bid">
          <div class="db-list-li">
            <img v-bind:src="item.imgs" alt />
            <p>{{item.bookname}}</p>
            <p class="name">{{item.author}}</p>
          </div>
          <p class="price">
            ￥价格{{item.price}}
            <span class="per">起</span>
          </p>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: ""
    };
  },
  methods: {
    getAllGoods() {
      this.axios
        .get("/goods/getallgoods")
        .then(response => {
          response.data = response.data.slice(0,12);
          this.tableData = response.data;
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
<style >
.goodbook > p {
  text-align: left;
  margin-left: 25px;
  margin-top: 22px;
  padding-bottom: 15px;
  font-size: 18px;
  color: #333;
  border-bottom: 1px solid #ccc;
  font-weight: 700;
}
.goodbook a {
  font-size: 12px;
  color: #0057a0;
}
.goodbook a:hover {
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
</style>