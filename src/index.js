import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Optional global CSS if you need
import App from './App'; // Importing the main App component

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
