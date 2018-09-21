var proxy = require('express-http-proxy');
var fetch = require('node-fetch');
const express = require('express');
let app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');

app.use('/:id', express.static('./'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use('/api/header', proxy('http://localhost:7763'));
app.use('/api/photos', proxy('http://localhost:3001'));
app.use('/api/sidebar', proxy('http://localhost:7878'));
// app.use('/api', (req, res) => {
//   app.get('/reviews/:id', proxy('http://localhost:3002'));
// });
app.get('/api/reviews/:id', (req, res) => {
  console.log(req);
  let url = req.url.slice(4);
  console.log(url);
  fetch(`http://localhost:3002${url}`)
  .then(response => response.json())
  .then(results => res.send(results));
});

let port = 1335;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});