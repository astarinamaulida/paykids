const express = require('express');
const children = express.Router();

// Access all children
children.get('/', function(req, res, next) {
  res.json({});
});

children.get('/:child_id', function(req, res, next) {
  res.json({});
});
children.get('/:child_id/balance', function(req, res, next) {
  res.json({});
});

children.get('/:child_id/transactions', function(req, res, next) {
  res.json({});
});

children.get('/:child_id/transactions/:transaction_id', function(req, res, next) {
  res.json({});
});

module.exports = children;
