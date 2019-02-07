const generateToken = require('../lib/generateToken');

module.exports = async (_, {
    email,
    password
}, {
    User
}) => {
    // find user
    const user = await User.findOne({ email });

    // if not user exists
    if(!user) throw new Error('Incorrect email or password');

    // if user is disable
    if(!user.isActive) throw new Error('Your account is disabled');

    // compare password
    const isMatch = await user.comparePassword(password);

    // if the password was not equal
    if(!isMatch) throw new Error('Incorrect email or password');
    
    // otherwise generate token
    return { token: await generateToken(user, 'secretKey') };
};