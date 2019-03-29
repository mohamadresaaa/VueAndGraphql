import mongoose from 'mongoose';

const twoFactorCodeSchema = new mongoose.Schema({
    code: {
        type: String,
        unique: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
});

export default mongoose.model('TwoFactorCode', twoFactorCodeSchema);