const express = require('express');
const router = express.Router();
const { wordCount } = require('../public/methods');

router.get('/', (req, res) => {
    let variable_i_needed = req.app.locals.variable_you_need;

    res.render('../views/index.pug', { questions: variable_i_needed });

});

router.get('/detail/:id', (req, res) => {
    let variable_i_needed = req.app.locals.variable_you_need;//all questions
    let singleQuestion = variable_i_needed.find((question) => question.id === req.params.id);//single question with id
    let allText;
    for (let index = 0; index < singleQuestion.answers.length; index++) {
        allText += singleQuestion.answers[index].answer;
        for (let i = 0; i < singleQuestion.answers[index].comments.length; i++) {
            allText += singleQuestion.answers[index].comments[i]
        }
    }
    let descriptionWordCounts = wordCount(allText)
    res.render('../views/question.pug', { question: singleQuestion, wordCounts: descriptionWordCounts });
});

module.exports = router;