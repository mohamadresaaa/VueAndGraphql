import Vue from 'vue'
import Vuex from 'vuex'

// import actions
import { getCategories } from './store/actions/categories';
import { signIn, signOut } from './store/actions/authenticate';
import { getCurrentUser } from './store/actions/users';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    categories: [],
    loading: false
  },
  mutations: {
    setUser: (state, payload) => state.user = payload,
    setCategories: (state, payload) => state.categories = payload,
    setLoading: (state, payload) => state.loading = payload,
    clearUser: state => state.user = null
  },
  actions: {
    getCurrentUser,
    getCategories,
    signIn,
    signOut
  },
  getters: {
    user: state => state.user,
    categories: state => state.categories,
    loading: state => state.loading
  }
})
