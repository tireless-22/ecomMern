import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import "./ProductScreen.css";
import Ratings from "../components/Ratings"
import { useEffect, useState } from "react"
import Axios from "axios"


const ProductScreen = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  useEffect(() => {
    Axios.get(`http://localhost:3001/api/products/${id}`)
      .then((res) => {
        console.log(res);
        setProduct(res.data);
      }) 
    .catch((err)=>{
      console.log(err);

    })

  },[id]);

 


  

  // const product = products.find((product) => product._id === id);
  console.log(product);

	return (
    <div>
      <h2>{id}</h2>
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
