const mongoose = require('mongoose');

const learnerSchema = mongoose.Schema({
  lastName: {type:String, required: true},
  firstName: {type:String, required: true}
});

module.exports = mongoose.model('Learner', learnerSchema)
