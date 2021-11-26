const express = require('express');
const requests = express.Router();

// Access all requests
requests.get('/', function(req, res, next) {
  res.json({});
});

requests.get('/request_money/:child_id', function(req, res, next) {
  res.json({});
});

requests.get('/request_money/:child_id/:request_money_id', function(req, res, next) {
  res.json({});
});

module.exports = requests;
