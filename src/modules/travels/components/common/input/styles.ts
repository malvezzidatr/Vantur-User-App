import styled from 'styled-components/native';

export const Container = styled.View`
  width: 98%;
  align-items: center;
  justify-content: center;
  margin-left: 4px;
`;

export const Text = styled.Text<{ error?: boolean, focus: boolean }>`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  align-self: flex-start;
  position: relative;
  z-index: 10;
`;

export const Input = styled.TextInput<{ error?: boolean, focus: boolean }>`
  width: 100%;
  height: 56px;
  padding-left: 20px;
  padding-top: 4px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  border: ${(props) => props?.focus ?
    `2px solid ${props?.theme.colors.primary}`
    :
    (props?.error ? `2px solid ${props?.theme.colors.error}` : '0px')};
  position: relative;
`;

export const ErrorText = styled.Text`
  color: ${({ theme }) => theme.colors.error};
  font-size: 12px;
  font-weight: 600;
  align-self: flex-start;
`;

export const HelperText = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 12px;
  font-weight: 600;
  align-self: flex-start;
  margin-top: -12px;
`
