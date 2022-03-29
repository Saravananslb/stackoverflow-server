const { getBus, bookTicket, getBookings } = require('../Service/bus.service');

const getBuses = async(req, res) => {
    try {
        const from = req.query.from;
        const to = req.query.to;
        const date = req.query.date ? new Date(req.query.date) : new Date();
        const bus = await getBus(from, to, date);
        res.json({ status: true, bus});
        return;
    }
    catch (error) {
        console.log(error)
        res.json(error);
    }
}

const getUserBookings = async(req, res) => {
    try {
        const userId = res.locals.userId;
        const tickets = await getBookings(userId);
        res.json({ status: true, tickets});
        return;
    }
    catch (error) {
        console.log(error)
        res.json(error);
    }
}

const bookBus = async(req, res) => {
    try {
        const id = req.body.id;
        const tickets = req.body.tickets;
        const userId = res.locals.userId;
        const ticket = await bookTicket(id, tickets, userId);
        res.json({ status: true, ticket});
        return;
    }
    catch (error) {
        console.log(error)
        res.json(error);
    }
}

module.exports = {
    getBuses,
    bookBus,
    getUserBookings
}