import Vue from 'vue'
import Vuex from 'vuex'

// import actions
import { getCategories } from './store/actions/categories';
import { signIn } from './store/actions/authenticate';
import { getCurrentUser } from './store/actions/users';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: [],
    loading: false
  },
  mutations: {
    setCategories: (state, payload) => state.categories = payload,
    setLoading: (state, payload) => state.loading = payload
  },
  actions: {
    getCurrentUser,
    getCategories,
    signIn
  },
  getters: {
    categories: state => state.categories,
    loading: state => state.loading
  }
})
