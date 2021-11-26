const express = require('express');
const parents = express.Router();

// Access all parents
parents.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = parents;
