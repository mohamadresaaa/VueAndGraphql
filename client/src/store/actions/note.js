import { defaultClient as apolloClient } from '../../apollo';
import { GET_NOTES, ADD_NOTE, UPDATE_NOTE, DELETE_NOTE } from '../../graphql/note';
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
        // set message
        commit('setMessage', {
            content: err.message,
            color: 'error'
        });
        
        // set loading
        commit('setLoading', false);
    });
};

export const addNote = ({ commit }, payload) => {
    // clear message
    commit('clearMessage');

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
        // set message
        commit('setMessage', {
            content: 'The note has been successfully created.',
            color: 'success'
        });

        // set loading
        commit('setLoading', false);

        // redirect to notes
        router.push('/notes');
    })
    .catch(err => {
        // set message
        commit('setMessage', {
            content: err.message,
            color: 'error'
        });

        // set loading
        commit('setLoading', false);
    })
};

export const updateNote = ({ state, commit }, payload) => {
    // clear message
    commit('clearMessage');

    // set loading
    commit('setLoading', true);

    apolloClient.mutate({
        mutation: UPDATE_NOTE,
        variables: payload
    })
    .then(({ data }) => {
        // find index
        let index = state.notes.findIndex(note => note._id === data.updateNote._id);
        
        // update notes
        let notes = [
            ...state.notes.slice(0, index),
            data.updateNote,
            ...state.notes.slice(index + 1)
        ];

        // // set notes to state
        commit('setNotes', notes);

        // set message
        commit('setMessage', {
            content: 'updated',
            color: 'success'
        });

        // // set loading
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

export const deleteNote = ({ state, commit }, payload) => {
    apolloClient.mutate({
        mutation: DELETE_NOTE,
        variables: payload
    })
    .then(({ data }) => {
        // find index
        let index = state.notes.findIndex(note => note._id === data.deleteNote._id);

        // update notes
        let notes = [
            ...state.notes.slice(0, index),
            ...state.notes.slice(index + 1)
        ];

        // set notes in state
        commit('setNotes', notes);

        // set success message
        commit('setMessage', {
            content: 'delete note',
            color: 'success'
        });
    })
    .catch(err => {
        // set message
        commit('setMessage', {
            content: err.message,
            color: 'error'
        });
    
        // set loading
        commit('setLoading', false);
    })
};