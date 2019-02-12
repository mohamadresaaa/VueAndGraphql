import { defaultClient as apolloClient } from '../../apollo';
import { GET_TODOS, ADD_TODO } from '../../graphql/todo';
import router from '../../router';

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

export const addTodo = ({ commit }, payload) => {
    // clear error
    commit('clearError');

    // set loading
    commit('setLoading', true);

    apolloClient.mutate({ 
        mutation: ADD_TODO,
        variables: payload,
        update: (cache, { data: { addTodo } }) => {
            // finding the query we want to update
            const data = cache.readQuery({ query: GET_TODOS });

            // update data
            data.getTodos.unshift(addTodo);

            // write updated data back to query
            cache.writeQuery({
                query: GET_TODOS,
                data
            });
        },
        optimisticResponse: {
            __typename: 'Mutation',
            addTodo: {
                __typename: 'Todo',
                _id: -1,
                ...payload
            }
        }
    })
    .then(() => {
        // loading end
        commit('setLoading', false);

        // redirect to /todos
        router.push('/todos');
    })
    .catch(err => {
        // set error
        commit('setError', err);
        
        // loading end
        commit('setLoading', false);
    });
};