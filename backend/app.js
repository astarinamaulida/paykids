require("dotenv").config();

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const app = express();

const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


const childrenRouter = require('./routes/children');
const parentsRouter = require('./routes/parents');
const transactionsRouter = require('./routes/transactions');
const requestsRouter = require('./routes/requests');



app.use("/api/children", childrenRouter);
app.use("/api/parents", parentsRouter);
app.use("/api/transactions", transactionsRouter);
app.use("/api/requests", requestsRouter);


module.exports = app;
