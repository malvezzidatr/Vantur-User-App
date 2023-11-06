import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/theme';
import Router from './src/routes/router';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}
