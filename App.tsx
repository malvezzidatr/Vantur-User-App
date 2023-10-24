import { StatusBar, View } from 'react-native';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/theme';
import { RegisterView } from './src/modules/travels/screens/Register/view';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <View>
        <StatusBar backgroundColor={'white'}/>
        <RegisterView />
      </View>
    </ThemeProvider>
  );
}
