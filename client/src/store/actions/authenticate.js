import { defaultClient as apolloClient } from '../../apollo';
import { SIGN_UP, SIGN_IN, FORGOT_PASSWORD, RESET_PASSWORD } from '../../graphql/authenticate';
import router from '../../router';

export const signUp = ({ commit }, payload) => {
    // clear message
    commit('clearMessage');

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
        // set message
        commit('setMessage', {
            content: err.message,
            color: 'error'
        });

        // set loading
        commit('setLoading', false);
    });
};

export const signIn = ({ commit }, payload) => {
    // clear message
    commit('clearMessage');

    // set loading
    commit('setLoading', true);
    
    // clear access token
    localStorage.setItem('accessToken', '');
    
    apolloClient.mutate({ 
      mutation: SIGN_IN,
      variables: payload
    })
    .then(({ data }) => {
        // set access token
        localStorage.setItem('accessToken', data.signIn.token);

        // set loading
        commit('setLoading', false);

        // redirect to home page
        router.go();
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

export const forgotPassword = ({ commit }, payload) => {
    // clear message
    commit('clearMessage');

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
        // set message
        commit('setMessage', {
            content: err.message,
            color: 'error'
        });

        // set loading
        commit('setLoading', false);
    })
};

export const resetPassword = ({ commit }, payload) => {
    // clear message
    commit('clearMessage');

    // set loading
    commit('setLoading', true);

    apolloClient.mutate({
        mutation: RESET_PASSWORD,
        variables: payload
    })
    .then(({ data }) => {
        // set message 
        commit('setMessage', {
            content: data.resetPassword.message,
            color: 'success'
        });

        // set loading
        commit('setLoading', false);

        // redirect to signIn page
        router.push('/sign_in');
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