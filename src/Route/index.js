const express = require('express');
const authRouter = require('./auth.route');
const busRouter = require('./questions.route');

const app = express();

app.use('/auth', authRouter);
app.use('/questions', busRouter);

module.exports = app;