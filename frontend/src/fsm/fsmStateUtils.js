import axios from 'axios/index';

export const isValidCard = async(card) => {
  try {
    const response = await axios.post('/api/validate-card', card);
    return response.data.success;
  } catch (e) {
    return false;
  }
};

export const isCardPinValid = async(card, pin) => {
  try {
    const response = await axios.post('/api/validate-card-pin', { card, pin });
    return response.data.success;
  } catch (e) {
    return false;
  }
};

export const isAmountEnough = async(card, amount) => {
  try {
    const response = await axios.post('/api/check-balance', { card, amount });
    return response.data.success;
  } catch (e) {
    return false;
  }
};

export const wait = async(seconds) => await new Promise(resolve => setTimeout(resolve, 1000 * seconds));
