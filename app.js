const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const app = express();
const routes = require('./routes');
require ('./db');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(helmet());

app.get('/', (req, res) => {
  return res.send({ message: 'Hola!'});
});

app.use('/api/v1', routes);

module.exports = app;
