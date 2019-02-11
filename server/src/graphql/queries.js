const { getCategories } = require('./category');
const { getCurrentUser } = require('./user');
const { getTodos } = require('./todo');

module.exports = {
    getCategories,
    getCurrentUser,
    getTodos
};