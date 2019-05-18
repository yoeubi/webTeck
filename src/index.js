import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'mobx-react';
import KeywordStore from './stores/keywordStore';

const keywordStore = new KeywordStore();

ReactDOM.render(
  <Provider keywordStore={keywordStore}>
    <App />
  </Provider>,
  document.querySelector('#root'),
);
