import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'mobx-react';
import KeywordStore from './stores/keywordStore';
import GifListStore from './stores/GifListStore';

const keywordStore = new KeywordStore();
const gifListStore = new GifListStore();

ReactDOM.render(
  <Provider keywordStore={keywordStore} gifListStore={gifListStore}>
    <App />
  </Provider>,
  document.querySelector('#root'),
);
