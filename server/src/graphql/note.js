export const getNotes = async (_, { userId }, { Note }) => (await Note.find({ user: userId }));

export const getNote = async (_, { id, userId }, { Note }) => {
    // find note
    let note = await Note.findOne({ _id: id, user: userId });

    // if not, handle it
    if(!note) throw new Error('not found');

    // otherwise return note
    return note;
};

export const addNote = async (_, { title, content, userId }, { Note }) => {
    // create note
    let newNote = await Note({
        title,
        content,
        user: userId
    }).save();

    // return it
    return newNote;
};