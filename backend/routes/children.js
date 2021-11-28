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

let transactions = [
  { id: 1 , child_id: 1, account_number: 1, transaction_amount: 50, transaction_note: 'Saphora'},
  { id: 2 , child_id: 2, account_number: 2, transaction_amount: 52, transaction_note: 'Game'},
  { id: 3 , child_id: 3, account_number: 3, transaction_amount: 53, transaction_note: 'Saphora'}
];

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
  res.json(transactions);
});


// interface recentTransactions {
//   id: number;
//   child_id: string;
//   account_number: string;
//   transaction_amount: number;
//   transaction_note: string;
//   transaction_date: Date;  // when created it needs a date now
// }
children.get('/:child_id/transactions/:transaction_id', function(req, res, next) {
  console.log("http://localhost:3001/api/children/:child_id/transactions/:transaction_id");

    // const transaction = transactions[transaction_id];
    // const transaction = transactions[0];
  res.json(transactions[0]);
});


// interface recentTransactions {
//   id: number;
//   child_id: string;
//   account_number: string;
//   transaction_amount: number;
//   transaction_note: string;
//   transaction_date: Date;  // when created it needs a date now
// }
// children.post('/:child_id/transactions/new_transaction', function(req, res, next) {
children.get('/:child_id/transactions/new/transaction', function(req, res, next) {
  console.log("http://localhost:3001/api/children//:child_id/transactions/new/transaction");

  const newTransaction = { id: 1 , child_id: 1, account_number: 1, transaction_amount: 15, transaction_note: "McD"};
  const updatedTransactionList = [... transactions, newTransaction ];
  transactions = [... updatedTransactionList ]
  res.json(transactions);
});


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
children.get('/:child_id/account_data/:account_id/update_info', function(req, res, next) {
  console.log("http://localhost:3001/api/children/:child_id/account_data/:account_id/update_info");
    
  childAccountInfo = {
    id: 1,
    child_id: 1,
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


// interface designSettings {
//   id: number;
//   text_color: string;
//   card_color: string;
//   background_color: string;
//   header_color: string;
// }

let designSettings = {
  id: 1,
  text_color: "text_for_blue_design",
  card_color: "http_address_for_blue_background",
  background_color: "http://background_color_for_blue_design",
  header_color: "header_color_for_blue_design"
}
children.get('/:child_id/design_settings', function(req, res, next) {
  console.log("http://localhost:3001/api/children/:child_id/design_settings");
  res.json(designSettings);
});


// interface designSettings {
//   id: number;
//   text_color: string;
//   card_color: string;
//   background_color: string;
//   header_color: string;
// }

// children.post('/:child_id/setting/update', function(req, res, next) {
children.get('/:child_id/design_settings/update/:color', function(req, res, next) {
  console.log("http://localhost:3001/api/children/:child_id/design_settings/update/:color");
  // create logic function based on color provided
  designSettings = {
    id: 1,
    text_color: "text_for_green_design",
    card_color: "http_address_for_green_background",
    background_color: "http://background_color_for_green_design",
    header_color: "header_color_for_green_design"
  }
  res.json(designSettings);
});



// interface designBackgroundSettings {
//   id: number;
//   background_color: string;
// }
let designBackgroundSettings = {
    id: 1,
    background_color: "http://background_color_for_main_design",
}
children.get('/:child_id/card_background', function(req, res, next) {
  console.log("http://localhost:3001/api/children/:child_id/card_background");
 
  res.json(designBackgroundSettings);
});


// interface designBackgroundSettings  {
//   id: number;
//   background_color: string;
// }

// children.post('/:child_id/card_background/update', function(req, res, next) {
children.get('/:child_id/card_background/update/:color', function(req, res, next) {
  console.log("http://localhost:3001/api/children/:child_id/card_background/update/:color");

  let color = "http://background_color_for_green_design"
  designBackgroundSettings = {
    id: 1,
    background_color: color,
  }
  res.json(designSettings.background_color);
});



// currently only 1 permission
// interface accountSetting {
//   id: string;
//   active: boolean;  
//   updated_at: Date;
// }
let accountSettings = {
  id: 1,
  active: true
 }

children.get('/:child_id/account_status', function(req, res, next) {
  console.log("http://localhost:3001/api/children/:child_id/account_status");
  res.json(accountSettings);
});



// interface accountSetting {
//   id: string;
//   active: boolean;  
//   updated_at: Date;
// }

// children.post('/:child_id/account_status/update', function(req, res, next) {
children.get('/:child_id/account_status/update', function(req, res, next) {
  console.log("http://localhost:3001/api/children/:child_id/account_status/update");
   // functions to make true/toggle

  accountSettings = {
    id: 1,
    active: false
   }
  res.json(accountSettings);
});


module.exports = children;
