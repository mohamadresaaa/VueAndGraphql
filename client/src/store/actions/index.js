import { getCategories, addCategory } from './category';
import { signUp, signIn, signOut } from './authenticate';
import { getCurrentUser } from './user';

// using actions
export default {
    signUp,
    signIn,
    signOut,
    getCurrentUser,
    getCategories,
    addCategory
};