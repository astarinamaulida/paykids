const express = require('express');
const parents = express.Router();

// Access all parents
parents.get('/', function(req, res, next) {
  res.json({});
});

parents.get('/parents/:parents_id', function(req, res, next) {
  res.json({});
});

parents.get('/parents/:parents_id/children/', function(req, res, next) {
  res.json({});
})

parents.get('/parents/:parents_id/children/:child_id', function(req, res, next) {
  res.json({});
})

parents.get('/parents/:parents_id/request_money/', function(req, res, next) {
  res.json({});
});


parents.get('/parents/:parents_id/request_money/:child_id', function(req, res, next) {
  res.json({});
});


module.exports = parents;
