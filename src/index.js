import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router/immutable';
import state from 'reducer/reducer'
import configureStore from './store/store';
import history from './history/history';
import './styles/styles.css';
import App from './App';

const preloadedState = state;
const store = configureStore(preloadedState);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
