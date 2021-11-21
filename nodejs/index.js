import { createServer } from 'http';
import HotelDataService from './hotel-service.js'
import { parse as urlParse } from 'url';
import { parse as queryParse } from 'querystring';

createServer((request, response) => {
    console.log("METHOD", request.method, "URL", request.url);

    const url = request.url;

    response.writeHead(200, { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    });

    // GET HOTEL LIST
    if (url == '/fetchAllHotels') {
        const service = new HotelDataService();
        service.getAllHotels(data => {
            response.write(data);
            response.end();
        });
    }

    // GET HOTEL BY ID
    else if (url.startsWith('/fetchHotelById')) {
        const parsedUrlQuery = urlParse(url).query;
        const parsedParms = queryParse(parsedUrlQuery);
        const hotelId = parsedParms.id;
        
        const service = new HotelDataService();
        service.getHotelById(hotelId, data => {
            response.write(data);
            response.end();
        });
    }
    
    // GET DEFAULT RESPONSE
    else {
        response.write("Coming Soon..!");
        response.end();
    }


}).listen(8000, () => {
    console.log("Listing on port 8000");
});