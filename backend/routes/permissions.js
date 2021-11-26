const express = require('express');
const permissions = express.Router();

// Access all permissions
permissions.get('/', function(req, res, next) {
  res.json({});
});

module.exports = permissions;
