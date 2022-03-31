const { getQuestions, addQuestions, searchQuestion, postAnswer } = require('../Service/questions.service');

const getQuestion = async(req, res) => {
    try {
        const {questionId} = req.query;
        const questions = await getQuestions(questionId);
        res.json({ status: true, questions});
        return;
    }
    catch (error) {
        console.log(error)
        res.json(error);
    }
}

const searchQuestions = async(req, res) => {
    try {
        const { search } = req.query;
        const questions = await searchQuestion(search);
        res.json({ status: true, questions});
        return;
    }
    catch (error) {
        console.log(error)
        res.json(error);
    }
}

const addQuestion = async(req, res) => {
    try {
        const title = req.body.title;
        const body = req.body.body;
        const userId = res.locals.userId;
        const tags = req.body.tags;
        const {questions, answers} = await addQuestions(title, body, userId, tags);
        res.json({ status: true, questions, answers});
        return;
    }
    catch (error) {
        console.log(error)
        res.json(error);
    }
}

const addAnswers = async(req, res) => {
    try {
        const answer = req.body.answer;
        const questionId = req.body.questionId;
        const userId = res.locals.userId;
        const answers = await postAnswer(answer, userId, questionId);
        res.json({ status: true, answers});
        return;
    }
    catch (error) {
        console.log(error)
        res.json(error);
    }
}

module.exports = {
    addQuestion,
    getQuestion,
    addAnswers,
    searchQuestions
}