const express = require('express');
const requests = express.Router();

// Access all requests
requests.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = requests;
