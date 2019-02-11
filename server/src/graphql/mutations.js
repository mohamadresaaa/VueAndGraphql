const { signUp, signIn } = require('./authenticate');
const { addCategory } = require('./categories');

module.exports = {
    signUp,
    signIn,
    addCategory
};