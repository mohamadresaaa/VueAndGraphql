import { defaultClient as apolloClient } from '../../apollo';
import router from '../../router';

import { GET_CATEGORIES, ADD_CATEGORY } from '../../graphql/categories';

export const getCategories = ({ commit }) => {
  // set loading 
  commit('setLoading', true);

  apolloClient.query({ query: GET_CATEGORIES })
  .then(({ data }) => {
    // set categories
    commit('setCategories', data.getCategories);
    
    // loading end
    commit('setLoading', false);
  })
  .catch(err => {
    // loading end
    commit('setLoading', false);
    
    // set error
    commit('setError', err);
  });
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