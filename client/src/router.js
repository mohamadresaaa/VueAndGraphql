import Vue from 'vue'
import Router from 'vue-router'

// views
import Home from './views/Home.vue';
import CategoryList from './views/categories/List.vue';
import AddCategory from './views/categories/Add.vue';
import Todos from './views/todos/List.vue';
import AddTodo from './views/todos/Add.vue';
import Notes from './views/notes/List.vue';
import AddNote from './views/notes/Add.vue';
import ChangePassword from './views/account/ChangePassword.vue';

// auth views
import signUp from './views/auth/SignUp.vue';
import signIn from './views/auth/SignIn.vue';
import twoFactorAuthenticate from './views/auth/TwoFactorAuth.vue';
import forgotPassword from './views/auth/ForgotPassword.vue';
import resetPassword from './views/auth/ResetPassword.vue';

// not found page
import notFound from './views/NotFound';

// middleware
import { beforeAuthenticate, afterAuthenticate } from './authMiddleware';
import { adminLevel } from './ACL';

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
      component: signUp,
      beforeEnter: beforeAuthenticate
    },
    {
      path: '/sign_in',
      name: 'signIn',
      component: signIn,
      beforeEnter: beforeAuthenticate
    },
    {
      path: '/two_factor_authenticate',
      name: 'twoFactorAuthenticate',
      component: twoFactorAuthenticate
    },
    {
      path: '/forgotPassword',
      name: 'forgotPassword',
      component: forgotPassword,
      beforeEnter: beforeAuthenticate
    },
    {
      path: '/resetPassword/:activeCode',
      name: 'resetPassword',
      component: resetPassword,
      beforeEnter: beforeAuthenticate
    },
    {
      path: '/user/changePassword',
      name: 'changePassword',
      component: ChangePassword,
      beforeEnter: afterAuthenticate
    },
    {
      path: '/admin/categories',
      name: 'categories',
      component: CategoryList,
      beforeEnter: adminLevel
    },
    {
      path: '/admin/categories/add',
      name: 'addCategory',
      component: AddCategory,
      beforeEnter: adminLevel
    },
    {
      path: '/todos',
      name: 'todos',
      component: Todos,
      beforeEnter: afterAuthenticate
    },
    {
      path: '/todos/add',
      name: 'addTodo',
      component: AddTodo,
      beforeEnter: afterAuthenticate
    },
    {
      path: '/notes',
      name: 'notes',
      component: Notes,
      beforeEnter: afterAuthenticate
    },
    {
      path: '/notes/add',
      name: 'addNote',
      component: AddNote,
      beforeEnter: afterAuthenticate
    },
    {
      path: '*',
      name: 'notFound',
      component: notFound
    }
  ]
})
