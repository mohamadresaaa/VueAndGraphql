import { signUp, signIn, forgotPassword, resetPassword } from './authenticate';
import { addCategory, updateCategory } from './category';
import { addTodo } from './todo';
import { addNote } from './note';
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
    addNote
};