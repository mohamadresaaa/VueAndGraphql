import { defaultClient as apolloClient } from '../../apollo';
import { GET_NOTES, ADD_NOTE } from '../../graphql/note';
import router from '../../router';

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
        // set error
        commit('setError', err);
        
        // set loading
        commit('setLoading', false);
    });
};

export const addNote = ({ commit }, payload) => {
    // clear error
    commit('clearError');

    // set loading
    commit('setLoading', true);

    apolloClient.mutate({
        mutation: ADD_NOTE,
        variables: payload,
        update: (cache, { data: { addNote } }) => {
            // finding the query we want to update
            const data = cache.readQuery({ 
                query: GET_NOTES,
                variables: { userId: payload.userId }
            });

            // update data
            data.getNotes.unshift(addNote);

            // write updated data back to query
            cache.writeQuery({
                query: GET_NOTES,
                variables: { userId: payload.userId },
                data
            });
        },
        optimisticResponse: {
            __typename: 'Mutation',
            addNote: {
                __typename: 'Note',
                _id: -1,
                title: payload.title,
                content: payload.content,
                createdAt: Date.now().toString(),
                user: {
                    __typename: 'User',
                    _id: payload.userId
                }
            }
        }
    })
    .then(() => {
        // set loading
        commit('setLoading', false);

        // set message
        commit('setMessage', {
            content: 'The note has been successfully created.',
            color: 'success'
        });

        // redirect to notes
        router.push('/notes');
    })
    .catch(err => {
        // set error
        commit('setError', err);

        // set loading
        commit('setLoading', false);
    })
};