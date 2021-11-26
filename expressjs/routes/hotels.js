const express = require('express');
const router = express.Router();
const HotelDataService = require('../services/hotel-service');

router.use((request, response, next) => {
    console.log("THIS IS FROM HOTEL ROUTER.!!");
    next();
});

// GET API  Hotel List
router.get("/", (request, response) => {
    const service = new HotelDataService();
    service.getAllHotels(data => {
        response.send(data);
    });
});

// GET API Hotel By Id
router.get("/:id", (request, response) => {
    const hotelId = request.params.id;
    const service = new HotelDataService();
    service.getHotelById(hotelId, data => {
        response.send(data);
    });
});


module.exports = router;