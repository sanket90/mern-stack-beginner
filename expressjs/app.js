const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('./middlewares/logger');
const { defaultClientErrorHandler, defaultServerErrorHandler } = require('./middlewares/error');

const app = express();
app.use(logger());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const usersRouter = require('./routes/users');
app.use('/api/v1/users', usersRouter);

const hotelRouter = require('./routes/hotels');
app.use('/api/v1/hotels', hotelRouter);

// Error Handlers should be placed last
app.use(defaultClientErrorHandler);
app.use(defaultServerErrorHandler);

module.exports = app;
