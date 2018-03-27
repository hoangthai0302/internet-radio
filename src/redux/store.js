
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'
import createHistory from 'history/createBrowserHistory';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

export const history = createHistory();

const initialState = {};
const enhancers = [];
const logger = createLogger();
const middleware = [thunk, logger, routerMiddleware(history)];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

export default createStore(rootReducer, initialState, composedEnhancers);