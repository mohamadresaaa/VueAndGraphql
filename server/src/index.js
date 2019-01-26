const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
    Query: {
      hello: () => 'Hello world!',
    },
  };

module.exports = class Core {
    constructor(){
        this.app = express();
    }

    start(){
        this.setupServer();
    };

    setupServer(){
        const server = new ApolloServer({ typeDefs, resolvers });
        server.applyMiddleware({ app: this.app });

        // server listening on port
        this.app.listen(4000, () => console.log(`Server ready at http://localhost:4000${server.graphqlPath}`));
    };
};
