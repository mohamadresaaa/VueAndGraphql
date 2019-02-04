import ApolloClient from 'apollo-boost'
import VueApollo from 'vue-apollo'

// setup apollo client
export const defaultClient = new ApolloClient({ 
    uri: 'http://localhost:2000',
    // include auth token with requests made to server
    fetchOptions: {
        credentials: 'include'
    },
    request: operation => {
        // if not token with key of 'accessToken' in localStorage, add it
        if(!localStorage.accessToken)
            localStorage.setItem('accessToken', '');

        // operation adds the token to an authorization header, which is sent to server
        operation.setContext({
            headers: {
                authorization: localStorage.getItem('accessToken')
            }
        })
    },
    onError: ({ graphQLErrors, networkError }) => {
        if(networkError)
            console.log('networkError', networkError);

        if(graphQLErrors)
            for (const err of graphQLErrors) {
                console.dir(err);
            }
    }
});

// export apollo provider
export const apolloProvider = new VueApollo({ defaultClient });