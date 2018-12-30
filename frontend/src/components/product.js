import React from 'react';
import '../../styles/_product.scss';
import Button from "./common/button";

const Product = ({ item, addToCartHandler }) => (
  <div className="product">
    <div className="info">
      <img src={item.thumbnail}/>
      <div className="details">
        <div><b>{item.title}</b></div>
        <div>{item.description}</div>
        {item.price && <div>Price: <i className="fa fa-shekel-sign"/> {item.price}</div>}
        <div>Pages: {item.pageCount}</div>
      </div>
    </div>
    {item.price && <Button label="Add to cart" positive onClick={() => addToCartHandler(item.id)}/>}
  </div>
);

export default Product;
