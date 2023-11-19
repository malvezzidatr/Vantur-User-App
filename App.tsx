import 'react-native-reanimated';
import 'react-native-gesture-handler';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/theme';
import Router from './src/routes/router';
import ContextProvider from './src/modules/travels/contexts/Provider';
import { StatusBar } from 'expo-status-bar';
import ToastProvider from './src/modules/travels/contexts/ToastProvider';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <ContextProvider>
        <ToastProvider>
          <StatusBar />
          <Router />
        </ToastProvider>
      </ContextProvider>
    </ThemeProvider>
  );
}
