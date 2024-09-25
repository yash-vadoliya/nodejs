const mongoose = require('mongoose');
const appSchema = new mongoose.Schema({
    name: {
        type: 'string',
        required: true
    },
    designation: {
        type: 'string',
        required: true
    },
    salary: {
        type: 'string',
        required: true
    },
    experiance: {
        type: 'string',
        required: true
    },
    city: {
        type: 'string',
        required: true
    },
});

const app_model = mongoose.model('app_model', appSchema);
module.exports = app_model;