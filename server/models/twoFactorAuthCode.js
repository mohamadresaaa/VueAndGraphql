import mongoose from 'mongoose';

const twoFactorAuthCodeSchema = new mongoose.Schema({
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

export default mongoose.model('TwoFactorAuthCode', twoFactorAuthCodeSchema);