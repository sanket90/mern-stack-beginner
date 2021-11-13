import React from "react";

import { withRouter } from 'react-router-dom';

import HotelDataService from '../data/HotelDataService'

import HotelItem from '../components/product/HotelItem';

class HotelDetailPage extends React.Component {

    constructor(props) {
        super(props);

        console.log(props);

        const hotelDataService = new HotelDataService();
        this.state = {
            hotelData: hotelDataService.getHotelById(props.match.params.id)
        };
    }

    render() {
        console.log(this.props);

        return (
            <div>
                <h2>Hotel Detail Page</h2>
                <HotelItem
                                imgUrl={this.state.hotelData.imgUrl}
                                title={this.state.hotelData.title}
                                description={this.state.hotelData.description}
                                currentPrice={this.state.hotelData.currentPrice}
                                originalPrice={this.state.hotelData.originalPrice}
                                location={this.state.hotelData.location}
                            ></HotelItem>
            </div>

        );
    }
}

export default withRouter(HotelDetailPage);