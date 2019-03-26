import mongoose from 'mongoose';
import shortid from 'shortid';

const ticketSchema = new mongoose.Schema({
    subject: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    },
    code: {
        type: String,
        unique: true,
        default: `H-${shortid.generate()}`
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    assignee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        default: null
    }
}, { timestamps: true });

export default mongoose.model('Ticket', ticketSchema);