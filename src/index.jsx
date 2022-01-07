import { render } from 'react-dom';
import App from './App';
import ReactDOM from 'react-dom';
import React from 'react';
import { UserProvider } from './context/UserContext';
import { EntryProvider } from './context/EntryContext';
import ProvideAuth from './context/ProvideAuth';

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <EntryProvider>
        <App />
      </EntryProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
