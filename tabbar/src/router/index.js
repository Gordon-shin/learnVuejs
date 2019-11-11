import Vue from 'vue'
import VueRouter from 'vue-router'

const Home=()=>{import('../views/home/Home')}
const Category=()=>{import('../views/category/Category')}
const Cart=()=>{import('../views/cart/Cart')}
const Profile=()=>{import('../views/profile/Profile')}

Vue.use(VueRouter)

//安装路由插件
//routes 对象
const routes=[
    {
        path:'',
        redirect:'/home'
    },
    {
        path:'/home',
        component:Home
    },
    {
        path:'/category',
        component:Category
    },
    {
        path:'/profile',
        component:Profile
    },
    {
        path:'/cart',
        component:Cart
    }

]
const router = new VueRouter({
    routes:routes,
    mode:'history'
})

export default router