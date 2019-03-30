import { generateToken, generateAvatar, generateTwoFactorCode } from '../lib/generator';
import { validationUsername, separatingEmail } from '../lib/regex';
import sendMail from '../lib/mail';
import errorHandle from '../lib/errorHandle';

import forgotPasswordTemplate from '../mailTemplate/forgotPassword';
import resetPasswordTemplate from '../mailTemplate/passwordRecovery';
import twoFactorAuthenticate from '../mailTemplate/twoFactorAuthenticate';


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

    try {
        // create user
        await User({
            name: email.replace(separatingEmail, ''),
            username,
            email,
            password,
            avatar: await generateAvatar(username)
        }).save();

        // return message
        return { message: 'Your account was successfully registered. Please refer to your email for activation' };
    } catch (err) {
        errorHandle(err);
    }
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

    // if twoFactorAuthWithEmail was disabled
    if(!user.twoFactorAuthWithEmail)
        return { 
            token: await generateToken(user, 'secretKey'),
            twoFactorAuthWithEmail: user.twoFactorAuthWithEmail
        };
    
    // generate unique code
    let code = await generateTwoFactorCode(user._id);

    // send code to email
    try {
        await sendMail(await twoFactorAuthenticate(user, code));
    } catch (err) {
        errorHandle(err);
    }
    
    // return it
    return { 
        token: null,
        twoFactorAuthWithEmail: user.twoFactorAuthWithEmail
    };
};

export const forgotPassword = async (_, { email }, { User }) => {
    // find user
    let user = await User.findOne({ email });

    // if not, handle it
    if(!user) throw new Error('The email you entered is not correct');

    try {
        // send mail
        await sendMail(await forgotPasswordTemplate(user));
    } catch (err) {
        errorHandle(err);
    }

    // return message
    return { message: 'Password recovery link sent' };
};

export const resetPassword = async (_, { newPassword, activeCode }, { User }) => {
    // find user
    let user = await User.findOne({ activeCode });

    // if not, handle it
    if(!user) throw new Error('The code is not valid');

    try {
        // set new password
        user.password = newPassword;
        await user.save();

        // send mail
        await sendMail(await resetPasswordTemplate(user));
    } catch (err) {
        errorHandle(err);
    }

    // return message
    return { message: 'Password recovery was successful' };
};