export const getTodos = async (_, { userId }, { Todo }) => (await Todo.find({ user: userId }));

export const addTodo = async (_,{ content, status, user },{ Todo }) => {
    // create todo
    let newTodo = await Todo({
        content,
        status,
        user
    }).save();

    // return it
    return newTodo;
};