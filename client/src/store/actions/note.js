import { defaultClient as apolloClient } from '../../apollo';
import { GET_NOTES } from '../../graphql/note';

export const getNotes = ({ commit }, payload) => {
    // set loading
    commit('setLoading', true);

    apolloClient.query({ 
        query: GET_NOTES,
        variables: payload 
    })
    .then(({ data }) => {
        // set notes
        commit('setNotes', data.getNotes);

        // set loading
        commit('setLoading', false);
    })
    .catch(err => {
        console.log('err message:', err.message);
        // set error
        commit('setError', err);
        
        // set loading
        commit('setLoading', false);
    });
};