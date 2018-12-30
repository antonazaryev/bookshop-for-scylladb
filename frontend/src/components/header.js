import React from 'react';
import '../../styles/_header.scss';

const Header =  ({ itemsInCart, openCartHandler }) => (
    <div className="header">
        <div className="title">
            ScyllaDB Bookshop
        </div>
        <div className="my-cart-button" onClick={openCartHandler}>
            My Cart ({ itemsInCart })
        </div>
    </div>
);

export default Header;
