const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    displayname: {
        type: String,
    }
}, { 
    timestamps: true
 });

const usermodel = mongoose.model('user', userSchema);
module.exports = usermodel;