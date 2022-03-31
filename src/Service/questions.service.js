const questionsSchema = require('../Models/questions.model');
const answerSchema = require('../Models/answer.model');
const { endOfDay, startOfDay } = require('date-fns');

const addQuestions = async(title, body, userId, tags) => {
    const questions = new questionsSchema({
        title, body, userId, tags
    })
    const createdQuestions = await questions.save();
    
    return createdQuestions._doc;
}

const postAnswer = async(answer, userId, questionId) => {
    const answers = new answerSchema({
        answer, userId, questionId
    })
    const createdAnswers = await answers.save();
    
    return createdAnswers._doc;
}

const getQuestions = async(questionId) => {
    let questions;
    let answers = [];
    if (questionId)
        {questions = await questionsSchema.findById(questionId);
        answers = await answerSchema.find({questionId});}
    else
        questions = await questionsSchema.find({userId: userId});
    return {questions, answers};
}

const searchQuestion = async(search) => {
    const questions = await questionsSchema.find();
    const question = questions.filter(item => (item.body.includes(search) || item.title.includes(search)));
    return question;
}


module.exports = {
    addQuestions,
    getQuestions,
    searchQuestion,
    postAnswer
}