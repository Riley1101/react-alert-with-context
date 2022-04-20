import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AlertProvider from './components/alert/provider';
import './index.css';
import reportWebVitals from './reportWebVitals';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AlertProvider>
        <App />
      </AlertProvider>
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
