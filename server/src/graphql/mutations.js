import { signUp, signIn, forgotPassword, resetPassword } from './authenticate';
import { addCategory, updateCategory, deleteCategory } from './category';
import { addTodo, doneTodo, updateTodo } from './todo';
import { addNote, updateNote } from './note';
import { changePassword } from './user';

module.exports = {
    signUp,
    signIn,
    forgotPassword,
    resetPassword,
    changePassword,
    addCategory,
    updateCategory,
    deleteCategory,
    addTodo,
    doneTodo,
    updateTodo,
    addNote,
    updateNote
};