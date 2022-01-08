const express = require("express");
const app = express();

const errorMiddleware = require("./middleware/error");

app.use(express.json())

//ROUTE IMPORTS
const hotel = require("./routes/hotelRoute");

app.use("/api/v1",hotel);

//MIDDLEWARE FOR ERROR
app.use(errorMiddleware);

module.exports  = app;