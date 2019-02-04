const jwt = require('jsonwebtoken');
const { AuthenticationError } = require('apollo-server-express');

module.exports = async token => {
    if (token) {
        try {
            // get user id
            let { id } = await jwt.verify(token, 'secretKey');

            // find user
            let user = await config.database.mongodb.models.User.findById(id);

            // if user doesn't exists
            if(!user) throw new Error('Token is not valid.');

            // return it
            return user;
        } catch (error) {
            throw new AuthenticationError('Your session has ended! Please sign in again.');
        }
    }
};