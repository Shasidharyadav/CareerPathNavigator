const router = require('express').Router();
let Mentor = require('../models/Mentor');

router.route('/').get((req, res) => {
  Mentor.find()
    .then(mentors => res.json(mentors))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const bio = req.body.bio;
  const contact = req.body.contact;
  const expertise = req.body.expertise;

  const newMentor = new Mentor({ name, bio, contact, expertise });

  newMentor.save()
    .then(() => res.json('Mentor added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;

