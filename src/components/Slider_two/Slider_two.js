import React from 'react'
import './slider-two.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from './Product';
import { productData, responsive } from "./Data.js";

const Slider_two = () => {

    const product = productData.map((item) => (
        <Product
            url={item.imageurl}
            name={item.name}
            place={item.place}
        />
    ));

    return (
        <>
            <div className="slider-two-container">
                <div className="slider-two-heading">
                    <div className="slider-two-heading-icon">
                        <img src="https://stcdn.starclinch.in/mobile/images/profile/similar_artist_icon_v2.svg" alt="" />
                    </div>
                    <div className="slider-two-heading-line">
                        Similar Artists you may like
                    </div>
                </div>

                <div className="slider-one">
                    <Carousel
                        showDots={true}
                        swipeable={false}
                        dotListClass="custom-dot-list-style"
                        arrows={false}
                        draggable={false}
                        responsive={responsive}
                    >
                        {product}
                    </Carousel>
                </div>
            </div>
        </>
    )
}

export default Slider_two