import axios from 'axios';

class HotelDataService {

    sleep() {
      return new Promise(resolve => setTimeout(resolve, 2000))
    }

    async getAllHotels() {
        await this.sleep()
        const response = await axios.get("http://localhost:8000/fetchAllHotels")
        const hotelList = response.data;
        
        return hotelList.sort((item1, item2) => item2.currentPrice - item1.currentPrice);
    }

    async getHotelById(id) {
      await this.sleep()
      const response = await axios.get(`http://localhost:8000/fetchHotelById?id=${id}`)
      const hotelObject = response.data;
      return hotelObject;
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