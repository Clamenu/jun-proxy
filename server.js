const _ = require('underscore');
const express = require('express');
let app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');

app.use('/:id', express.static('./'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));

let port = 1335;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});