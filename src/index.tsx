import 'bulma/css/bulma.css';
import 'react-day-picker/lib/style.css';

import React from 'react';
import ReactDOM from 'react-dom';

import ReactGA from 'react-ga';

import App from './App';
import DateSelectorProvider from './components/DateSelectorProvider';
import GlobalStyle from './GlobalStyle';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <DateSelectorProvider>
      <GlobalStyle />
      <App />
    </DateSelectorProvider>
  </React.StrictMode>,
  document.getElementById('root'),
  () => {
    ReactGA.initialize('UA-162058993')
    ReactGA.pageview(window.location.pathname);
  }
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
