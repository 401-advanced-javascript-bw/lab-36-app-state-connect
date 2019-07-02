// import React from 'react';
// import ReactDOM from 'react-dom';

// import App from './components/app.js';

// function Main() {
//   return <App />;
// }

// const rootElement = document.getElementById('root');
// ReactDOM.render(<Main />, rootElement);

import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app.js';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';

import createStore from './store/index';
const store = createStore();

function Main() {
  return <App />;
}

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  rootElement
);

serviceWorker.unregister();
