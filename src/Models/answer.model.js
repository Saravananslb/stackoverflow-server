const mongoose = require('mongoose');

const answerSchema = mongoose.Schema({
    answer: {
        type: String
    },
    userId: {
        type: String
    },
    questionId: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model('answers', answerSchema);