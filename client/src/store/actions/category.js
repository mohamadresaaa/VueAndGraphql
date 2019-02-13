import { defaultClient as apolloClient } from '../../apollo';
import { GET_CATEGORIES, ADD_CATEGORY } from '../../graphql/category';
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
    // loading end
    commit('setLoading', false);
    
    // set error
    commit('setError', err);
  });
};

export const addCategory = ({ commit }, payload) => {
  // clear error
  commit('clearError');

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
    // loading end
    commit('setLoading', false);

    // redirect to /admin/categories
    router.push('/admin/categories');
  })
  .catch(err => {
    // loading end
    commit('setLoading', false);

    // set error
    commit('setError', err);
  })
};