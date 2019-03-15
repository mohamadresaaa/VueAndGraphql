import { getCategories, addCategory, updateCategory } from './category';
import { signUp, signIn, forgotPassword, resetPassword, signOut } from './authenticate';
import { getCurrentUser, changePassword } from './user';
import { getTodos, addTodo, updateTodo } from './todo';
import { getNotes, getNote, addNote, updateNote } from './note';
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
    updateCategory,
    getTodos,
    addTodo,
    updateTodo,
    getNotes,
    getNote,
    addNote,
    updateNote,
    message
};