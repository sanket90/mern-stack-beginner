import React from "react";

import { Link } from 'react-router-dom';

import HotelItem from "./HotelItem";

function HotelList(props) {
    console.log(props);
    return (
        <div className="product-list">
            {
                props.hotelList.map(productData => {

                    return (
                        <div key={productData.id}>
                            <HotelItem
                                imgUrl={productData.imgUrl}
                                title={productData.title}
                                description={productData.description}
                                currentPrice={productData.currentPrice}
                                originalPrice={productData.originalPrice}
                            ></HotelItem>

                            <Link to={`${props.hotelDetailUrl}/${productData.id}`}>Go To {productData.title}</Link>
                        </div>

                    );

                })
            }
        </div>
    );
}

export default HotelList;