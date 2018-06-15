import { combineReducers } from 'redux';
import * as CounterReducer from './counter';

export default combineReducers({...CounterReducer});
