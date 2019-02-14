export const getCurrentUser = async (_, args, { User, currentUserId }) => {
    return await User.findById(currentUserId);
};

export const changePassword = async (_, { oldPassword, newPassword, userId }, { User }) => {
    // find user
    let user = await User.findById(userId);

    // if not, handle it
    if(!user) throw new Error('User not found');

    // compare password
    let isMatch = await user.comparePassword(oldPassword);

    // if the password was not equal
    if(!isMatch) throw new Error('Incorrect password');

    // set new password
    user.password = newPassword;
    await user.save();

    // return message
    return { message: 'Password was successfully changed.' };
};