import models from '../models';

export default {
    mongodb: {
        url: process.env.MONGODB_DATABASE_URL,
        options: {
            useNewUrlParser: true
        },
        models
    }
};