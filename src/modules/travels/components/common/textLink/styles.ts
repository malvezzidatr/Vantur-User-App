import styled from 'styled-components/native';

export const LinkContainer = styled.View`
  flex-direction: row;
  margin-top: 4px;
`;

export const LinkText = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 12px;
`;

export const LinkBold = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 12px;
  font-weight: 700;
  text-decoration: underline;
`;
