import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux'; // createStore
import { Provider } from 'react-redux'; // Provider
import rootReducer from './store/modules'; // root 리듀서
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// 스토어 만들기
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
