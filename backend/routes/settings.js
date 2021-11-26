const express = require('express');
const settings = express.Router();

// Access all settings
settings.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = settings;
