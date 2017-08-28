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

router.post('/edit/:id', (request, response) => {
  Learner.findByIdAndUpdate(request.params.id, request.body, (error)=>{
    if(error) response.send(error);
    response.redirect('/list');
  });
});

router.get('/remove/:id', (request, response) => {
  Learner.findByIdAndRemove(request.params.id, (error) => {
    if(error) response.send(error);
    response.redirect('/list');
  });
});

router.get('/edit/:id', (request, response) => {
  console.log(request.params);
  Learner.findById(request.params.id, (error, learner) =>{
    if(error)  response.send(error);
    response.render("learners/edit", { learner });
  });
});

module.exports = router;
