const express = require('express');
const authRouter = require('./auth.route');
const busRouter = require('./bus.route');

const app = express();

app.use('/auth', authRouter);
app.use('/bus', busRouter);

module.exports = app;