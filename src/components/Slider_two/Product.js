import React from "react";

export default function Product(props) {
    return (
        <div className="card-two">
            <img className="product--image" src={props.url} alt="anchor-celebrity" />
            <p className="slider-name">{props.name}</p>
            <p className="slider-place">{props.place}</p>
        </div>
    );
}