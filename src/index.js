// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppContext from './context/AppContext';

ReactDOM.render(
  <React.StrictMode>
    <AppContext.Provider>
      <App />
    </AppContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

