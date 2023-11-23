import { Animated } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 98%;
  align-items: center;
  justify-content: center;
  margin-left: 4px;
`;

export const Text = styled(Animated.Text)<{focus?: boolean}>`
  color: ${({ theme, focus }) => focus ? theme.colors.primary : '#bdbbb6'};
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
    `1px solid ${props?.theme.colors.primary}`
    :
    (props?.error ? `1px solid ${props?.theme.colors.error}` : `1px solid #a2999e`)};
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
