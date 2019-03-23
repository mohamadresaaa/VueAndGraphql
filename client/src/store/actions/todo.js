import { defaultClient as apolloClient } from '../../apollo';
import { GET_TODOS, ADD_TODO, UPDATE_TODO, DONE_TODO, DELETE_TODO } from '../../graphql/todo';
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
        // set message
        commit('setMessage', {
            content: err.message,
            color: 'error'
        });

        // loading end
        commit('setLoading', false);
    });
};

export const addTodo = ({ commit }, payload) => {
    // clear message
    commit('clearMessage');

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
    .then(() => {
        // set message
        commit('setMessage', {
            content: 'The todo has been successfully created.',
            color: 'success'
        });

        // loading end
        commit('setLoading', false);

        // redirect to /todos
        router.push('/todos');
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

export const doneTodo = ({ state, commit }, payload) => {
    // clear message
    commit('clearMessage');

    apolloClient.mutate({
        mutation: DONE_TODO,
        variables: payload
    })
    .then(({ data }) => {
        // find index
        let index = state.todos.findIndex(todo => todo._id === data.doneTodo._id);

        // update todos
        let todos = [
            ...state.todos.slice(0, index),
            data.doneTodo,
            ...state.todos.slice(index + 1)
        ];

        // set todos in state
        commit('setTodos', todos);

        // set success message
        commit('setMessage', {
            content: 'done todo',
            color: 'success'
        });
    })
    .catch(err => {
        // set error message
        commit('setMessage', {
            content: err.message,
            color: 'error'
        });
    });
};

export const updateTodo = ({ state, commit }, payload) => {
    // clear message
    commit('clearMessage');

    // set loading
    commit('setLoading', true);

    apolloClient.mutate({
        mutation: UPDATE_TODO,
        variables: payload
    })
    .then(({ data }) => {
        // find index
        let index = state.todos.findIndex(todo => todo._id === data.updateTodo._id);

        // update todos
        let todos = [
            ...state.todos.slice(0, index),
            data.updateTodo,
            ...state.todos.slice(index + 1)
        ];

        // set todos in state
        commit('setTodos', todos);

        // set success message
        commit('setMessage', {
            content: 'updated',
            color: 'success'
        });

        // set loading
        commit('setLoading', false);
    })
    .catch(err => {
        // set error message
        commit('setMessage', {
            content: err.message,
            color: 'error'
        });

        // set loading
        commit('setLoading', false);
    });
};

export const deleteTodo = ({ state, commit }, payload) => {
    apolloClient.mutate({
        mutation: DELETE_TODO,
        variables: payload
    })
    .then(({ data }) => {
        // find index
        let index = state.todos.findIndex(todo => todo._id === data.deleteTodo._id);

        // update todos
        let todos = [
            ...state.todos.slice(0, index),
            ...state.todos.slice(index + 1)
        ];

        // set todos in state
        commit('setTodos', todos);

        // set success message
        commit('setMessage', {
            content: 'delete todo',
            color: 'success'
        });
    })
    .catch(err => {
        // set error message
        commit('setMessage', {
            content: err.message,
            color: 'error'
        });

        // set loading
        commit('setLoading', false);
    });
};