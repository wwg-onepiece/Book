import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      alias: 'h',
      components: {
        default: () => import('./views/Home')
      }
    },
    {
      path: '/check',
      name: 'check',
      components: {
        default: () => import('./views/Check')
      }
    },
    {
      path: '/register',
      name: 'register',
      components: {
        default: () => import('./views/Register')
      }
    },
    {
      path: '/login',
      name: 'login',
      components: {
        default: () => import('./views/Login')
      }
    },
    {
      path: '/agreement',
      name: 'agreement',
      components: {
        default: () => import('./views/Agreement')
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
