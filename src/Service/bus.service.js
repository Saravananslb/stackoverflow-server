const busesSchema = require('../Models/bus.model');
const ticketsSchema = require('../Models/ticket.model');
const { endOfDay, startOfDay } = require('date-fns');

const getBus = async(from, to, date) => {
    const buses = await busesSchema.find({
        from: from.toLowerCase(),
        to: to.toLowerCase(),
        dateTime: {
            $gte: startOfDay(date),
            $lte: endOfDay(date)
        }
    })
    return buses
}

const bookTicket = async(id, ticket, userId) => {
    const tickets = await busesSchema.findById(id);
    const tkt = JSON.parse(JSON.stringify(tickets));
    const newTkt = new ticketsSchema({
        busId: id,
        userId: userId,
        tickets: ticket,
        from: tickets.from,
        to: tickets.to,
        dateTime: tickets.dateTime,
        price: tickets.price * ticket.length
    })
    const created = await newTkt.save();
    const upperSeats = tkt.upperSeats.map(item => {
        if (ticket.includes(item[0].seat)){
            item[0].status = 'available';
        }
        else if (ticket.includes(item[1].seat)){
            item[1].status = 'available';
        }
        else if (ticket.includes(item[2].seat)){
            item[2].status = 'available';
        }
        return item;
    })

    const lowerSeats = tkt.lowerSeats.map(item => {
        if (ticket.includes(item[0].seat)){
            item[0].status = 'available';
        }
        else if (ticket.includes(item[1].seat)){
            item[1].status = 'available';
        }
        else if (ticket.includes(item[2].seat)){
            item[2].status = 'available';
        }
        return item;
    })

    const update = await ticketsSchema.findByIdAndUpdate(id, {lowerSeats, upperSeats});
    return created._doc;
}

const getBookings = async(userId) => {
    const tickets = await ticketsSchema.find({userId: userId});
    return tickets;
}


module.exports = {
    getBus,
    bookTicket,
    getBookings
}