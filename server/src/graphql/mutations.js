import { signUp, signIn, forgotPassword, resetPassword } from './authenticate';
import { addCategory, updateCategory } from './category';
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
    addTodo,
    doneTodo,
    updateTodo,
    addNote,
    updateNote
};