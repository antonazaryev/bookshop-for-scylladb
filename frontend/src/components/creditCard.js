import React from 'react';
import '../../styles/_credit_card.scss';

const CreditCard =  ({ isInside, insertCardHandler }) => (
  <div
    className={ !isInside ? "credit-card" : "credit-card is-inside" }
    onClick={ !isInside && !!insertCardHandler ? insertCardHandler : null }
  >
    { !isInside && <i className="fa fa-credit-card" /> }
  </div>
);

export default CreditCard;
