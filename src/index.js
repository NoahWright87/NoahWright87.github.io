import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ReactGA from 'react-ga';
ReactGA.initialize('G-PMVRSR4QHY', {
    debug: true,
    gaOptions: { siteSpeedSampleRate: 100 }
});

const rootElement = document.getElementById('root');

//ReactGA.pageview(window.location.pathname + window.location.search);
//alert(window.location.pathname + window.location.search);
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement);

registerServiceWorker();

