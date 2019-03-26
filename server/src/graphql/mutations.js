import { signUp, signIn, forgotPassword, resetPassword } from './authenticate';
import { addCategory, updateCategory, deleteCategory } from './category';
import { addTodo, doneTodo, updateTodo, deleteTodo } from './todo';
import { addNote, updateNote, deleteNote } from './note';
import { addTicket } from './ticket';
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
    deleteTodo,
    addNote,
    updateNote,
    deleteNote,
    addTicket
};