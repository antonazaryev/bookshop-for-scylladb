// Input types
export const CARD = 'CARD';
export const PIN = 'PIN';
export const MONEY = 'MONEY';
export const CANCEL = 'CANCEL';
export const ACTION = 'ACTION';
export const DEPOSIT_ACTION = 'Deposit';
export const WITHDRAWAL_ACTION = 'Withdrawal';
export const FIFTY_ACTION = '50$';
export const HUNDRED_ACTION = '100$';

// States
export const WAITING_FOR_CARD = 'WAITING_FOR_CARD';
export const CARD_INSERTED = 'CARD_INSERTED';
export const CHECKING_CARD = 'CHECKING_CARD';
export const CARD_CORRECT = 'CARD_CORRECT';
export const CARD_INCORRECT = 'CARD_INCORRECT';
export const RETURN_CARD = 'RETURN_CARD';
export const WAITING_FOR_PIN = 'WAITING_FOR_PIN';
export const CHECKING_PIN = 'CHECKING_PIN';
export const PIN_CORRECT = 'PIN_CORRECT';
export const PIN_INCORRECT = 'PIN_INCORRECT';
export const WAITING_FOR_ACTION = 'WAITING_FOR_ACTION';
export const DEPOSIT_NOT_AVAILABLE = 'DEPOSIT_NOT_AVAILABLE';
export const WAITING_FOR_AMOUNT = 'WAITING_FOR_AMOUNT';
export const CHECKING_BALANCE = 'CHECKING_BALANCE';
export const NOT_ENOUGH_MONEY = 'NOT_ENOUGH_MONEY';
export const ENOUGH_MONEY = 'ENOUGH_MONEY';
export const UPDATING_BALANCE = 'UPDATING_BALANCE';
export const GIVING_MONEY = 'GIVING_MONEY';
export const WAITING_TO_RECEIVE_MONEY = 'WAITING_TO_RECEIVE_MONEY';
