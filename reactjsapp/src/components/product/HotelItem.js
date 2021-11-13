import React from "react";

function HotelItem(props) {
    return (
        <div className="product-item">
            <div className="row">
                {/* <div className="product-image">
                    <img src={props.imgUrl} alt="Product"></img>
                </div> */}
                <div className="product-description">
                    <h3>
                        {props.title}
                    </h3>
                    <p>
                        {props.description}
                    </p>
                    <p>
                        {props.location}
                    </p>
                </div>
                <div className="product-price">
                    <h2>
                        {props.currentPrice}
                    </h2>
                    <h3>
                        {props.originalPrice}
                    </h3>
                </div>
            </div>
        </div>
    );
}



export default HotelItem;