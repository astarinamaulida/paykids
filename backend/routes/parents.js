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


// SendMoney {
//   id: number;
//   child_id: string;
//   parent_id: string
//   send_money_note: string;   // should be $5, $10, $15, $20, $50, $100 
//   send_amount: number
//   created_at: datetime [default: `now()`];
// }

parents.post('/parents/:parents_id/send_money/:child_id', function(req, res, next) {
  res.json({});
});


module.exports = parents;
