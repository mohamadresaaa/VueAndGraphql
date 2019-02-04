const signUp = require('./mutations/signUp');
const signIn = require('./mutations/signIn');
const getCurrentUser = require('./queries/getCurrentUser');
const getCategories = require('./queries/getCategories');
const addCategory = require('./mutations/addCategory');

module.exports = {
    Query: {
        getCurrentUser,
        getCategories
    },
    Mutation: {
        signUp,
        signIn,
        addCategory
    }
};