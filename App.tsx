import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/theme';
import Router from './src/routes/router';
import ContextProvider from './src/modules/travels/contexts/Provider';

export default function App() {
  return (
    <ContextProvider>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </ContextProvider>
  );
}
