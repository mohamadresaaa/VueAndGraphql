const signUp = require('./mutations/signUp');

module.exports = {
    Query: {
        names: () => {
            return ['mohamadreza', 'saeed', 'ali'];
        }
    },
    Mutation: {
        signUp
    }
};