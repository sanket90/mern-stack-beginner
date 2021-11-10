import React from "react";

class ProductItem extends React.Component {

    render() {
        return (
            <div className="product-item">
                <div className="row">
                    <div className="product-image">
                        <img src={ this.props.imgUrl } alt="Product"></img>
                    </div>
                    <div className="product-description">
                        <h3>
                            { this.props.title }
                        </h3>
                        <p>
                            { this.props.description }
                        </p>
                    </div>
                    <div className="product-price">
                        <h2>
                            { this.props.currentPrice }
                        </h2>
                        <h3>
                            { this.props.originalPrice }
                        </h3>
                    </div>
                </div>
            </div>
        );
    }
}


export default ProductItem;