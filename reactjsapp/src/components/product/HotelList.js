import React from "react";

import { Link } from 'react-router-dom';

import HotelItem from "./HotelItem";

function HotelList(props) {
    return (
        <div className="product-list">
            {
                props.hotelList.map(hotelData => {

                    return (
                        <div key={hotelData.id}>
                            <HotelItem
                                imgUrl={hotelData.imgUrl}
                                title={hotelData.title}
                                description={hotelData.description}
                                currentPrice={hotelData.currentPrice}
                                originalPrice={hotelData.originalPrice}
                                location={hotelData.location}
                            ></HotelItem>

                            <Link to={`${props.hotelDetailUrl}/${hotelData.id}`}>Go To {hotelData.title}</Link>
                        </div>

                    );

                })
            }
        </div>
    );
}

export default HotelList;