import { render } from 'react-dom';
import App from './App';
import ReactDOM from 'react-dom';
import React from 'react';
import { UserProvider } from './context/UserContext';

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
