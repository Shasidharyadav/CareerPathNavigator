const router = require('express').Router();
let CareerPath = require('../models/CareerPath');

router.route('/').get((req, res) => {
  CareerPath.find()
    .then(careerPaths => res.json(careerPaths))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  CareerPath.findById(req.params.id)
    .then(careerPath => res.json(careerPath))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const requiredSkills = req.body.requiredSkills;
  const jobRoles = req.body.jobRoles;
  const averageSalary = req.body.averageSalary;
  const steps = req.body.steps;

  const newCareerPath = new CareerPath({
    title,
    description,
    requiredSkills,
    jobRoles,
    averageSalary,
    steps,
  });

  newCareerPath.save()
    .then(() => res.json('Career Path added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  CareerPath.findById(req.params.id)
    .then(careerPath => {
      careerPath.title = req.body.title;
      careerPath.description = req.body.description;
      careerPath.requiredSkills = req.body.requiredSkills;
      careerPath.jobRoles = req.body.jobRoles;
      careerPath.averageSalary = Number(req.body.averageSalary);
      careerPath.steps = req.body.steps;

      careerPath.save()
        .then(() => res.json('Career Path updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  CareerPath.findByIdAndDelete(req.params.id)
    .then(() => res.json('Career Path deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
