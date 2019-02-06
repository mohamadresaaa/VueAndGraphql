const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');


// import resolvers, formatError, context
const resolvers = require('./resolvers');
const formatError = require('./formatError');
const context = require('./context');

module.exports = class Core {
    constructor(){
        this.setGlobalConfig();
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
        return fs.readFileSync(filePath, 'utf-8');
    };

    // configuration express with apollo server
    setupServer(){
        const server = new ApolloServer({ 
            typeDefs: this.setTypeDefs(),
            resolvers,
            formatError,
            context
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
