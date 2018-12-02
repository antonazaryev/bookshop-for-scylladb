import axios from 'axios';

import {
  CARD,
  PIN,
  MONEY,
  CANCEL,
  ACTION,
  DEPOSIT_ACTION,
  WITHDRAWAL_ACTION,
  FIFTY_ACTION,
  HUNDRED_ACTION,

  WAITING_FOR_CARD,
  CARD_INSERTED,
  CHECKING_CARD,
  CARD_CORRECT,
  CARD_INCORRECT,
  RETURN_CARD,
  WAITING_FOR_PIN,
  CHECKING_PIN,
  PIN_CORRECT,
  PIN_INCORRECT,
  WAITING_FOR_ACTION,
  DEPOSIT_NOT_AVAILABLE,
  WAITING_FOR_AMOUNT,
  CHECKING_BALANCE,
  NOT_ENOUGH_MONEY,
  ENOUGH_MONEY,
  UPDATING_BALANCE,
  GIVING_MONEY,
  WAITING_TO_RECEIVE_MONEY
} from './fsmConstants';

const FSM_STATES = {
  WAITING_FOR_CARD: {
    onExternalInput: async function(type, value) {
      if (type === CARD) {
        await this.executeState(CARD_INSERTED, value);
      }
    }
  },
  CARD_INSERTED: {
    onExecute: async function(card) {
      await wait(1);
      await this.executeState(CHECKING_CARD, card);
    }
  },
  CHECKING_CARD: {
    onExecute: async function(card) {
      const isCardValid = await isValidCard(card);
      if (isCardValid) {
        await this.executeState(CARD_CORRECT, card);
      } else {
        await this.executeState(CARD_INCORRECT);
      }
    }
  },
  CARD_CORRECT: {
    onExecute: async function(card) {
      await wait(1);
      this.setParam(CARD, card);
      await this.executeState(WAITING_FOR_PIN);
    }
  },
  CARD_INCORRECT: {
    onExecute: async function() {
      await wait(1);
      await this.executeState(RETURN_CARD);
    }
  },
  RETURN_CARD: {
    onExecute: async function() {
      await wait(1);
      await this.executeState(WAITING_FOR_CARD);
    }
  },
  WAITING_FOR_PIN: {
    onExternalInput: async function(type, value) {
      if (type === CANCEL) {
        await this.executeState(RETURN_CARD);
      } else if (type === PIN) {
        await this.executeState(CHECKING_PIN, value);
      }
    }
  },
  CHECKING_PIN: {
    onExecute: async function(pin) {
      const card = this.getParam(CARD);
      const isCardValid = await isCardPinValid(card, pin);
      if (isCardValid) {
        await this.executeState(PIN_CORRECT);
      } else {
        await this.executeState(PIN_INCORRECT);
      }
    }
  },
  PIN_INCORRECT: {
    onExecute: async function() {
      await wait(1);
      await this.executeState(RETURN_CARD);
    }
  },
  PIN_CORRECT: {
    onExecute: async function() {
      await wait(1);
      await this.executeState(WAITING_FOR_ACTION);
    }
  },
  WAITING_FOR_ACTION: {
    onExternalInput: async function(type, value) {
      if (type === CANCEL) {
        await this.executeState(RETURN_CARD);
      } else if (type === ACTION) {
        if (value === DEPOSIT_ACTION) {
          await this.executeState(DEPOSIT_NOT_AVAILABLE);
        } else if (value === WITHDRAWAL_ACTION) {
          await this.executeState(WAITING_FOR_AMOUNT);
        }
      }
    }
  },
  DEPOSIT_NOT_AVAILABLE: {
    onExecute: async function() {
      await wait(1);
      await this.executeState(WAITING_FOR_ACTION);
    }
  },
  WAITING_FOR_AMOUNT: {
    onExternalInput: async function(type, value) {
      if (type === CANCEL) {
        await this.executeState(RETURN_CARD);
      } else if (type === ACTION) {
        if (value === FIFTY_ACTION || value === HUNDRED_ACTION) {
          const amount = value === FIFTY_ACTION ? 50 : 100;
          await this.executeState(CHECKING_BALANCE, amount);
        }
      }
    }
  },
  CHECKING_BALANCE: {
    onExecute: async function(amount) {
      const card = this.getParam(CARD);
      const isEnoughMoney = await isAmountEnough(card, amount);
      if (isEnoughMoney) {
        await this.executeState(ENOUGH_MONEY);
      } else {
        await this.executeState(NOT_ENOUGH_MONEY);
      }
    }
  },
  NOT_ENOUGH_MONEY: {
    onExecute: async function() {
      await wait(1);
      await this.executeState(RETURN_CARD);
    }
  },
  ENOUGH_MONEY: {
    onExecute: async function() {
      await wait(1);
      await this.executeState(UPDATING_BALANCE);
    }
  },
  UPDATING_BALANCE: {
    onExecute: async function() {
      await wait(1);
      await this.executeState(GIVING_MONEY);
    }
  },
  GIVING_MONEY: {
    onExecute: async function() {
      await wait(1);
      await this.executeState(WAITING_TO_RECEIVE_MONEY);
    }
  },
  WAITING_TO_RECEIVE_MONEY: {
    onExternalInput: async function(type) {
      if (type === MONEY) {
        await this.executeState(RETURN_CARD);
      }
    }
  }
};

const isValidCard = async(card) => {
  try {
    const response = await axios.post('/api/validate-card', card);
    return response.data.success;
  } catch (e) {
    return false;
  }
};

const isCardPinValid = async(card, pin) => {
  try {
    const response = await axios.post('/api/validate-card-pin', { card, pin });
    return response.data.success;
  } catch (e) {
    return false;
  }
};

const isAmountEnough = async(card, amount) => {
  try {
    const response = await axios.post('/api/check-balance', { card, amount });
    return response.data.success;
  } catch (e) {
    return false;
  }
};

const wait = async(seconds) => await new Promise(resolve => setTimeout(resolve, 1000 * seconds));

export const INITIAL_STATE = WAITING_FOR_CARD;
export default FSM_STATES;
