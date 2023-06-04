import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@mui/material';

import App from './App';
import theme from './providers/ThemeProvider';
import { FormProvider } from './providers/FormProvider';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <FormProvider>
      <App />
    </FormProvider>
  </ThemeProvider>,
  document.getElementById('root')
);