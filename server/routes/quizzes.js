const router = require('express').Router();
let Quiz = require('../models/Quiz');

router.route('/').get((req, res) => {
  Quiz.find()
    .then(quizzes => res.json(quizzes))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const title = req.body.title;
  const questions = req.body.questions;

  const newQuiz = new Quiz({ title, questions });

  newQuiz.save()
    .then(() => res.json('Quiz added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
