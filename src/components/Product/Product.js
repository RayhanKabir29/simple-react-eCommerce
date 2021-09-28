import React from 'react';
import './Product.css'

const Product = (props) => {
    const{name,img,category,price,seller,stock} = props.product;
    return (
        <div>
            <img src={img} alt="" />
            <h5>Category: {category}</h5>
            <h4>Seller: {seller}</h4>
            <h3>Product Name: {name}</h3>
            <h5>Price: {price}</h5>
            <h5>Available: {stock} in Stock, Order Fast</h5>
        </div>
    );
};

export default Product;