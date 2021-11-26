const fs = require('fs');

class HotelDataService {

    getAllHotels(competedCallbackFn) {
        fs.readFile('./public/productList.json', (err, data) => {
            if (err) {
                console.log(err);
                competedCallbackFn("Error");
            }

            competedCallbackFn(data.toString());
        });
    }

    getHotelById(id, competedCallbackFn) {
        fs.readFile('./public/productList.json', (err, data) => {
            if (err) {
                console.log(err);
                competedCallbackFn("Error");
            }

            const hotelList = JSON.parse(data);
            const hotelObj = hotelList.find(item => item.id == id);
            competedCallbackFn(JSON.stringify(hotelObj));
        });
    }

    filterHotelByName(title) {
      return this.hotelList
        .sort((item1, item2) => item1.currentPrice < item2.currentPrice)
        .filter(item => item.title == title);
        
    }

    filterHotelByLocation(location) {
      return this.hotelList
        .filter(item => item.location == location)
        .sort((item1, item2) => item1.currentPrice < item2.currentPrice);
    }

}


module.exports = HotelDataService;