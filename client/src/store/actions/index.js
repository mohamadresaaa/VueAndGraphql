import { getCategories, addCategory } from './categories';
import { signUp, signIn, signOut } from './authenticate';
import { getCurrentUser } from './users';

export default {
    signUp,
    signIn,
    signOut,
    getCurrentUser,
    getCategories,
    addCategory
};