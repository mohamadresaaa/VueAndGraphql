import { getCategories, addCategory } from './category';
import { signUp, signIn, signOut } from './authenticate';
import { getCurrentUser } from './user';
import { getTodos } from './todo';

// using actions
export default {
    signUp,
    signIn,
    signOut,
    getCurrentUser,
    getCategories,
    addCategory,
    getTodos
};