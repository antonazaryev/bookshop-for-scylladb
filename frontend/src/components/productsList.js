import React from 'react';
import '../../styles/_products-list.scss';

import Product from "./product";
import {addToCartAction} from "../redux/actions/cartActions";

const ProductsList =  ({ items, filterListHandler, addToCartHandler }) => (
    <div className="products">
        <div className="search">
            <input type="text" onChange={(e) => filterListHandler(e.target.value) } placeholder="Filter books" />
        </div>
        <div className="list">
            {
                items && items.map(item => (<Product key={item.id} item={item} addToCartHandler={addToCartHandler} />))
            }
        </div>
    </div>
);

export default ProductsList;
