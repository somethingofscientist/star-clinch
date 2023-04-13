import "./slider-one.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
import { productData, responsive } from "./Data.js";

export default function App() {
  const product = productData.map((item) => (
    <Product
      url={item.imageurl}
    />
  ));

  return (
    <div className="slider-one">
      <h4 className="slider-one-heading">You might be interested in</h4>
      <Carousel
        showDots={true}
        swipeable={false}
        dotListClass="custom-dot-list-style"
        arrows={false}
        draggable={false}
        responsive={responsive}>
        {product}
      </Carousel>
    </div>
  );
}