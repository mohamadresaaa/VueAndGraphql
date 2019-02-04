import { defaultClient as apolloClient } from '../../apollo';

import { GET_CURRENT_USER } from '../../graphql/queries/users';

export const getCurrentUser = ({ commit }) => {
    commit('setLoading', true);
    apolloClient.query({ query: GET_CURRENT_USER })
    .then(({ data }) => {
        commit('setLoading', false);
        commit('setUser', data.getCurrentUser);
    })
    .catch(err => {
        commit('setLoading', false);
        console.log(err);
    });
};