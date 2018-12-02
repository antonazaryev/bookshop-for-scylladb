import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers/rootReducer';
import ATMMiddleware from './middlewares/atmMiddleware';

// FSM
import FSM from "../fsm/fsm";
import FSM_STATES, { INITIAL_STATE } from "../fsm/fsmStates";

import { setViewStateAction } from "../redux/actions/atmActions";

const store = createStore(
  rootReducer,
  applyMiddleware(ATMMiddleware)
);

const fmsActionHandler = action => (store.dispatch(setViewStateAction(action)));

export const FSMInstance = new FSM(FSM_STATES, INITIAL_STATE, fmsActionHandler);
export default store;
