import { getCategories } from './categories';
import { signIn, signOut } from './authenticate';
import { getCurrentUser } from './users';

export const actions = {
    signIn,
    signOut,
    getCurrentUser,
    getCategories
};