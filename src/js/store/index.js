import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import { syncHistory, routeReducer } from 'react-router-redux';
import createLogger from 'redux-logger';

import questions from '../reducers/question-reducers';

export default (history) => {
  const
    reduxRouterMiddleware = syncHistory(history),
    middlewares = process.env.NODE_ENV === 'development'
      ? [reduxRouterMiddleware, createLogger()]
      : [reduxRouterMiddleware],
    reducers = combineReducers({
      routing: routeReducer,
      questions
    }),
    store = compose(applyMiddleware(...middlewares))(createStore)(reducers);
  reduxRouterMiddleware.listenForReplays(store);
  return store;
};
