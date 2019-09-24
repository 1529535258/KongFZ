import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import store from './store'
import axios from "axios"
import './registerServiceWorker'
import List from '@/components/listbook.vue'
import Nav from '@/components/nav.vue'
import book from '@/components/book.vue'
import foter from '@/components/footer.vue'

// 启动 element 组件
Vue.use(ElementUI);
Vue.config.productionTip = false

// 定义全局 axios 的公用服务端口
axios.defaults.baseURL = "http://ZhangJQ:98";
// 向原型上追加通用方法
Vue.prototype.axios = axios;

// 全局组件

//全局组件-资讯
Vue.component("news",()=>import("./components/news.vue"));
Vue.component("list",()=>import("./components/list.vue"));
Vue.component("breath",()=>import("./components/breath.vue"));
Vue.component("mmassage",()=>import("./components/mmassage.vue"));

Vue.component("Nav-Menu", () => import("./components/NavMenu.vue"));
Vue.component("login-Nav-Menu", () => import("./components/LoginNavMenu.vue"));
Vue.component("Header-Search", () => import("./components/HeaderSearch.vue"));
Vue.component("Back-Top", () => import("./components/BackTop.vue"));

Vue.component("mlog",()=>import("./components/mlogin.vue"));
Vue.component("mregister",()=>import("./components/mregister.vue"));

Vue.component("List", List);
Vue.component("Nav", Nav);
Vue.component("book", book);
Vue.component("foter", foter);
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')