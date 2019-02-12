export const getTodos = async (_, args, { Todo }) => {
    return await Todo.find();
};

export const addTodo = async (_,{ text, status, user },{ Todo }) => {
    // create todo
    let newTodo = await Todo({
        text,
        status,
        user
    }).save();

    // return it
    return newTodo;
};