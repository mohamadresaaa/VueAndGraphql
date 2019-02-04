const signUp = require('./mutations/signUp');
const signIn = require('./mutations/signIn');
const getCategories = require('./queries/getCategories');
const addCategory = require('./mutations/addCategory');

module.exports = {
    Query: {
        getCategories
    },
    Mutation: {
        signUp,
        signIn,
        addCategory
    }
};