import * as Types from './types';

export function incrementCounter(){
  return (dispatch, getState) => {
    dispatch(incrementCounterDispatcher());
  }
}

function incrementCounterDispatcher(){
  return {
    type: Types.INCREMENT_STATE
  }
}
