const jwt = require('jsonwebtoken');

module.exports = async (user, secretKey) => {
    return await jwt.sign({
            id: user._id
        },
        secretKey
    );
};