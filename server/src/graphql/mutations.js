import { signUp, signIn, forgotPassword, resetPassword } from './authenticate';
import { addCategory } from './category';
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
    addTodo,
    addNote
};