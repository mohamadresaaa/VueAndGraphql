module.exports = async (_, args, { Category }) => {
    let categories = await Category.find();
    categories.sort((a, b) => a['title'] < b['title'] ? -1 : 1);
    return categories;
};