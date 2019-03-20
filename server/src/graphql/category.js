import { slug } from '../lib/regex';
import errorHandle from '../lib/errorHandle';

export const getCategories = async (_, args, { Category }) => {
    try {
        // find categories
        return await Category.find();
    } catch (err) {
        errorHandle(err);
    }
};

export const addCategory = async (_, { title, url }, { Category }) => {
    try {
        // set url
        url = url.replace(slug, '-');
        
        // checked title exists
        const titleExists = await Category.findOne({ title });
        if(titleExists) throw new Error('Title is already taken');

        // checked url exists
        const urlExists = await Category.findOne({ url });
        if(urlExists) throw new Error('Url is already taken');

        // create category
        let newCategory = await Category({
            title,
            url
        }).save();

        // return it
        return newCategory;
    } catch (err) {
        errorHandle(err);
    }
};

export const updateCategory = async (_, { categoryId, title, url }, { Category }) => {
    try {
        // set url
        url = url.replace(slug, '-');

        // find and update category
        let category = await Category.findOneAndUpdate(
            { _id: categoryId },
            { $set: { title, url } },
            { new: true }
        );

        // return it
        return category;
    } catch (err) {
        // title duplicate 
        if(new RegExp('title_1 dup key').test(err.message))
            throw new Error('Title is already taken');

        // url duplicate 
        else if(new RegExp('url_1 dup key').test(err.message))
            throw new Error('Url is already taken');

        // otherwise
        else
            errorHandle(err);
    }
};

export const deleteCategory = async (_, { categoryId }, { Category }) => {
    try {
        // find and remove category
        let category = await Category.findOneAndRemove({ _id: categoryId });

        // return it
        return category;        
    } catch (err) {
        errorHandle(err);
    }
};