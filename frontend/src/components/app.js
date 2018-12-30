import React, {Component} from 'react';
import {connect} from 'react-redux';
import {filter, includes} from 'lodash';

import '../../styles/app.scss';

// Components
import Header from './header';
import ProductsList from './productsList';
import MyCart from './myCart';

// Actions
import {
  addToCartAction,
  removeFromCartAction,
  updateCartQuantityAction,
  toggleCartAction
} from '../redux/actions/cartActions'
import {loadItemsAction} from '../redux/actions/productsActions'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };
  }

  componentDidMount() {
    this.props.loadItemsAction();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.items !== this.state.items) {
      this.setState({ items: nextProps.items });
    }
  }

  filterListHandler = (text) => {
    const { items } = this.props;
    const lowerText = text.toLowerCase();

    const filtredItems = filter(items, item => includes(item.title.toLowerCase(), lowerText) || includes(item.description.toLowerCase(), lowerText));
    this.setState({ items: filtredItems });
  };

  render() {
    const {
      itemsInCart,
      itemsCount,
      isMyCartOpen,
      addToCartAction,
      removeFromCartAction,
      updateCartQuantityAction
    } = this.props;
    const { items } = this.state;

    return (
      <div className="main">
        <Header itemsInCart={itemsCount} openCartHandler={this.props.toggleCartAction}/>
        <div className="content">
          <ProductsList items={items} filterListHandler={this.filterListHandler} addToCartHandler={addToCartAction}/>
          {isMyCartOpen && <MyCart items={this.props.items} itemsInCart={itemsInCart} removeItemHandler={removeFromCartAction} updateQuantityHandler={updateCartQuantityAction}/>}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: state.productsReducer.items,
  itemsCount: state.cartReducer.itemsCount,
  itemsInCart: state.cartReducer.itemsInCart,
  isMyCartOpen: state.cartReducer.isMyCartOpen
});

export default connect(mapStateToProps, {
  addToCartAction,
  removeFromCartAction,
  updateCartQuantityAction,
  toggleCartAction,
  loadItemsAction
})(App);
