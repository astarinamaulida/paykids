const express = require('express');
const children = express.Router();

/* GET home page. */
children.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = children;
