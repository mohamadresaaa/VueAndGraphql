import { signUp, signIn } from './authenticate';
import { addCategory } from './category';
import { addTodo } from './todo';
import { addNote } from './note';
import { changePassword } from './user';

module.exports = {
    signUp,
    signIn,
    changePassword,
    addCategory,
    addTodo,
    addNote
};