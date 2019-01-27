const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        default: null
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    role: {
        type: String,
        default:'user' 
    },
    avatar: {
        type: String
    },
    joinDate: {
        type: Date,
        default: Date.now
    },
    isActive: {
        type: Boolean,
        default: false
    },
    activeCode: {
        type: String,
        default: '1234'
    }
});

module.exports = mongoose.model('User', userSchema);