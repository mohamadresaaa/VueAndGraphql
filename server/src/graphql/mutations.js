import { signUp, signIn, forgotPassword } from './authenticate';
import { addCategory } from './category';
import { addTodo } from './todo';
import { addNote } from './note';
import { changePassword } from './user';

module.exports = {
    signUp,
    signIn,
    forgotPassword,
    changePassword,
    addCategory,
    addTodo,
    addNote
};