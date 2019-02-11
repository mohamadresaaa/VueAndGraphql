import { defaultClient as apolloClient } from '../../apollo';
import { GET_TODOS } from '../../graphql/todo';

export const getTodos = ({ commit }) => {
    // set loading
    commit('setLoading', true);

    apolloClient.query({ query: GET_TODOS })
    .then(({ data }) => {
        // set todos
        commit('setTodos', data.getTodos);

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