import errorHandle from '../lib/errorHandle';

export const getTodos = async (_, { userId }, { Todo }) => {
    try {
        // find todos
        return await Todo.find({ user: userId });
    } catch (err) {
        errorHandle(err);
    }
};

export const addTodo = async (_, { content, status, userId }, { Todo }) => {
    try {
        // create todo
        let newTodo = await Todo({
            content,
            status,
            user: userId
        }).save();

        // return it
        return newTodo;
    } catch (err) {
        errorHandle(err);
    }
};

export const doneTodo = async (_, { todoId, userId }, { Todo }) => {
    try {
        // find and update status
        return await Todo.findOneAndUpdate(
            { _id: todoId, user: userId },
            { status: true },
            { new: true }
        );
    } catch (err) {
        errorHandle(err);
    }
};

export const updateTodo = async (_, { todoId, userId, content, status }, { Todo }) => {
    try {
        // find and update it
        return await Todo.findOneAndUpdate(
            { _id: todoId, user: userId },
            { $set: { content, status } },
            { new: true }
        );
    } catch (err) {
        errorHandle(err);
    }
};