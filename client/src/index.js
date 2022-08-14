import React from 'react';

import * as ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { Provider } from  'react-redux';
// import 'antd/dist/antd.css';
import { applyMiddleware, createStore } from "redux";
import promiseMiddleware from 'redux-promise';
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from 'redux-thunk';
import rootReducer from './_reducers'

const root = ReactDOM.createRoot(document.getElementById("root"));

const createStoreWithMiddleware = applyMiddleware(
  promiseMiddleware, 
  ReduxThunk
  )(createStore);

root.render(
  <Provider
    store={ createStoreWithMiddleware(rootReducer, composeWithDevTools())}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
    
  </Provider>,
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
