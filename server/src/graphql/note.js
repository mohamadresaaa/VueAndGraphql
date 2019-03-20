import errorHandle from '../lib/errorHandle';

export const getNotes = async (_, { userId }, { Note }) => {
    try {
        // find notes
        return await Note.find({ user: userId });
    } catch (err) {
        errorHandle(err);
    }
};

export const addNote = async (_, { title, content, userId }, { Note }) => {
    try {
        // create note
        let newNote = await Note({
            title,
            content,
            user: userId
        }).save();

        // return it
        return newNote;
    } catch (err) {
        errorHandle(err);
    }
};

export const updateNote = async (_, { noteId, userId, title, content }, { Note }) => {
    try {
        // find note and update it
        return await Note.findOneAndUpdate(
            { _id: noteId, user: userId },
            { $set: { title, content } },
            { new: true }
        );
    } catch (err) {
        errorHandle(err);
    }
};