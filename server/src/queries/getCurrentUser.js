module.exports = async (_, args, { User, currentUserId }) => {
    return await User.findById(currentUserId);
};