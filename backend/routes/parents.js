const express = require('express');
const parents = express.Router();


let childrenList = [
  { id: 1 , child_id: 1, account_number: 1, request_amount: 5,  request_note: 'lunch money'},
  { id: 2 , child_id: 2, account_number: 1, request_amount: 15, request_note: 'hair thing'}
];


// Access all parents
parents.get('/', function(req, res, next) {
  res.json({});
});

parents.get('/:parents_id', function(req, res, next) {
  res.json({});
});

parents.get('/:parents_id/children/', function(req, res, next) {
  res.json({});
})

parents.get('/:parents_id/children/:child_id', function(req, res, next) {
  res.json({});
})



// interface childAccount {
  // id: number;
  // Child_id: string; 
  // first_name: string;
  // last_name: string;
  // Account_number: string;
  // account_balance: number;
// }

parents.get('/:parents_id/children/', function(req, res, next) {
  console.log("http://localhost:3001/api/parents/:parents_id/children/:child_id");
  res.json(childrenList);
});


// interface childAccount {
  // id: number;
  // Child_id: string; 
  // first_name: string;
  // last_name: string;
  // Account_number: string;
  // account_balance: number;
// }

parents.get('/:parents_id/children/:child_id', function(req, res, next) {
  console.log("http://localhost:3001/api/parents/:parents_id/children/:child_id");

  res.json(childrenList[0]);
});



// functionality moved to childrens api
parents.get('/:parents_id/request_money/', function(req, res, next) {
  res.json({});
});

// functionality moved to childrens api
parents.get('/:parents_id/request_money/:child_id', function(req, res, next) {
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
