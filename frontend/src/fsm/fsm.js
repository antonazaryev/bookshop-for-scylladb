export default class FSM {
  constructor(states, initialState, updateStateHandler) {
    this.states = states;
    this.initialState = initialState;
    this.updateStateHandler = updateStateHandler;

    this.currentState = this.states[initialState];
    this.resetParams();
  }

  externalInput = (type, value) => {
    const { onExternalInput } = this.currentState;
    if (onExternalInput) {
      onExternalInput.call(this, type, value);
    }
  };

  executeState = (stateName, stateParams = {}) => {
    if (stateName === this.initialState) {
      this.resetParams();
    }

    if (this.states.hasOwnProperty(stateName)) {
      this.currentState = this.states[stateName];
      this.updateStateHandler(stateName);

      const { onExecute } = this.currentState;
      if (onExecute) {
        onExecute.call(this, stateParams);
      }
    } else {
      console.error("No such state", stateName);
    }
  };

  setParam = (key, value) => {
    this.sessionParams[key] = value;
  };

  getParam = key => this.sessionParams[key];

  resetParams = () => {
    this.sessionParams = {};
  }
}
