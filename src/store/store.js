import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {
  connectRouter,
  routerMiddleware,
} from 'connected-react-router/immutable';
import { combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import monitorReducersEnhancer from './enhancers/monitorReducer';
import loggerMiddleware from './middlewares/logger';
import history from '../history/history';
import rootRunner from '../saga/rootSaga';

export default function configureStore(preloadedState) {
  const sagaMiddleware = createSagaMiddleware();
  const routeMiddleware = routerMiddleware(history); 

  const middlewares = [loggerMiddleware, routeMiddleware, sagaMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancers = [middlewareEnhancer, monitorReducersEnhancer];
  const composedEnhancers = () => {
    if (process.env.NODE_ENV === 'development') return composeWithDevTools(...enhancers);
    return compose(...enhancers);
  };

  const store = createStore(
    combineReducers({
      preloadedState,
      router: connectRouter(history)
    }),
    composedEnhancers(),
  );

  sagaMiddleware.run(rootRunner);

  return store;
}
