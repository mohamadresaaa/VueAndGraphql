import { getCategories, addCategory, updateCategory, deleteCategory } from './category';
import { signUp, signIn, forgotPassword, resetPassword, signOut } from './authenticate';
import { getCurrentUser, changePassword } from './user';
import { getTodos, addTodo, doneTodo, updateTodo, deleteTodo } from './todo';
import { getNotes, addNote, updateNote } from './note';
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
    deleteCategory,
    getTodos,
    addTodo,
    doneTodo,
    updateTodo,
    getNotes,
    addNote,
    updateNote,
    deleteTodo,
    message
};