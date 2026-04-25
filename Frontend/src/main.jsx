import React from 'react';
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes } from 'react-router-dom'
import App from './App'
import "./i18n";

import './App.css';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Provider store={appStore}>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
  </Provider>
 
  ,
)

