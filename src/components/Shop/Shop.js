import React, { useEffect, useState } from 'react';
import './Shop.css';
const Shop = () => {
    const [products,setProducts] = useState([]);
   useEffect(()=>{
       fetch('./products.JSON')
       .then(res => res.json())
       .then(data => setProducts(data))
   },[])
    return (
        <div className="container">
          <div className="shop-container">
              <div className="product-containr">
                <h2>Product</h2>
                {
                    products.map(product => console.log(product))
                }
              </div>
              <div className="cart">
                <h4>Order Summary</h4>
              </div>
          </div>
        </div>
    );
};

export default Shop;