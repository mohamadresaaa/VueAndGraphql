import { defaultClient as apolloClient } from '../../apollo';
import { GET_CURRENT_USER, CHANGE_PASSWORD } from '../../graphql/user';

export const getCurrentUser = ({ commit }) => {
    // set loading
    commit('setLoading', true);
    
    apolloClient.query({ query: GET_CURRENT_USER })
    .then(({ data }) => {
        // set user
        commit('setUser', data.getCurrentUser);

        // loading end
        commit('setLoading', false);
    })
    .catch(err => {
        // set message
        commit('setMessage', {
            content: err.message,
            color: 'error'
        });

        // loading end
        commit('setLoading', false);
    });
};

export const changePassword = ({ commit }, payload) => {
    // clear message
    commit('clearMessage');

    // set loading
    commit('setLoading', true);

    apolloClient.mutate({
        mutation: CHANGE_PASSWORD,
        variables: payload
    })
    .then(({ data }) => {
        // set message
        commit('setMessage', {
            content: data.changePassword.message,
            color: 'success'
        });

        // set loading
        commit('setLoading', false);
    })
    .catch(err => {
        // set message
        commit('setMessage', {
            content: err.message,
            color: 'error'
        });

        // set loading
        commit('setLoading', false);
    });
};