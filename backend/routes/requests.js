const express = require('express');
const requests = express.Router();

// Access all requests
requests.get('/', function(req, res, next) {
  res.json({});
});

requests.get('/request_money', function(req, res, next) {
  res.json({});
});

requests.get('/request_money/:request_money_id', function(req, res, next) {
  res.json({});
});

module.exports = requests;
