import axios from 'axios';

class HotelDataService {

    hotelList = [
        {
          "id": 1234,
          "title": "Taj Hotel",
          "brand": "TATA",
          "description": "This is best hotel ever.!",
          "location": "Delhi",
          "currentPrice": 50000,
          "originalPrice": 70000,
          "imgUrl": ""
        },
        {
          "id": 5678,
          "title": "Sahara Star",
          "brand": "Sahara",
          "description": "This is worst hotel ever.!",
          "location": "Mumbai",
          "currentPrice": 500,
          "originalPrice": 700,
          "imgUrl": ""
        },
        {
          "id": 4321,
          "title": "Taj Hotel",
          "brand": "TATA",
          "description": "This is best hotel ever.!",
          "location": "Mumbai",
          "currentPrice": 150000,
          "originalPrice": 170000,
          "imgUrl": ""
        },
        {
          "id": 8765,
          "title": "Sahara Star",
          "brand": "Sahara",
          "description": "This is worst hotel ever.!",
          "location": "Delhi",
          "currentPrice": 1500,
          "originalPrice": 7000,
          "imgUrl": ""
        }
    ];

    sleep() {
      return new Promise(resolve => setTimeout(resolve, 2000))
    }

    async getAllHotels() {
        await this.sleep()
        const response = await axios.get("/data/productList.json")
        const hotelList = response.data;
        
        return hotelList.sort((item1, item2) => item2.currentPrice - item1.currentPrice);
    }

    async getHotelById(id) {
      await this.sleep()
      const response = await axios.get("/data/productList.json")
      const hotelList = response.data;
      
      return hotelList.find(item => item.id == id);
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


export default HotelDataService;