const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');


const todoes = [
    { task: '1', status: 'completed' },
    { task: '2', status: 'uncompleted' },
    { task: '3', status: 'uncompleted' }
];

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
    type Todo {
        task: String
        status: String
    }

    type Query {
        getTodoes: [Todo]
    }

    type Mutation {
        addTodo(task: String, status: String): Todo
    }
`;

// Provide resolver functions for your schema fields
const resolvers = {
    Query: {
        getTodoes: () => todoes,
    },
    Mutation: {
        addTodo: (_, args) => {
            const todo = { task: args.task, status: args.status };
            todoes.push(todo);
            return todo;
        }
    }
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
