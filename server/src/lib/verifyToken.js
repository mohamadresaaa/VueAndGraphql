const jwt = require('jsonwebtoken');
const { AuthenticationError } = require('apollo-server-express');

module.exports = async token => {
    if (token) {
        try {
            // get user id
            let { id } = await jwt.verify(token, 'secretKey');

            // return id
            return id;
        } catch (error) {
            throw new AuthenticationError('Your session has ended! Please sign in again.');
        }
    }
};