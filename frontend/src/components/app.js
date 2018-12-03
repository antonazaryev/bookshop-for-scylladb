import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../../styles/app.scss';

// Components
import Screen from './screen';
import Cash from './cash';
import CreditCard from './creditCard';
import Button from './common/button';

// Actions
import {
  cardInsertedAction,
  pinEnteredAction,
  screenAction,
  moneyReceivedAction,
  cancelAction
} from '../redux/actions/atmActions'

class App extends Component {
  constructor(props) {
    super(props);
  }

  insertCardHandler = () => {
    const { cardInsertedAction } = this.props;
    cardInsertedAction( {
      owner: 'Anton Azaryev',
      number: 23434545645645
    });
  };

  enterPinHandler = (correct) => {
    const { pinEnteredAction } = this.props;
    pinEnteredAction(correct);
  };

  screenActionHandler = (action) => {
    const { screenAction } = this.props;
    screenAction(action);
  };

  moneyReceivedHandler = () => {
    const { moneyReceivedAction } = this.props;
    moneyReceivedAction();
  };

  cancelHandler = () => {
    const { cancelAction } = this.props;
    cancelAction();
  };

  render() {
    const { currentState } = this.props;
    const {
      textOnScreen,
      insertCardAvailable,
      enterPinAvailable,
      cashAvailable,
      cancelAvailable,
      actions
    } = currentState;

    return (
      <div className="main">
        <Screen
          text={textOnScreen}
          actions={actions}
          actionHandler={this.screenActionHandler}
        />
        <div className="tools">
          <Cash
            isReceived={cashAvailable}
            receiveHandler={this.moneyReceivedHandler}
          />
          <CreditCard
            isInside={!insertCardAvailable}
            insertCardHandler={this.insertCardHandler}
          />
        </div>
        <div className="main-buttons">
          {
            enterPinAvailable && (
              <React.Fragment>
                <Button
                  positive
                  label="Enter correct pin"
                  onClick={() => this.enterPinHandler(true)}
                />
                <Button
                  negative
                  label="Enter incorrect pin"
                  onClick={() => this.enterPinHandler()}
                />
              </React.Fragment>
            )
          }
          {
            cancelAvailable && <Button label="Cancel" onClick={() => this.cancelHandler()}/>
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentState: state.atmReducer.currentState
});

export default connect(mapStateToProps, {
  cardInsertedAction,
  pinEnteredAction,
  screenAction,
  moneyReceivedAction,
  cancelAction
})(App);
