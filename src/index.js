import React from 'react';
import ReactDOM from 'react-dom';
import './assets/main.css';
import App from './App';
import { ThemeProvider } from './themeContext';
import { AppProvider } from './context';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <AppProvider>
        <App />
      </AppProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
