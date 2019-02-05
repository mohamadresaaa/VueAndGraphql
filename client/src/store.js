import Vue from 'vue'
import Vuex from 'vuex'

// import state, mutations, actions, getters
import { mutations } from './store/mutations';
import { actions } from './store/actions';
import { state } from './store/state';

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters: {
    user: state => state.user,
    categories: state => state.categories,
    loading: state => state.loading
  }
})
