import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { RegisterView } from '../view';  // Importe como 'typeof RegisterView'
import useRegisterViewModel from '../view.model';
import { ThemeProvider } from 'styled-components/native';
import { theme } from '../../../../../theme';

// Mock o módulo useRegisterViewModel para simular seu comportamento
jest.mock('../view.model');

// Defina o método mockReturnValue no módulo mock
const mockUseRegisterViewModel = useRegisterViewModel as jest.Mock;
mockUseRegisterViewModel.mockReturnValue({
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  isLoading: false,
  onSubmit: jest.fn(),
  setEmail: jest.fn(),
  setPassword: jest.fn(),
  setFirstName: jest.fn(),
  setLastName: jest.fn(),
  buttonIsDisabled: false,
});

describe('RegisterView', () => {
  it('deve exibir um formulário de registro', () => {
    const { getByText, getByPlaceholderText } = render(
      <ThemeProvider theme={theme}>
        <RegisterView />
      </ThemeProvider>
    );

    expect(getByText('Cadastro')).toBeTruthy();
    expect(getByPlaceholderText('Digite seu primeiro nome')).toBeTruthy();
    expect(getByPlaceholderText('Digite seu sobrenome')).toBeTruthy();
    expect(getByPlaceholderText('Digite seu e-mail')).toBeTruthy();
    expect(getByPlaceholderText('Digite sua senha')).toBeTruthy();
  });

  it('should show loading', () => {
    mockUseRegisterViewModel.mockReturnValue({
      isLoading: true,
    });

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <RegisterView />
      </ThemeProvider>
    );

    expect(getByTestId('loading')).toBeTruthy()
  })
});
