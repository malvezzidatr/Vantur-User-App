import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  align-items: center;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 16px;
  font-weight: 400;
  align-self: flex-start;
`;

export const Input = styled.TextInput<{ error?: boolean }>`
  width: 100%;
  height: 56px;
  padding-left: 20px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  border: ${(props) => (props.error ? '1px solid red' : '0px')};
`;
