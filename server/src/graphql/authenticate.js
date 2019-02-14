import generateAvatar from '../lib/generateAvatar';
import generateToken from '../lib/generateToken';
import { validationUsername, separatingEmail } from '../lib/regex';

export const signUp = async (_, { username, email, password }, { User }) => {
    // check username is valid
    if(!validationUsername.test(username)) 
        throw new Error('Username is not valid');

    // checked username exists
    const usernameExists = await User.findOne({ username });
    if(usernameExists)
        throw new Error('Username is already taken');

    // checked email exists
    const emailExists = await User.findOne({ email });
    if(emailExists) 
        throw new Error('Email is invalid or already taken');

    // create user
    let newUser = await User({
        name: email.replace(separatingEmail, ''),
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

export const forgotPassword = async (_, { email }, { User }) => {
    // find user
    let user = await User.find({ email });

    // if not, handle it
    if(!user) throw new Error('The email you entered is not correct');

    // send mail
  
    // return message
    return { message: 'Password recovery link sent' };
};