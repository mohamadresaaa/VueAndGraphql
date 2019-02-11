const signUp = require('./mutations/signUp');
const signIn = require('./mutations/signIn');
const addCategory = require('./mutations/addCategory');
const Query = require('./queries');

module.exports = {
    Query,
    Mutation: {
        signUp,
        signIn,
        addCategory
    }
};