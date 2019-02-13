export const addNote = async (_, { title, content, user }, { Note }) => {
    // create note
    let newNote = await Note({
        title,
        content,
        user
    }).save();

    // return it
    return newNote;
};