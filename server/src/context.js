const getUser = require('./lib/verifyToken');

module.exports = async ({ req }) => {
    let token = req.headers['authorization'];
    return { 
        ...config.database.mongodb.models,
        currentUser: await getUser(token) 
    };
};