import express from 'express';
import cors from 'cors';
import HotelDataService from './hotel-service.js';

// Creating instance / object of Express Application
const app = express();

// Middleware
app.use(cors({
    origin: ["http://localhost:3000"]
}))

app.use(express.json());



// Creating a GET api with path points to "/"
app.get("/", (request, response) => {
    response.send("Coming Soon.!");
});

// GET API
app.get("/fetchAllHotels", (request, response) => {
    const service = new HotelDataService();
    service.getAllHotels(data => {
        response.send(data);
    });
});

// GET API
app.get("/fetchHotelById", (request, response) => {
    const hotelId = request.query.id;
    const service = new HotelDataService();
    service.getHotelById(hotelId, data => {
        response.send(data);
    });
});



// Starting the server on Port: 8100
app.listen(8100, () => {
    console.log("Listening on port 8100");
});