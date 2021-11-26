var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const logger = require('./middlewares/logger')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const hotelRouter = require('./routes/hotels');

var app = express();
app.use(logger());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/hotels', hotelRouter);


// Error Handlers should be placed last

// 404 Error Handler
app.use((request, response, next) => {

    const statusCode = 404;
    response.status(statusCode);
    response.send("Not Found!");
});

// Default Error Handler
app.use((error, request, response, next) => {

    const statusCode = error.status || 500

    console.log(error.message);
    // console.error(error.stack);

    response.status(statusCode);
    response.send("Oops. Something went Wrong :(");
});

module.exports = app;
