import { defaultClient as apolloClient } from '../../apollo';
import router from '../../router';
import { SIGN_UP, SIGN_IN } from '../../graphql/mutations/authenticate';

export const signUp = ({ commit }, payload) => {
    // clear error
    commit('clearError');

    // set loading
    commit('setLoading', true);
    
    apolloClient.mutate({ 
      mutation: SIGN_UP,
      variables: payload
    })
    .then(({ data }) => {
        // set loading
        commit('setLoading', false);

        console.log('data', data.signUp);
    })
    .catch(err => {
        // set loading
        commit('setLoading', false);

        // set error
        commit('setError', err);
    });
};

export const signIn = ({ commit }, payload) => {
    // clear error
    commit('clearError');

    // set loading
    commit('setLoading', true);
    
    // clear access token
    localStorage.setItem('accessToken', '');
    
    apolloClient.mutate({ 
      mutation: SIGN_IN,
      variables: payload
    })
    .then(({ data }) => {
        // set loading
        commit('setLoading', false);

        // set access token
        localStorage.setItem('accessToken', data.signIn.token);

        // refresh and redirect to home page
        router.go();
        router.push('/');
    })
    .catch(err => {
        // set loading
        commit('setLoading', false);

        // set error
        commit('setError', err);
    });
};

export const signOut = async ({ commit }) => {
    // clear user in state
    commit('clearUser', null);

    // remove accessToken in localStorage
    localStorage.setItem('accessToken', '');

    // end session
    await apolloClient.resetStore();

    // redirect to home page and kick user of private pages
    router.push('/');
};