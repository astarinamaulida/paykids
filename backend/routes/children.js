const express = require('express');
const children = express.Router();


let childAccountInfo = {
  id: 1,
  child_id: 1, 
  firstName: "Tina",
  lastName: "Toaster",
  accountNumber: '1',
  accountBalance: 500,
  accountCVV: 111,
  expiry_month: 10,
  expiry_day: 22
}

// Access all children
children.get('/', function(req, res, next) {
  console.log("http://localhost:3001/api/children");
  res.json("http://localhost:3001/api/children");
});


children.get('/:child_id', function(req, res, next) {

  res.json({});
});


// interface child_balance {
//   id: number;
//   firstName: string;
//   account_balance: number;
// }
children.get('/:child_id/balance', function(req, res, next) {
  console.log("http://localhost:3001/api/children/:child_id/balance");
  childBalance = {
    "id" : childAccountInfo.id,
    "first name" : childAccountInfo.firstName,
    "balance": childAccountInfo.accountBalance
  }
  res.json(childBalance);
});


// interface recentTransactions {
//   id: number;
//   child_id: string;
//   account_number: string;
//   transaction_amount: number;
//   transaction_note: string;
//   transaction_date: Date;  // when created it needs a date now
// }

children.get('/:child_id/transactions', function(req, res, next) {
  console.log("http://localhost:3001/api/children/:child_id/transactions");
  const transactions = [
    { id: 1 , child_id: 1, account_number: 1, transaction_amount: 50, transaction_note: 'Saphora'},
    { id: 2 , child_id: 2, account_number: 2, transaction_amount: 52, transaction_note: 'Game'},
    { id: 3 , child_id: 3, account_number: 3, transaction_amount: 53, transaction_note: 'Saphora'}
  ];

  res.json(transactions);
});

children.get('/:child_id/transactions/:transaction_id', function(req, res, next) {
  console.log("http://localhost:3001/api/children/:child_id/transactions/:transaction_id");
  const transactions = [
    { id: 1 , child_id: 1, account_number: 1, transaction_amount: 50, transaction_note: 'Saphora'},
    { id: 2 , child_id: 2, account_number: 2, transaction_amount: 52, transaction_note: 'Game'},
    { id: 3 , child_id: 3, account_number: 3, transaction_amount: 53, transaction_note: 'Saphora'}
  ];
    // const transaction = transactions[transaction_id];
    const transaction = transactions[0];
  res.json(transaction);
});

// Use for dashboard with credit card view
// data to be revised
// /api/children/:child_id/:balance_id
// interface childAccount {
  // id: number;
  // Child_id: string; 
  // first_name: string;
  // last_name: string;
  // Account_number: string;
  // account_balance: number;
  // Account_cvv: number;
  // expiry_date: Date;
// }

children.get('/:child_id/account_data/:account_id', function(req, res, next) {
  console.log("http://localhost:3001/api/children//:child_id/account_data/:account_id");
  res.json(childAccountInfo);
});

// to be made post for postgres
children.get('/:child_id/account_data/:account_id/update_info', function(req, res, next) {
  console.log("http://localhost:3001/api/children/:child_id/account_data/:account_id/update_info");
    // update the follow
    // accountCVV: 222,
    // expiry_month: 11,
    // expiry_day: 24
  childAccountInfo = {
    id: 1,
    child_id: 1, // 
    firstName: "Tina",
    lastName: "Toaster",
    accountNumber: '1',
    accountBalance: 500,
    accountCVV: 222,   // add random from 111 to 999 generator
    expiry_month: 11,  // add random from 1 to 12 generator
    expiry_day: 24     // add random from 1 to 30 generator
  }
  res.json(childAccountInfo);
});


children.get('/:child_id/permissions', function(req, res, next) {
  res.json({});
});


children.get('/:child_id/permissions/:permission_id', function(req, res, next) {
  res.json({});
});

// children.post('/:child_id/permissions/:permission_id/update', function(req, res, next) {
children.get('/:child_id/permissions/:permission_id/update', function(req, res, next) {

  res.json({});
});


children.get('/:child_id/settings/', function(req, res, next) {
  res.json({});
});

// children.post('/:child_id/setting/update', function(req, res, next) {
children.get('/:child_id/setting/update', function(req, res, next) {

  res.json({});
});



// currently only 1 permission
// interface accountSetting {
//   id: string;
//   parent_id string;
//   active: boolean;  
//   updated_at: Date;
// }
let accountSettings = {
  id: 1,
  parent_id: 1,
  active: true
 }

children.get('/:child_id/account_status', function(req, res, next) {
  console.log("http://localhost:3001/api/children/:child_id/account_status");
  res.json(accountSettings);
});

// to be made post for postgress setup
children.get('/:child_id/account_status/update', function(req, res, next) {
  console.log("http://localhost:3001/api/children/:child_id/account_status/update");
   // functions to make true/toggle

  accountSettings = {
    id: 1,
    parent_id: 1,
    active: false
   }
  res.json(accountSettings);
});


module.exports = children;
