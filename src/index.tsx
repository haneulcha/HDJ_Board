import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'

import { rootReducer } from './store';
import rootSaga from './store/sagas'

declare const window: Window & { devToolsExtension: any, __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any };
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer,composeEnhancers(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
