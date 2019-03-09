import { defaultClient as apolloClient } from '../../apollo';
import { GET_CATEGORIES, ADD_CATEGORY, UPDATE_CATEGORY } from '../../graphql/category';
import router from '../../router';

export const getCategories = ({ commit }) => {
  // set loading 
  commit('setLoading', true);

  apolloClient.query({ query: GET_CATEGORIES })
  .then(({ data }) => {
    // set categories
    commit('setCategories', data.getCategories);
    
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

export const addCategory = ({ commit }, payload) => {
  // clear message
  commit('clearMessage');

  // set loading
  commit('setLoading', true);
  
  apolloClient.mutate({ 
    mutation: ADD_CATEGORY,
    variables: payload,
    update: (cache, { data: { addCategory } }) => {
      // finding the query we want to update
      const data = cache.readQuery({ 
        query: GET_CATEGORIES,
        variables: { userId: payload.user }
      });

      // update data
      data.getCategories.unshift(addCategory);

      // write updated data back to query
      cache.writeQuery({
        query: GET_CATEGORIES,
        data
      });
    },
    optimisticResponse: {
      __typename: 'Mutation',
      addCategory: {
        __typename: 'Category',
        _id: -1,
        ...payload
      }
    }
  })
  .then(() => {
    // set message
    commit('setMessage', {
      content: 'The category has been successfully created.',
      color: 'success'
    });
    
    // set loading
    commit('setLoading', false);

    // redirect to /admin/categories
    router.push('/admin/categories');
  })
  .catch(err => {
    // set message
    commit('setMessage', {
      content: err.message,
      color: 'error'
    });

    // loading end
    commit('setLoading', false);
  })
};

export const updateCategory = ({ state, commit }, payload) => {
  // clear message
  commit('clearMessage');

  // set loading
  commit('setLoading', true);

  apolloClient.mutate({
    mutation: UPDATE_CATEGORY,
    variables: payload
  })
  .then(({ data }) => {
    // find index
    let index = state.categories.findIndex(category => category._id === data.updateCategory._id);

    // update categories
    let categories = [
      ...state.categories.slice(0, index),
      data.updateCategory,
      ...state.categories.slice(index + 1)
    ];

    // set categories in state
    commit('setCategories', categories);

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