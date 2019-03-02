import { getCategories, addCategory } from './category';
import { signUp, signIn, forgotPassword, resetPassword, signOut } from './authenticate';
import { getCurrentUser, changePassword } from './user';
import { getTodos, addTodo } from './todo';
import { getNotes, getNote, addNote } from './note';
import message from './message';

// using actions
export default {
    signUp,
    signIn,
    forgotPassword,
    resetPassword,
    signOut,
    getCurrentUser,
    changePassword,
    getCategories,
    addCategory,
    getTodos,
    addTodo,
    getNotes,
    getNote,
    addNote,
    message
};