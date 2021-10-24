import React from "react";

import ProductItem from "./ProductItem";

class ProductList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            productList: [
                {
                    id: 1234,
                    title: "Samsung Laptop",
                    brand: "Samsung",
                    description: "This is best product ever.!",
                    currentPrice: 500,
                    originalPrice: 700,
                    imgUrl: "https://www.flipkart.com/hp-chromebook-mt8183-4-gb-64-gb-emmc-storage-chrome-os-11a-na0002mu/p/itm92093a75fc716?pid=COMGYJYYA7FFRXZC&lid=LSTCOMGYJYYA7FFRXZCPGLPBY&marketplace=FLIPKART&store=6bo%2Fb5g&srno=b_1_1&otracker=browse&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_8_L1_view-all&fm=organic&iid=en_BWdgyEVTmGmBz89oRAAOWHiJSZDHYSr8%2FNVgdTEz1%2BcznJFslpmVR4H5cDMa%2BXa1bJfNsRi1%2FbdQU9wy3qRsmg%3D%3D&ppt=clp&ppn=samsung-mobile-store&ssid=pdeqdpu8og0000001635051939401"
                },
                {
                    id: 5678,
                    title: "Apple Laptop",
                    brand: "Apple",
                    description: "This is second-best product ever.!",
                    currentPrice: 1500,
                    originalPrice: 7000,
                    imgUrl: "https://www.flipkart.com/hp-chromebook-mt8183-4-gb-64-gb-emmc-storage-chrome-os-11a-na0006mu/p/itm753c07eade318?pid=COMG4ZYCEHDCEBUP&lid=LSTCOMG4ZYCEHDCEBUPDUICG4&marketplace=FLIPKART&store=6bo%2Fb5g&srno=b_1_2&otracker=browse&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_8_L1_view-all&fm=organic&iid=en_BWdgyEVTmGmBz89oRAAOWHiJSZDHYSr8%2FNVgdTEz1%2Bdex8OblDvH6TMzOlTKty0QlSnDnJlkH63cvgGhfVCqrA%3D%3D&ppt=clp&ppn=samsung-mobile-store&ssid=pdeqdpu8og0000001635051939401"
                }
            ]
        };
    }

    render() {
        return (
            <div className="product-list">
                {
                    this.state.productList.map(productData => {

                        return (
                            <ProductItem
                                key={productData.id}
                                imgUrl={productData.imgUrl}
                                title={productData.title}
                                description={productData.description}
                                currentPrice={productData.currentPrice}
                                originalPrice={productData.originalPrice}
                            ></ProductItem>
                        );

                    })
                }
            </div>
        );
    }
}

export default ProductList;