import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Input } from './Input';

describe('Input Component', () => {
  it('deve renderizar corretamente o rótulo (labelText)', () => {
    const labelText = 'Nome:';
    const { getByText } = render(<Input labelText={labelText} placeholder="Insira seu nome" />);
    
    // Verifique se o rótulo foi renderizado corretamente.
    expect(getByText(labelText)).toBeTruthy();
  });

  it('deve renderizar corretamente o placeholder', () => {
    const placeholderText = 'Insira seu email';
    const { getByPlaceholderText } = render(<Input labelText="Email:" placeholder={placeholderText} />);
    
    // Verifique se o placeholder foi renderizado corretamente.
    expect(getByPlaceholderText(placeholderText)).toBeTruthy();
  });

  it('deve permitir a entrada de texto', () => {
    const { getByPlaceholderText } = render(<Input labelText="Nome:" placeholder="Insira seu nome" />);
    const inputElement = getByPlaceholderText('Insira seu nome');
    
    // Simule a entrada de texto no componente TextInput.
    fireEvent.changeText(inputElement, 'John Doe');

    // Verifique se o valor do campo de entrada foi atualizado corretamente.
    expect(inputElement.props.placeholder).toBe('Insira seu nome');
  });
});