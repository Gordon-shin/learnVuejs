import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/Home";
import user from "@/views/user";

const Profile =()=>import('@/views/Profile')

Vue.use(VueRouter)

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/profile',
    meta:{title:'个人信息'}, //meta表示描述数据的数据

    component:Profile
  },
  {
    path: '/home', //路由url
    component: Home,
    meta:{title:'首页'}, //meta表示描述数据的数据
    children:[
        {
          path:'',
          redirect:'/home/news' //路径直接写全就可以
        },
        {
          path:'/home/news',
          component:() => import('@/components/HomeNews')
        },
      {
        path:'/home/message',
          component:()=>import('@/views/Message')
      }
    ]
  },
  {
    path:'/user/:id', //:id 表示url的参数 动态路由的参数 可以在component对应的组件中获取该参数
    component:user, //组件
    meta:{title:'用户界面'}, //meta表示描述数据的数据

  },

  {
    path: '/about',
    meta:{title:'关于'}, //meta表示描述数据的数据

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
//前置钩子 回调全局守卫
router.beforeEach((to,from,next)=> {
  document.title = to.matched[0].meta.title;
  next()
})
export default router //导出router实例
