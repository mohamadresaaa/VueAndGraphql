import { defaultClient as apolloClient } from '../../apollo';
import { GET_TODOS, ADD_TODO } from '../../graphql/todo';
import router from '../../router';

export const getTodos = ({ commit }, payload) => {
    // set loading
    commit('setLoading', true);

    apolloClient.query({ 
        query: GET_TODOS,
        variables: payload
    })
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
            const data = cache.readQuery({ 
                query: GET_TODOS,
                variables: { userId: payload.userId }
            });

            // update data
            data.getTodos.unshift(addTodo);

            // write updated data back to query
            cache.writeQuery({
                query: GET_TODOS,
                variables: { userId: payload.userId },
                data
            });
        },
        optimisticResponse: {
            __typename: 'Mutation',
            addTodo: {
                __typename: 'Todo',
                _id: -1,
                content: payload.content,
                status: payload.status,
                createdAt: Date.now().toString(),
                user: {
                    __typename: 'User',
                    _id: payload.userId
                }
            }
        }
    })
    .then(({ data }) => {
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