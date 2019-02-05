import Vue from 'vue'
import Vuex from 'vuex'

// import mutations
import { mutations } from './store/mutations';

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
  mutations,
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
