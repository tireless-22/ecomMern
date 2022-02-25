import React from "react";
import home_image from "../images/home_image.jpg";
import "./HomeScreen.css";
// import products from "../products";
import Ratings from "../components/Ratings";
import Axios from "axios"
import { Link } from "react-router-dom"
import { useState,useEffect } from "react"


function HomeScreen() {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
     Axios.get("http://localhost:3001/api/products")
    .then(res => {
      console.log(res);
      setProducts(res.data);
      
    })
    .catch(e => {
      console.log(e);
  })

  },[]);
 



  return (
    <div className="home">
      <img className="home_image" src={home_image} />
      <div className="home_container">
        {products.map((product, _id) => (
          <div className="product_card">
            <Link to={`product/${product._id}`}>
              <img className="product_image" src={product.image} />
            </Link>
            <div>
              <h3 className="product_name">{product.name}</h3>
              <h4 className="product_price">${product.price}</h4>
              <Ratings
                className="product-ratings"
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
