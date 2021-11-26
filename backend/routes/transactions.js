const express = require('express');
const transactions = express.Router();

// Access all transactions
transactions.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = transactions;
