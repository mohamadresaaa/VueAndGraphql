module.exports = async (_, {
    username,
    email,
    password
}, {
    User
}) => {
    // checked username exists
    const usernameExists = await User.findOne({ username });
    if(usernameExists) throw new Error('Username is already taken');

    // checked email exists
    const emailExists = await User.findOne({ email });
    if(emailExists) throw new Error('Email is invalid or already taken');

    // create user
    let newUser = await User({
        username,
        email,
        password,
        // generate name
    }).save();

    // return it
    return newUser;
};