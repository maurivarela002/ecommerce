import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './home';
import reportWebVitals from './reportWebVitals';
import { UserProvider } from '../src/context/userContext'
import { CartProvider } from '../src/context/cartContext'

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
    <UserProvider>
    <Home />
    </UserProvider>
    </CartProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
