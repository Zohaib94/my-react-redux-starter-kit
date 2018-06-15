import createReducer from '../lib/create_reducer';
import * as Types from '../actions/types';

var initialState = {
  count: 0
};

export const counter = createReducer(initialState, {
  [Types.INCREMENT_STATE](state, action) {
    return {...state, count: state.count + 1};
  }
});
