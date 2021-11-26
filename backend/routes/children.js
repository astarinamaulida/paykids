const express = require('express');
const children = express.Router();

// Access all children
children.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = children;
