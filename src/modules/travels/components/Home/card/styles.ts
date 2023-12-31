import styled from 'styled-components/native';
import MaterialIcon from '@expo/vector-icons/MaterialIcons';

export const Container = styled.TouchableOpacity<{
  status: 'full' | 'empty' | 'almost';
}>`
  height: 120px;
  border-radius: 15px;
  flex-direction: row;
  background-color: white;
  border-left-width: 8px;
  border-left-color: ${(props) => {
    const { status, theme } = props;

    const statusColorMap = {
      full: theme.colors.error,
      empty: theme.colors.success,
      almost: theme.colors.warn,
    };

    const backgroundColor = statusColorMap[status];

    return backgroundColor;
  }};
  margin-bottom: 20px;
`;

export const ValueContainer = styled.View`
  flex: 1;
  border-style: dashed;
  border-right-width: 2px;
  border-color: #ddd;
  flex-direction: row;
`;

export const InfoContainer = styled.View`
  padding-top: 10px;
  flex: 2;
`;

export const TextsContainer = styled.View`
  flex: 12;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`;

export const ValueText = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 14px;
  font-weight: 700;
`;

export const DateHourContainer = styled.View`
  align-items: center;
`;

export const DateText = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 12px;
  font-weight: 700;
`;

export const HourText = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 10px;
`;

export const TravelContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex: 4;
`;

export const SpotsContainer = styled.View`
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
`;

export const Icon = styled(MaterialIcon).attrs((props) => ({
  color: props.theme.colors.primary,
}))`
  transform: rotate(-90deg);
  margin-right: -12px;
`;

export const Spots = styled.Text<{ border?: boolean }>`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 16px;
  font-weight: 700;
  text-transform: capitalize;
  padding-bottom: 4px;
  border-bottom-width: ${(props) => (props.border ? '0.8px' : '0')};
  border-style: ${(props) => (props.border ? 'dashed' : 'null')};
  width: 80%;
`;

export const PlacesContainer = styled.View`
  flex: 1.5;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 10px 14px 16px;
`;

export const InfosContainer = styled.View``;

export const TitleInfo = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 12px;
  font-weight: 200;
`;

export const Info = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 10px;
  font-weight: 600;
`;
