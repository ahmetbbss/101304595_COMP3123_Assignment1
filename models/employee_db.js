const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the schema for your "employee" collection
const employeeSchema = new Schema({
    first_name: {
        type: String,
        maxlength: 100,
        required: true
    },
    last_name: {
        type: String,
        maxlength: 50,
        required: true
    },
    email: {
        type: String,
        maxlength: 50,
        required: true,
        unique: true
    },
    gender: {
        type: String,
        maxlength: 25,
        enum: ['Male', 'Female', 'Other']
    },
    salary: {
        type: Number,
        
    }
});

// Create a Mongoose model for the "employee" collection
const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
