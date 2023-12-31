import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  padding: 40px 0 0;
  background-color: #f6f6f6;
`;

export const HelloGuy = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 20px;
  padding: 30px 30px 0 30px;
`;

export const SearchBarContainer = styled.View`
  padding: 0 30px;
`;

export const EventTitle = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 28px;
  font-weight: 700;
  padding: 0 30px;
  margin-bottom: 12px;
`;

export const CardsContainer = styled.View`
  flex-direction: row;
  margin-right: 30px;
`;
