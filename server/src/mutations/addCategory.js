module.exports = async (_, {
    title,
    url
}, {
    Category
}) => {
    // set url

    // checked title exists
    const titleExists = await Category.findOne({ title });
    if(titleExists) throw new Error('Title is already taken');

    // checked url exists
    const urlExists = await Category.findOne({ url });
    if(urlExists) throw new Error('url is already taken');

    // create category
    let newCategory = await Category({
        title,
        url
    }).save();

    // return it
    return newCategory;
};