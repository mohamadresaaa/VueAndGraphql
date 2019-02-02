const md5 = require('md5');
module.exports = async (username) => `http://gravatar.com/avatar/${md5(username)}?d=identicon`;