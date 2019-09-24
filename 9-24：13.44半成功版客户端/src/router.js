import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index.vue'
import newbook from './views/newbook.vue'
import loginRegister from './views/loginRegister.vue'
import aregister from './views/aregister.vue'

//资讯路由
import Home from './views/Home.vue'
import details from './views/details.vue'


Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/Index',
            component: Index
        },
        {
            path: '/',
            component: Index
        },
        {
            path: '/newbook',
            component: newbook
        },
        {
            path: '/loginRegister',
            component: loginRegister
        },
        {
            path: '/aregister',
            component: aregister
        },
        {
            path: '/search',
            component: () =>
                import ("./views/Search.vue")
        },
        {
            path: '/item',
            component: () =>
                import ("./views/Item.vue")
        },
        {
            path: '/details',
            component: details
        },
        {
            path: '/home',
            component: Home
        },
        { //购物车路由
            path: '/shop',
            name: 'shop',
            component: () =>
                import ("./views/shop.vue")
        },
    ]
})