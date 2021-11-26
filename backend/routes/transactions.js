const express = require('express');
const transactions = express.Router();

// Access all transactions
transactions.get('/', function(req, res, next) {
  res.json({});
});

module.exports = transactions;
