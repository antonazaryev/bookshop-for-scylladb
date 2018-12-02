import React from 'react';
import cx from 'classnames';

import '../../../styles/_button.scss';

const Button =  ({ label, positive, negative, onClick }) => (
  <div className={ cx("button", { positive, negative }) } onClick={ onClick }>
    { label }
  </div>
);

export default Button;
