const express = require('express');
const { getBuses, bookBus, getUserBookings } = require('../Controller/bus.controller');
const isAuthenticated  = require('../Middleware/auth.middleware');
const router = express.Router();

router.post('/create', isAuthenticated, bookBus);
router.get('/bookings', isAuthenticated, getUserBookings);
router.get('/get', getBuses);

module.exports = router;