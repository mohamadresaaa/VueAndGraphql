const getUserId = require('./lib/verifyToken');

module.exports = async ({ req }) => {
    let token = req.headers['authorization'];
    return { 
        ...config.database.mongodb.models,
        currentUserId: await getUserId(token) 
    };
};