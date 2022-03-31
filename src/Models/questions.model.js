const mongoose = require('mongoose');

const questionSchema = mongoose.Schema({
    title: {
        type: String
    },
    body: {
        type: String
    },
    userId: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    tags: {
        type: String
    }
});

module.exports = mongoose.model('questions', questionSchema);