import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
// This code initializes a React application with routing capabilities using BrowserRouter and renders the main App component into the root element of the HTML document.
// It also imports global styles from App.css to style the application.
