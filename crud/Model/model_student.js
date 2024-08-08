const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    enrollmentno: {
        type: String,
        required: true,
    },
    dob: {
        type: String,
        required: true,
    },
    bloudgroup: {
        type: String,
        required: true,
    },
    mobile: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },

})

const student = mongoose.model('Student', studentSchema);
module.exports = student;