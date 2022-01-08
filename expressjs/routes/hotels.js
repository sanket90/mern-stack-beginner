const express = require("express");
const { getAllHotels, createHotel, updateHotel, deleteHotel, getHotelDetails } = require("../services/hotel-service");

const router = express.Router();

router
    .route("/hotels")
    .get(getAllHotels);

router
    .route("/hotel/new")
    .post(createHotel);

router
    .route("/hotel/:id")
    .put(updateHotel)
    .delete(deleteHotel)
    .get(getHotelDetails);

module.exports = router