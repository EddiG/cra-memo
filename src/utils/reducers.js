// @flow
type State = any;

type Action = {
  type: string,
  payload: any,
};

type Handlers = {
  [string]: (state: State, action: Action) => State,
};

function createReducer(initialState: State, handlers: Handlers): State {
  return function reducer(state = initialState, action) {
    if (handlers[action.type]) {
      return handlers[action.type](state, action);
    }
    return state;
  };
}

export default createReducer;
