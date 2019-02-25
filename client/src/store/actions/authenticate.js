import { defaultClient as apolloClient } from '../../apollo';
import router from '../../router';
import { SIGN_UP, SIGN_IN, FORGOT_PASSWORD } from '../../graphql/authenticate';

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
        // set message
        commit('setMessage', {
            content: data.signUp.message,
            color: 'info'
        });

        // redirect to sign in page
        router.push('/sign_in');

        // set loading
        commit('setLoading', false);
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

export const forgotPassword = ({ commit }, payload) => {
    // clear error
    commit('clearError');

    // set loading
    commit('setLoading', true);

    apolloClient.mutate({
        mutation: FORGOT_PASSWORD,
        variables: payload
    })
    .then(({ data }) => {
        // set message 
        commit('setMessage', {
            content: data.forgotPassword.message,
            color: 'info'
        });

        // set loading
        commit('setLoading', false);
    })
    .catch(err => {
        // set error
        commit('setError', err);

        // set loading
        commit('setLoading', false);
    })
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