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