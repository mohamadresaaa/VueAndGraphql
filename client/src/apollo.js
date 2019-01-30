import ApolloClient from 'apollo-boost'
import VueApollo from 'vue-apollo'

// setup apollo client
const defaultClient = new ApolloClient({ uri: 'http://localhost:2000' });

// export apollo provider
export const apolloProvider = new VueApollo({ defaultClient });