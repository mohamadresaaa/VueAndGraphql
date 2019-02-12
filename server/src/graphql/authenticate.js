import generateAvatar from '../lib/generateAvatar';
import generateToken from '../lib/generateToken';

export const signUp = async (_, { username, email, password }, { User }) => {
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
        avatar: await generateAvatar(username)
        // generate name
    }).save();

    // return it
    return newUser;
};

export const signIn = async (_, { email, password }, { User }) => {
    // find user
    const user = await User.findOne({ email });

    // if not user exists
    if(!user) throw new Error('Incorrect email or password');

    // if user is disable
    if(!user.isActive) throw new Error('Your account is disabled, please confirm your email');

    // compare password
    const isMatch = await user.comparePassword(password);

    // if the password was not equal
    if(!isMatch) throw new Error('Incorrect email or password');
    
    // otherwise generate token
    return { token: await generateToken(user, 'secretKey') };
};