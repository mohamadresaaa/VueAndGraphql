import errorHandle from '../lib/errorHandle';

export const getCurrentUser = async (_, args, { User, currentUserId }) => {
    try {
        return await User.findById(currentUserId);
    } catch (err) {
        errorHandle(err);
    }
};

export const changePassword = async (_, { oldPassword, newPassword, userId }, { User }) => {
    // find user
    let user = await User.findById(userId);

    // compare password
    let isMatch = await user.comparePassword(oldPassword);

    // if the password was not equal
    if(!isMatch) throw new Error('Incorrect password');

    try {
        // set new password
        user.password = newPassword;
        await user.save();
    } catch (err) {
        errorHandle(err);
    }

    // return message
    return { message: 'Password was successfully changed' };
};