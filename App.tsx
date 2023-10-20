import { StatusBar, View } from 'react-native';
import { Input } from './src/modules/travels/components/commom/input/Input';
import { Button } from './src/modules/travels/components/commom/button/Button';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <View>
        <StatusBar backgroundColor={'white'}/>
        <Input labelText='Senha' placeholder='Digite sua senha' />
        <Button text='clique aqui'  onClick={() => {}}/>
      </View>
    </ThemeProvider>
  );
}
