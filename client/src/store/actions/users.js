import { defaultClient as apolloClient } from '../../apollo';

import { GET_CURRENT_USER } from '../../graphql/users';

export const getCurrentUser = ({ commit }) => {
    // set loading
    commit('setLoading', true);
    
    apolloClient.query({ query: GET_CURRENT_USER })
    .then(({ data }) => {
        // loading end
        commit('setLoading', false);

        // set user
        commit('setUser', data.getCurrentUser);
    })
    .catch(err => {
        // loading end
        commit('setLoading', false);

        // set error
        commit('setError', err);
    });
};