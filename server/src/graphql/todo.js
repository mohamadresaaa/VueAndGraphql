export const getTodos = async (_, { userId }, { Todo }) => (await Todo.find({ user: userId }));

export const addTodo = async (_, { content, status, userId }, { Todo }) => {
    // create todo
    let newTodo = await Todo({
        content,
        status,
        user: userId
    }).save();

    // return it
    return newTodo;
};