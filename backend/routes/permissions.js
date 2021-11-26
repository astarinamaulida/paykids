const express = require('express');
const permissions = express.Router();

// Access all permissions
permissions.get('/', function(req, res, next) {
  res.json({});
});

permissions.get('/account_status/:child_id', function(req, res, next) {
  res.json({});
});

permissions.get('/account_status/:child_id/:permission_id', function(req, res, next) {
  res.json({});
});

module.exports = permissions;
