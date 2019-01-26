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
        this.setGlobalConfig();
        this.app = express();
    }

    // run methods
    start(){
        this.setupServer();
    };

    // global config
    setGlobalConfig(){
        require('dotenv').config();
        global.config = require('../config');
    };

    // configuration express with apollo server
    setupServer(){
        const server = new ApolloServer({ typeDefs, resolvers });
        server.applyMiddleware({ app: this.app, path: '/' });

        // server listening on port
        this.app.listen(config.server.port, () => console.log(`Server ready at http://localhost:${config.server.port}`));
    };
};
