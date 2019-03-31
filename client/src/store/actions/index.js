import { getCategories, addCategory, updateCategory, deleteCategory } from './category';
import { signUp, signIn, twoFactorAuthenticate, forgotPassword, resetPassword, signOut } from './authenticate';
import { getCurrentUser, changePassword } from './user';
import { getTodos, addTodo, doneTodo, updateTodo, deleteTodo } from './todo';
import { getNotes, addNote, updateNote, deleteNote } from './note';
import message from './message';

// using actions
export default {
    signUp,
    signIn,
    twoFactorAuthenticate,
    forgotPassword,
    resetPassword,
    signOut,
    getCurrentUser,
    changePassword,
    getCategories,
    addCategory,
    updateCategory,
    deleteCategory,
    getTodos,
    addTodo,
    doneTodo,
    updateTodo,
    deleteTodo,
    getNotes,
    addNote,
    updateNote,
    deleteNote,
    message
};