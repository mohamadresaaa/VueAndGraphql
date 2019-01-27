const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');


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
        this.setTypeDefs();
        this.app = express();
    }

    // run methods
    start(){
        this.setupServer();
        this.setupDatabase();
    };

    // global config
    setGlobalConfig(){
        require('dotenv').config();
        global.config = require('../config');
    };

    // construct a schema, using GraphQL schema language
    setTypeDefs(){
        const filePath = path.join(__dirname, 'typeDefs.gql');
        this.typeDefs = fs.readFileSync(filePath, 'utf-8');
    };

    // configuration express with apollo server
    setupServer(){
        const server = new ApolloServer({ 
            typeDefs: this.typeDefs,
            resolvers,
            context: { ...config.database.mongodb.models }
        });
        server.applyMiddleware({ app: this.app, path: '/' });

        // server listening on port
        this.app.listen(config.server.port, () => console.log(`Server ready at http://localhost:${config.server.port}`));
    };

    setupDatabase(){
        mongoose.Promise = global.Promise;
        mongoose.connect(
            config.database.mongodb.url,
            { ...config.database.mongodb.options }
        ).then(() => console.info('Database connected'))
        .catch(err => console.error(`Error message: ${err.message}`));
    };
};
