import { defaultClient as apolloClient } from '../../apollo';
import { GET_CURRENT_USER, CHANGE_PASSWORD } from '../../graphql/user';
import router from '../../router';

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

export const changePassword = ({ commit }, payload) => {
    // clear error
    commit('clearError');

    // set loading
    commit('setLoading', true);

    apolloClient.mutate({
        mutation: CHANGE_PASSWORD,
        variables: payload
    })
    .then(({ data }) => {
        // set message
        commit('setMessage', data.changePassword.message);

        // set loading
        commit('setLoading', false);
    })
    .catch(err => {
        // set error
        commit('setError', err);

        // set loading
        commit('setLoading', false);
    });
};