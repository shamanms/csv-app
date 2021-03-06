import {
    createStore,
    applyMiddleware,
    compose
  } from 'redux';
  import thunk from 'redux-thunk';
  import reducer from './reducers';
  
  let middlewares = [thunk];
  
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  let middleware = composeEnhancers(applyMiddleware(...middlewares));
  let preloadedState = {};
  
  const store = createStore(reducer, preloadedState, middleware);
  
  export default store;