const express = require('express');
const router = express.Router();
const Learner = require('../models/learner');

router.get('/list', (request, response) =>{
  Learner.find((error, learners) =>{
    console.log(learners);
      response.render('learners/list', { learners });
  })

});


module.exports = router;
