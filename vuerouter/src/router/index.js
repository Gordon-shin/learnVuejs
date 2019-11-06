import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/Home";
import user from "@/views/user";


Vue.use(VueRouter)

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path: '/home', //路由url
    component: Home,
    children:[
        {
          path:'',
          redirect:'/home/news' //路径直接写全就可以
        },
        {
          path:'/home/news',
          component:() => import('@/components/HomeNews')
        }
    ]
  },
  {
    path:'/user/:id', //:id 表示url的参数 动态路由的参数 可以在component对应的组件中获取该参数
    component:user //组件
  },

  {
    path: '/about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes,
  mode:'history',
  linkActiveClass:'active'
})

export default router //导出router实例
