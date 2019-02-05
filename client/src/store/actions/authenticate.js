import { defaultClient as apolloClient } from '../../apollo';
import router from '../../router';
import { SIGN_IN } from '../../graphql/mutations/authenticate';

export const signIn = ({ commit }, payload) => {
    apolloClient.mutate({ 
      mutation: SIGN_IN,
      variables: payload
    })
    .then(({ data }) => {
        // set access token
        localStorage.setItem('accessToken', data.signIn.token);
        // refresh and redirect to home page
        router.go();
        router.push('/');
    })
    .catch(err => console.error(err));
};

export const signOut = async ({ commit }) => {
    // clear user in state
    commit('clearUser', null);

    // remove accessToken in localStorage
    localStorage.setItem('accessToken', '');

    // end session
    apolloClient.resetStore();

    // redirect to home page and kick user of private pages
    router.push('/');
};