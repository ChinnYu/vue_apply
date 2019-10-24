import Vue from 'vue'
import Router from 'vue-router'
import Film from '@/views/Film.vue'
import Nowplaying from '@/views/Film/Nowplaying'
import Comingsoon from '@/views/Film/Comingsoon'
import Cinema from '@/views/Cinema.vue'
import Center from '@/views/Center.vue'
import Detail from '@/views/Detail.vue'

Vue.use(Router) // 註冊路由模塊

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/film',
      // name: 'home',
      component: Film,
      children: [
        {
          path: 'nowplaying', // 會自動加 /film/
          component: Nowplaying // 不同層級放不同地(views)
        },
        {
          path: 'comingsoon', // 會自動加 /film/
          component: Comingsoon
        },
        {
          path: '', // 會自動加 /film/
          redirect: '/film/nowplaying'
        }
      ]
    }, // 這邊componet 需創在views
    {
      path: '/cinema',
      // name: 'home',
      component: Cinema
    },
    {
      path: '/center',
      alias: '/wode',
      // name: 'home',
      component: Center
    },
    {
      path: '/detail/:id', // /detail/1111
      name: 'detail',
      component: Detail
    },
    {
      path: '*',
      redirect: '/film'
    }
  ]
})

const user = {
  isLogin () {
    return true
  }
}

// 全域前置守衛
// router.beforeEach((to, from, next) => {
//
//   if (to.path === '/center'){
//       if (user.isLogin()){
//         next();
//       } else {
//         next("/cinema");
//       }
//   }else {
//     next();
//   }
//
// })

export default router
