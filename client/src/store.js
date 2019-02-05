import Vue from 'vue'
import Vuex from 'vuex'

// import mutations
import { mutations } from './store/mutations';

// import actions
import { actions } from './store/actions';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    categories: [],
    loading: false
  },
  mutations,
  actions,
  getters: {
    user: state => state.user,
    categories: state => state.categories,
    loading: state => state.loading
  }
})
