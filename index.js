// Libraries
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const port = process.env.PORT || 8000;

// Express
const app = express();

// Database connection
require('./database/connection');

// Routes
const router = require('./routes/router');

// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser(""));
app.use(cors());
// app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use('/api', router);

// Server
app.listen(port, function() {
  console.log("Server started at port " + port);
})
