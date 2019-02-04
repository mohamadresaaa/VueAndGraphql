const jwt = require('jsonwebtoken');
const { AuthenticationError } = require('apollo-server-express');

module.exports = async token => {
    if (token) {
        try {
            let user = await jwt.verify(token, 'secretKey');
            console.log(user);
        } catch (error) {
            throw new AuthenticationError('Your session has ended! Please sign in again.');
        }
    }
};