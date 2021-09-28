import React from 'react';
import logo from'../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className="top-header">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="nav">
                    <a href="/home">Home</a>
                    <a href="/shop">Shop</a>
                    <a href="/order review">Order Review</a>
                </div>
            </div>
        </div>
    );
};

export default Header;