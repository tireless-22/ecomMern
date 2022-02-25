import React from "react";
import home_image from "../images/home_image.jpg";
import "./HomeScreen.css";
import products from "../products";
import Ratings from "../components/Ratings";


function HomeScreen() {



  return (
    <div className="home">
      <img className="home_image" src={home_image} />
      <div className="home_container">
        {products.map((product, _id) => (
          <div className="product_card">
            <a href={`product/${product._id}`}>
              <img className="product_image" src={product.image} />
            </a>
            <div>
              <h3>{product.name}</h3>
              <h4>${product.price}</h4>
              <Ratings
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeScreen;
