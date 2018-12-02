import { CARD_INSERTED, SET_VIEW_STATE } from '../constants/actionConstants';

// FSM
import STATES, { DEFAULT_STATE } from '../constants/statesConstants';

const initialState = {
  currentState: STATES[DEFAULT_STATE]
};

export default (state = initialState, action) => {
  const { payload } = action;

  switch (action.type) {
    case SET_VIEW_STATE:
      if (!STATES.hasOwnProperty(payload.stateName)) {
        console.error("No such view state");
        return state;
      }

      return {
        currentState: STATES[payload.stateName]
      };
    default:
      return state
  }
}
