import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';


// import resolvers, formatError, context
import resolvers from './resolvers';
import formatError from './formatError';
import context from './context';

export default class Core {
    constructor(){
        this.app = express();
    }

    // run methods
    start(){
        this.setupServer();
        this.setupDatabase();
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
