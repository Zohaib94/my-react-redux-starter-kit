import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from '../reducers/index';

//USE LOGGER ONLY IN DEV ENVIRONMENT
const loggerMiddleWare = createLogger({predicate: (getState, action) => process.env.NODE_ENV === `development` });

//WHEN STORE IS CREATED, ALSO ADD CONFIGURATION FOR REDUX LOGGER 
//AND THUNK FOR ASYNC REQUEST AND PROMISE RESPONSES
var configureStore = (initialState) => {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleWare,
    )
  );

  return createStore(reducer, initialState, enhancer);
}

//CONFIGURE STORE WITH AN EMPTY INITIAL STATE
const store = configureStore({ count: 0 });

//EXPORT THE STORE SO WE CAN USE IT IN PROVIDER COMPONENT
export {store};
