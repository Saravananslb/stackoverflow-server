const mongoose = require('mongoose');

const busesSchema = mongoose.Schema({
    name: {
        type: String
    },
    from: {
        type: String
    },
    to: {
        type: String,
    },
    dateTime: {
        type: Date
    },
    duration: {
        type: Number
    },
    star: {
        type: String
    },
    price: {
        type: Number
    }
});

module.exports = mongoose.model('buses', busesSchema);