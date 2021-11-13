import React from "react";

import { withRouter } from 'react-router-dom';


import HotelDataService from '../data/HotelDataService'

import HotelList from '../components/product/HotelList';

class HotelListPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            hotelList: [],
            hotelDetailUrl: props.match.url
        };
    }

    loadHotels() {
        const hotelDataService = new HotelDataService();
        hotelDataService
            .getAllHotels()
            .then(hotels => {
                this.setState({ hotelList: hotels });
            });
    }

    componentDidMount() {
        this.loadHotels();
    }

    render() {
        if (!this.state.hotelList.length) {
            return (
                <div>
                    <h2>LOADING...</h2>    
                </div>
            );
        }

        return (
            <div>
                <h2>Hotel List Page</h2>
                <HotelList hotelList={this.state.hotelList} hotelDetailUrl={this.state.hotelDetailUrl}></HotelList>
            </div>

        );
    }
}

export default withRouter(HotelListPage);