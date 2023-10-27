import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/theme';
import { RegisterView } from './src/modules/travels/screens/Register/view';
import { useService } from './src/modules/travels/hooks/useService';
import axios from 'axios';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <RegisterView />
    </ThemeProvider>
  );
}
