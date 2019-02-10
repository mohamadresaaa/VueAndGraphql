import { getCategories, addCategory } from './categories';
import { signUp, signIn, signOut } from './authenticate';
import { getCurrentUser } from './users';

// using actions
export default {
    signUp,
    signIn,
    signOut,
    getCurrentUser,
    getCategories,
    addCategory
};