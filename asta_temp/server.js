// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 8080;
const sassMiddleware = require("./lib/sass-middleware");
const express = require("express");
const app = express();
const bodyParser = require('body-parser');


const cookieSession = require('cookie-session');

app.use(cookieSession({
  name: 'user_id',
  keys: ['a long long hard to crack key']
}));



// PG database client/connection setup

const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);

db.connect();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));


app.use(
  "/styles",
  sassMiddleware({
    source: __dirname + "/styles",
    destination: __dirname + "/public/styles",
    isSass: false, // false => scss, true => sass
  })
);

app.use(express.static("public"));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const usersRoutes = require("./routes/users");


// Mount all resource routes

app.use("/users", usersRoutes(db));



// Home page:

app.get("/", (req, res) => {
  const user = req.session.user_id;
  const templateVars = { user };
  res.render("index", templateVars);
});

// sign UP:

app.get("/signup", (req, res) => {
  const templateVars = { user: null };
  res.render("signup", templateVars);
});

app.get("/transactions", (req, res) => {    
  const user = req.session.user_id;
  const templateVars = { user };
  res.render("transactions", templateVars);
})

app.get("/dashboard", (req, res) => {
  const user = req.session.user_id;
  const templateVars = { user };
  if (!user) {
    return res.redirect('/signup');
  }
  res.render("dashboard", templateVars);
});


// POST ADD TO Money BUTTON 

// app.post("/order_add_cart", (req, res) => {
//   console.log("helooow", req.body)
//   const user_id = req.session.user_id;
//   if (!user_id) {
//     res.redirect("/order_index");
//   }
//   if (carts[user_id]) {
//     carts[user_id].push(req.body.item)
//   }
//   else {
//     carts[user_id] = [req.body.item]
//   }
// });

// app.get("/order_add_cart", (req, res) => {
//   const users = req.session.user_id;
//   if (users) {
//     return res.render("/order_add_cart");
//   }
//   else {
//     return res.render("/order_signup")
//   }
// })







app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});