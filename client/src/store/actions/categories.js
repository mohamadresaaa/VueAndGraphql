import { defaultClient as apolloClient } from '../../apollo';
import router from '../../router';

import { GET_CATEGORIES } from '../../graphql/queries/categories';
import { ADD_CATEGORY } from '../../graphql/mutations/categories';

export const getCategories = ({ commit }) => {
  commit('setLoading', true);
  apolloClient.query({ query: GET_CATEGORIES })
  .then(({ data }) => {
    commit('setCategories', data.getCategories);
    commit('setLoading', false);
  })
  .catch(() => commit('setLoading', false));
};

export const addCategory = ({ commit }, payload) => {
  // clear error
  commit('clearError');

  // set loading
  commit('setLoading', true);
  apolloClient.mutate({ mutation: ADD_CATEGORY, variables: payload })
  .then(() => {
    // loading end
    commit('setLoading', false);

    // redirect to categories
    router.push('/admin/categories');
  })
  .catch(err => {
    // loading end
    commit('setLoading', false);

    // set error
    commit('setError', err);
  })
};