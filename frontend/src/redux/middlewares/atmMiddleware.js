import {
  CARD_INSERTED,
  PIN_ENTERED,
  SCREEN_ACTION,
  MONEY_ACTION, CANCEL_ACTION
} from '../constants/actionConstants';

import {
  CARD,
  PIN,
  ACTION,
  MONEY,
  CANCEL
} from '../../fsm/fsmConstants';

import { FSMInstance } from '../store';

const ATMMiddleware = () => next => (action) => {
  const { payload, type } = action;

  switch (type) {
    case CARD_INSERTED:
      FSMInstance.externalInput(CARD, payload);
      break;
    case PIN_ENTERED:
      FSMInstance.externalInput(PIN, payload);
      break;
    case SCREEN_ACTION:
      FSMInstance.externalInput(ACTION, payload);
      break;
    case MONEY_ACTION:
      FSMInstance.externalInput(MONEY);
      break;
    case CANCEL_ACTION:
      FSMInstance.externalInput(CANCEL);
      break;

    default:
      break;
  }

  return next(action);
};

export default ATMMiddleware;
