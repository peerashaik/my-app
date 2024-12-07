import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './css/styles.css';
import './css/hero-banner.css';
import { HashRouter } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <HashRouter>
    <ScrollToTop/>
    <App />
  </HashRouter>
);
