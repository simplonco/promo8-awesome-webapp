const express = require('express');
const router = express.Router();
const Learner = require('../models/learner');

router.get('/list', (request, response) =>{
  Learner.find((error, learners) =>{
    if (error) {
      response.send(error);
    }
    response.render('learners/list', { learners });
  });
});

router.get('/add', (request, response) =>{
    response.render('learners/add');
});

router.post('/add', (request, response) =>{
    const learner = new Learner(request.body);
    learner.save((error) => {
      response.redirect('/list');
    });
});

module.exports = router;
