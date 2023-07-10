import React from 'react';
import ReactDOM from 'react-dom/client';

import CssBaseLine from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme';
import "./index.scss";

import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <CssBaseLine />
    <ThemeProvider theme={theme}> 
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider> 
  </>
);
