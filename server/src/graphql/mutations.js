const { signUp, signIn } = require('./authenticate');
const { addCategory } = require('./category');
const { addTodo } = require('./todo');

module.exports = {
    signUp,
    signIn,
    addCategory,
    addTodo
};