const express = require('express');
const router = express.Router();
const learners = require('./learners.js');
router.get('/', (request, response) =>{
  response.render('homepage');
});
router.use(learners);

module.exports = router;
