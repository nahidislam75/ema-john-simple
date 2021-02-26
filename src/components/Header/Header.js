import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">order review</a>
                <a href="/manager">Manege inventory</a></nav>
        </div>
    );
};

export default header;