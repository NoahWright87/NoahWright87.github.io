import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/about/about';
import Home from './components/home/home';
import TopNav from './components/top-nav/top-nav'
import Footer from './components/footer/footer'

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
	
	<TopNav />
    <Home />
	<Footer />
	
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
