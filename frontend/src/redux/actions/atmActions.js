import {
  CARD_INSERTED,
  PIN_ENTERED,
  SCREEN_ACTION,
  MONEY_ACTION,
  CANCEL_ACTION,
  SET_VIEW_STATE,
} from '../constants/actionConstants';

export const cardInsertedAction = card => ({
  type: CARD_INSERTED,
  payload: card
});

export const pinEnteredAction = correct => ({
  type: PIN_ENTERED,
  payload: correct
});

export const screenAction = action => ({
  type: SCREEN_ACTION,
  payload: action
});

export const moneyReceivedAction = () => ({
  type: MONEY_ACTION
});

export const cancelAction = () => ({
  type: CANCEL_ACTION
});

export const setViewStateAction = stateName => ({
  type: SET_VIEW_STATE,
  payload: { stateName }
});
