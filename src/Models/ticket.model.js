const mongoose = require('mongoose');

const ticketSchema = mongoose.Schema({
    busId: {
        type: String
    },
    userId: {
        type: String
    },
    tickets: {
        type: Array
    },
    from: {
        type: String
    },
    to: {
        type: String
    },
    dateTime: {
        type: Date
    },
    price: {
        type: Number
    }

})

module.exports = mongoose.model('tickets', ticketSchema);