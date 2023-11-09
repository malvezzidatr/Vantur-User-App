import React from 'react';
import * as S from './styles';
import Icon from '@expo/vector-icons/MaterialIcons';
import { View } from 'react-native';

export interface ICardProps {
  value: string;
  destination: string;
  seats: number;
  reserveds: number;
  owner: string;
  departure: string;
}

export const Card: React.FC<ICardProps> = ({
  value,
  destination,
  seats,
  reserveds = 0,
  owner,
  departure,
}): JSX.Element => {
  return (
    <S.Container
      style={[
        {
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
        },
      ]}
      status="full"
    >
      <S.ValueContainer>
        <S.TextsContainer>
          <S.ValueText>R$ {value}</S.ValueText>
          <S.DateHourContainer>
            <S.DateText>23/09/2023</S.DateText>
            <S.HourText>17h00</S.HourText>
          </S.DateHourContainer>
        </S.TextsContainer>
      </S.ValueContainer>
      <S.InfoContainer>
        <S.TravelContainer>
          <S.Icon name='undo' size={16}/>
          <View>
            <S.SpotsContainer>
              <S.Spots border>{departure}</S.Spots>
            </S.SpotsContainer>

            <S.SpotsContainer>
              <S.Spots>{destination}</S.Spots>
            </S.SpotsContainer>
          </View>
        </S.TravelContainer>
        <S.PlacesContainer>
          <S.InfosContainer>
            <S.TitleInfo>Assentos</S.TitleInfo>
            <S.Info>{seats}</S.Info>
          </S.InfosContainer>
          <S.InfosContainer>
            <S.TitleInfo>Reservados</S.TitleInfo>
            <S.Info>{reserveds}</S.Info>
          </S.InfosContainer>
          <S.InfosContainer>
            <S.TitleInfo>Organizador</S.TitleInfo>
            <S.Info>{owner}</S.Info>
          </S.InfosContainer>
        </S.PlacesContainer>
      </S.InfoContainer>
    </S.Container>
  );
};
