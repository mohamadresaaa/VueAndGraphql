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

    // compare password
    const isMatch = await user.comparePassword(password);

    // if the password was not equal
    if(!isMatch) throw new Error('Incorrect email or password');
    
    // otherwise
    return user;
};