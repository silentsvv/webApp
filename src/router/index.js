import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/Page/Index/Index'
import Fun from '@/Page/Fun/Fun'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/fun',
      name: 'fun',
      component: Fun
    }
  ]
})
