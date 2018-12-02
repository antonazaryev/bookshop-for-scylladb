import {
  DEPOSIT_ACTION,
  WITHDRAWAL_ACTION,
  FIFTY_ACTION,
  HUNDRED_ACTION
} from '../../fsm/fsmConstants';

const STATES = {
  WAITING_FOR_CARD: {
    textOnScreen: 'Insert your card',
    insertCardAvailable: true
  },
  CARD_INSERTED: {
    textOnScreen: 'Card inserted'
  },
  CHECKING_CARD: {
    textOnScreen: 'Checking card'
  },
  CARD_CORRECT: {
    textOnScreen: 'Card correct'
  },
  CARD_INCORRECT: {
    textOnScreen: 'Card incorrect'
  },
  RETURN_CARD: {
    textOnScreen: 'Returning the card'
  },
  WAITING_FOR_PIN: {
    textOnScreen: 'Enter your Pin',
    enterPinAvailable: true,
    cancelAvailable: true
  },
  CHECKING_PIN: {
    textOnScreen: 'Checking pin'
  },
  PIN_CORRECT: {
    textOnScreen: 'PIN is correct'
  },
  PIN_INCORRECT: {
    textOnScreen: 'PIN is wrong'
  },
  WAITING_FOR_ACTION: {
    textOnScreen: 'Choose an action',
    cancelAvailable: true,
    actions: [
      DEPOSIT_ACTION,
      WITHDRAWAL_ACTION
    ]
  },
  DEPOSIT_NOT_AVAILABLE: {
    textOnScreen: 'Deposit is not available in this terminal'
  },
  WAITING_FOR_AMOUNT: {
    textOnScreen: 'Select amount',
    cancelAvailable: true,
    actions: [
      FIFTY_ACTION,
      HUNDRED_ACTION
    ]
  },
  CHECKING_BALANCE: {
    textOnScreen: 'Checking balance'
  },
  NOT_ENOUGH_MONEY: {
    textOnScreen: 'Not enough money'
  },
  ENOUGH_MONEY: {
    textOnScreen: 'Enough money'
  },
  UPDATING_BALANCE: {
    textOnScreen: 'Updating balance'
  },
  GIVING_MONEY: {
    textOnScreen: 'Giving money'
  },
  WAITING_TO_RECEIVE_MONEY: {
    textOnScreen: 'Take your cash',
    cashAvailable: true
  },
};

export const DEFAULT_STATE = 'WAITING_FOR_CARD';
export default STATES;
