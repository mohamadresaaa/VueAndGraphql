const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { v4 } = require('uuid');

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
        default: v4()
    }
});

userSchema.pre('save', async function(next) {
    if(!this.isModified('password')) return next();

    try {
        let salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (err) {
        next(err);
    }
});

module.exports = mongoose.model('User', userSchema);