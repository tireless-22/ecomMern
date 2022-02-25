import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import products from "../products";
import "./ProductScreen.css";
import Ratings from "../components/Ratings"

const ProductScreen = () => {
  const { id } = useParams();
  const product = products.find((product) => product._id === id);
  console.log(product);

	return (
    <div>
      <h1 className="product_screen_right_name">{product.name}</h1>
      <div className="product_screen">
        <div className="product_screen_left">
          <img className="product_screen_image" src={product.image} />
        </div>
        <div className="product_screen_right">
          <div className="product_screen_rightt">
            <div className="product_screen_right1">
              <h2>{product.price}</h2>
              <Ratings
                className="product-ratings"
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
              <p>${product.description}</p>
              {/* <p>{product.category}</p> */}
              {/* <h2>{product.brand}</h2> */}
            </div>

            <div className="product_screen_right2">
              <h2>{product.countInStock}</h2>
              <h2>{product.rating}</h2>
              <h2>{product.numReviews}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
