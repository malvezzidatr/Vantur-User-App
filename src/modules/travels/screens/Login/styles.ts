import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.blue};
  padding: 30px 30px 60px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: Roboto;
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 40px;
`;
