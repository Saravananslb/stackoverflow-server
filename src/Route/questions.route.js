const express = require('express');
const { addQuestion, getQuestion, searchQuestions, addAnswers } = require('../Controller/questions.controller');
const isAuthenticated  = require('../Middleware/auth.middleware');
const router = express.Router();

router.post('/create', isAuthenticated, addQuestion);
router.get('/search', searchQuestions);
router.get('/get', getQuestion);
router.post('/answer', isAuthenticated, addAnswers);

module.exports = router;