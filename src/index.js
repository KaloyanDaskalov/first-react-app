import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import AuthProvider from './store/Auth';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
