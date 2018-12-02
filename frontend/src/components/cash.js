import React from 'react';
import '../../styles/_cash.scss';

const Cash =  ({ isReceived, receiveHandler }) => (
  <div
    className="cash"
    onClick={ isReceived && !!receiveHandler ? receiveHandler : null }
  >
    { isReceived && <i className="fa fa-money-bill" /> }
  </div>
);

export default Cash;
