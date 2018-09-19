const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const names = require('../database/businessNames.js');

const app = express();
const router = require('./routes.js');

app.get('/:nameOrId', (req, res, next) => {
  const id = parseInt(req.params.nameOrId);
  if (isNaN(id)) {
    const name = req.params.nameOrId.toLowerCase();
    if (names.includes(name)) { return next(); }
  } else {
    if (id > 0 && id <= 100) { return next(); }
  }
  res.sendStatus(404); 
});

app.use('/:nameOrId', express.static('public'));

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/', router);

app.set('port', process.env.PORT || 7878);

module.exports = app;