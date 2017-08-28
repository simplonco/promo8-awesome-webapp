const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const router = require('./routes/index');
const path = require('path');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/promo8');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(router);

app.listen(3001, () => {
  console.log("Vous êtes connectés sur le port 3001");
});
