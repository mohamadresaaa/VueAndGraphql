export const getTodos = async (_, args, { Todo }) => {
    return await Todo.find();
};

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