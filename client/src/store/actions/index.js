import { getCategories, addCategory } from './category';
import { signUp, signIn, forgotPassword, signOut } from './authenticate';
import { getCurrentUser } from './user';
import { getTodos, addTodo } from './todo';
import { getNotes, addNote } from './note';

// using actions
export default {
    signUp,
    signIn,
    forgotPassword,
    signOut,
    getCurrentUser,
    getCategories,
    addCategory,
    getTodos,
    addTodo,
    getNotes,
    addNote
};