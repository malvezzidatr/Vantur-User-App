import styled from 'styled-components/native';
import { BlurView } from 'expo-blur';
import { View } from 'moti';

export const Container = styled.View`
  width: 260px;
  height: 340px;
  position: relative;
  border-radius: 20px;
  align-items: center;
  justify-content: space-between;
`;

export const DateContainer = styled.View`
  position: absolute;
  left: -1px;
  top: 0;
  height: 50px;
  width: 50px;
  background-color: ${({ theme }) => theme.colors.white};
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
  align-items: center;
  justify-content: center;
`;

export const Date = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 24px;
  font-weight: bold;
  font-style: italic;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 30px;
  font-style: italic;
  text-shadow: ${({ theme }) => theme.colors.white} 0.5px 0.5px 4px;
`;

export const OwnerContainer = styled.View``;

export const OwnerTitle = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 12px;
  text-shadow: ${({ theme }) => theme.colors.white} 0.5px 0.5px 4px;
`;

export const Owner = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-weight: bold;
  font-style: italic;
  text-shadow: ${({ theme }) => theme.colors.white} 0.5px 0.5px 4px;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  padding: 0 4px 30px;
  margin-top: 10px;
`;

export const FavoriteButton = styled.View`
  width: 70px;
  height: 70px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const GoToDetailsButton = styled.TouchableOpacity`
  width: 100px;
  height: 70px;
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

export const TravelImage = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 20px;
`

export const MiddleContainer = styled.View`
  width: 210px;
  height: 150px;
  border-radius: 10px;
  margin-top: 70px;
  padding-top: 25px;
  padding-left: 30px;
  background-color: ${({ theme }) => theme.colors.primary};
`