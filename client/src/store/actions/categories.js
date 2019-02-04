import { defaultClient as apolloClient } from '../../apollo';

import { GET_CATEGORIES } from '../../graphql/queries/categories';

export const getCategories = ({ commit }) => {
    commit('setLoading', true);
    apolloClient.query({ query: GET_CATEGORIES })
    .then(({ data }) => {
      commit('setCategories', data.getCategories);
      commit('setLoading', false);
    })
    .catch(() => commit('setLoading', false));
};