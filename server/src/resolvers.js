const signUp = require('./mutations/signUp');
const addCategory = require('./mutations/addCategory');

module.exports = {
    Query: {
        names: () => {
            return ['mohamadreza', 'saeed', 'ali'];
        }
    },
    Mutation: {
        signUp,
        addCategory
    }
};