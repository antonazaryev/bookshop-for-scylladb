import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../../styles/app.scss';

// Components
import Header from './header';

// Actions
import {
    addToCartAction,
    removeFromCartAction,
    updateCartQuantityAction,
    toggleCartAction
} from '../redux/actions/cartActions'

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { isMyCartOpen } = this.props;

    return (
      <div className="main">
        <Header/>
        {/*<ProductsList/>*/}
        {/*<MyCart/>*/}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isMyCartOpen: state.cartReducer.isMyCartOpen
});

export default connect(mapStateToProps, {
  addToCartAction,
  removeFromCartAction,
  updateCartQuantityAction,
  toggleCartAction
})(App);
