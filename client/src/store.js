import Vue from 'vue'
import Vuex from 'vuex'

import { gql } from "apollo-boost";
import { defaultClient as apolloClient } from "./apollo";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: [],
    loading: false
  },
  mutations: {
    setCategories: (state, payload) => {
      state.categories = payload;
    },
    setLoading: (state, payload) => {
      state.loading = payload;
    }
  },
  actions: {
    getCategories: ({ commit }) => {
      commit('setLoading', true);
      apolloClient.query({
        query: gql `
          query {
            getCategories {
              title
              url
            }
          }
        `
      }).then(({ data }) => {
        commit('setCategories', data.getCategories);
        commit('setLoading', false);
      })
      .catch(() => commit('setLoading', false));
    }
  },
  getters: {
    categories: state => state.categories,
    loading: state => state.loading
  }
})
