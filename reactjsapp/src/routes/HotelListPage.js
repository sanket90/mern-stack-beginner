import React from "react";

import { withRouter } from 'react-router-dom';


import HotelDataService from '../data/HotelDataService'

import HotelList from '../components/product/HotelList';

class HotelListPage extends React.Component {

    constructor(props) {
        super(props);

        const hotelDataService = new HotelDataService();
        this.state = {
            hotelList: hotelDataService.getAllHotels(),
            hotelDetailUrl: props.match.url
        };
    }

    render() {
        return (
            <div>
                <h2>Hotel List Page</h2>
                <HotelList hotelList={this.state.hotelList} hotelDetailUrl={this.state.hotelDetailUrl}></HotelList>
            </div>

        );
    }
}

export default withRouter(HotelListPage);