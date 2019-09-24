import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // 添加到购物车的商品列表
        added: [{
                id: 1,
                src: "https://www.kfzimg.com/sw/kfzimg/303/3a5332fe7705876d_s.jpg",
                name: "坏血：“女版乔布斯”如何利用欲望和贪婪打造出硅谷商业神话",
                price: 20.1,
                count: 1
            },
            {
                id: 2,
                src: "https://www.kfzimg.com/sw/kfzimg/303/3a5332fe7705876d_s.jpg",
                name: "坏血：“女版乔布斯”如何利用欲望和贪婪打造出硅谷商业神话",
                price: 18,
                count: 1
            }
        ]
    },
    mutations: { //this.store.commit('function',xx)
        addTocart(state, goodsinfo) {
            var flag = false; //假设没有新加入的商品
            // 重复的商品，就只是做count++；
            state.added.some(item => {
                    if (item.id == goodsinfo.id) {
                        item.count++;
                        flag = true;
                        return true;
                    }
                })
                // 没有新加入的商品
            if (!flag) {
                Vue.set(goodsinfo, 'count', 1);
                state.added.push(goodsinfo);
            }

        },
        // 删除 单个
        delectGoods(state, id) {
            console.log(id);
            state.added.some((item, index) => {
                if (item.id == id) {
                    state.added.splice(index, 1);
                }
            })
        },
        // 批量商品删除 
        delectGoodsAll(state, arrid) {

            // console.log(arrid.$data.checkedshop.toString().split(''))

            for (var i = 0; i < arrid.length; i++) {
                state.added.some((item, index) => {
                    if (arrid[i] == item.id) {
                        state.added.splice(index, 1);
                    }

                })
            }
        },
        // count 数量的增加
        addCount(state, id) {

            state.added.forEach(item => {
                if (id == item.id) { item.count++; }

            })

            console.log(state.added)
        },
        // count 点击数量减少
        delCount(state, id) {
            state.added.forEach(item => {
                if (id == item.id) {
                    if (item.count <= 0) { item.count = 0; } else { item.count--; }
                }

            })

        }
    },
    actions: {

    },
    getters: { //this.$store.getters.xx
        shop_list: state => state.shop_list,
        // 返回总商品数量
        getAllCount(state) {
            var sum = 0;
            state.added.forEach(item => {
                sum += item.count;
            })
            return sum;
        },
        // 返回总购物车的价格
        getAllPrice(state) {
            var allprice = 0;
            state.added.forEach(item => {
                allprice += (item.price * item.count);
            })
            return allprice.toFixed(2);
        },
        // 传入这个商品的id，返回单个商品的总的金额：数量*单价
        getPrice(state, id) {
            var price = 0;
            state.added.forEach(item => {
                if (id == item.id) { price += (item.price * item.count); }

            })
            return price;
        }

    }
})