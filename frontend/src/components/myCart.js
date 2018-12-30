import React from 'react';
import {find} from 'lodash';

import '../../styles/_my-cart.scss';
import Button from "./common/button";

const MyCart = ({ items, itemsInCart, updateQuantityHandler, removeItemHandler }) => (
  <div className="my-cart">
    <div>
      {
        Object.entries(itemsInCart).map(itemInCart => {
          const item = find(items, i => i.id === itemInCart[ 0 ]);

          return (
            <div key={item.id}>
              <div className="title">{item.title}</div>
              <div className="actions">
                <input
                  maxLength={3}
                  type="text"
                  value={itemInCart[ 1 ]}
                  onFocus={(e) => e.target.select()}
                  onChange={(e) => {
                    if (isNaN(e.target.value) || e.target.value === '') {
                      e.target.value = '';
                      return;
                    }
                    if (parseInt(e.target.value) > 100) {
                      e.target.value = 100;
                    }

                    updateQuantityHandler(item.id, parseInt(e.target.value))
                  }}
                  placeholder="Enter quantity"/>
                <Button label="Remove" negative onClick={() => removeItemHandler(item.id)}/>
              </div>
            </div>
          );
        })
      }
      {Object.entries(itemsInCart).length === 0 && "Cart is empty"}
    </div>
  </div>
);

export default MyCart;
