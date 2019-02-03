import Vue from 'vue'
import Vuex from 'vuex'
import { defaultClient as apolloClient } from "./apollo";


// import queries and mutations graphql
import { getCategories } from './graphql/queries/categories';
import { signIn } from './graphql/mutations/authenticate';

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
    getCategories: ({ commit }) => {
      commit('setLoading', true);
      apolloClient.query({ query: getCategories })
      .then(({ data }) => {
        commit('setCategories', data.getCategories);
        commit('setLoading', false);
      })
      .catch(() => commit('setLoading', false));
    },
    signIn: ({ commit }, payload) => {
      apolloClient.mutate({ 
        mutation: signIn,
        variables: payload
      })
      .then(({ data }) => {
        console.log('token', data.signIn);
      })
      .catch(err => console.error(err));
    }
  },
  getters: {
    categories: state => state.categories,
    loading: state => state.loading
  }
})
