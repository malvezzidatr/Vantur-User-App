import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import App from './App';

describe('App Component', () => {
  it('deve renderizar corretamente o componente App', () => {
    const { getByText, getByPlaceholderText } = render(<App />);

    // Verifique se o texto do rótulo foi renderizado corretamente.
    expect(getByText('Senha')).toBeTruthy();

    // Verifique se o placeholder do campo de entrada foi renderizado corretamente.
    expect(getByPlaceholderText('Digite sua senha')).toBeTruthy();

    fireEvent.press(getByText('Clique em mim'));
    // Verifique se o botão foi renderizado com o texto "Clique em mim".
    expect(getByText('Clique em mim')).toBeTruthy();
  });
});
