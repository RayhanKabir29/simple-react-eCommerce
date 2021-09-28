import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
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
                {
                    products.map(product =><Product 
                    key ={product.key}
                    product={product}>
                    </Product>)
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