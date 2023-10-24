import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/theme';
import { RegisterView } from './src/modules/travels/screens/Register/view';
import { useService } from './src/modules/travels/hooks/useService';
import axios from 'axios';

export default function App() {
  const { post, get } = useService();
  const test = async () => {
    const response = await axios.post('http://192.168.15.129:3000/auth/login', {
        "email": 'caiomalvezzi07@gmail.com',
        "password": 'teste1234'
    })
    console.log(response?.data.access_token)
  }

  useEffect(() => {
    test();
  }, [])
  return (
    <ThemeProvider theme={theme}>
      <RegisterView />
    </ThemeProvider>
  );
}
