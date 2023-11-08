import styled from 'styled-components/native';

export const Container = styled.View<{ justifyContent?: boolean }>`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.blue};
  padding-top: 60px;
  padding-left: 30px;
  padding-right: 30px;
  justify-content: ${(props) => props.justifyContent && 'center'};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 45px;
`;
