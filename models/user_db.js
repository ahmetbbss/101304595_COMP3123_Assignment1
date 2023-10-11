const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the schema for your user collection
const userSchema = new Schema({
    username: {
        type: String,
        maxlength: 100,
        required: true, // Primary Key
        unique: true
    },
    email: {
        type: String,
        maxlength: 50,
        required: true,
        unique: true
    },
    password: {
        type: String,
        maxlength: 50
    }
});

// Create a Mongoose model for the user collection
const User = mongoose.model('User', userSchema);

module.exports = User;
