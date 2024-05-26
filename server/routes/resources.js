const router = require('express').Router();
let Resource = require('../models/Resource');

router.route('/').get((req, res) => {
  Resource.find()
    .then(resources => res.json(resources))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const type = req.body.type;
  const link = req.body.link;

  const newResource = new Resource({ title, description, type, link });

  newResource.save()
    .then(() => res.json('Resource added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
