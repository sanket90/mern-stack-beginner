import React from "react";

import { withRouter } from 'react-router-dom';

import HotelDataService from '../data/HotelDataService'

import HotelItem from '../components/product/HotelItem';

class HotelDetailPage extends React.Component {

    constructor(props) {
        super(props);

        console.log(props);

        this.state = {};
    }

    loadHotelById() {
        const hotelDataService = new HotelDataService();
        hotelDataService
            .getHotelById(this.props.match.params.id)
            .then(hotel => {
                this.setState({ hotelData: hotel });
            });
    }

    componentDidMount() {
        this.loadHotelById();
    }

    render() {
        console.log(this.props);

        if (!this.state.hotelData) {
            return (
                <div>
                    <h2>LOADING...</h2>    
                </div>
            );
        }

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