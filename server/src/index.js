const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');


// import resolvers
const resolvers = require('./resolvers');

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
