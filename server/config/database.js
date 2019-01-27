const models = require('../models');

module.exports = {
    mongodb: {
        url: process.env.MONGODB_DATABASE_URL,
        options: {
            useNewUrlParser: true
        },
        models
    }
};