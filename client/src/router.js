import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Profile from './views/Profile.vue'
import Categories from './views/categories/CategoryList.vue'
import authGuard from './authGuard';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about_me',
      name: 'aboutMe',
      component: () => import('./views/AboutMe.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('./views/Blog.vue')
    },
    {
      path: '/contact_me',
      name: 'contactMe',
      component: () => import('./views/ContactMe.vue')
    },
    {
      path: '/sign_up',
      name: 'signUp',
      component: () => import('./views/auth/SignUp.vue')
    },
    {
      path: '/sign_in',
      name: 'signIn',
      component: () => import('./views/auth/SignIn.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      beforeEnter: authGuard
    },
    {
      path: '/admin/categories',
      name: 'categories',
      component: Categories
    }
  ]
})
