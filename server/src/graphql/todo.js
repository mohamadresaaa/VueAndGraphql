export const getTodos = async (_, { userId }, { Todo }) => {
    try {
        return await Todo.find({ user: userId });
    } catch (err) {
        throw new Error(err);
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
        throw new Error(err);
    }
};

export const updateTodo = async (_, { todoId, userId, content, status }, { Todo }) => {
    try {
        // find and update it
        return await Todo.findOneAndUpdate(
            { _id: todoId, user: userId },
            { content, status }
        );
    } catch (err) {
        throw new Error(err);
    }
};