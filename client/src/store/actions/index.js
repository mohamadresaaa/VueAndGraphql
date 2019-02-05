import { getCategories } from './categories';
import { signIn, signOut } from './authenticate';
import { getCurrentUser } from './users';

export default {
    signIn,
    signOut,
    getCurrentUser,
    getCategories
};