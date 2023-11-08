import React from 'react';
import * as S from './styles';
import { Text } from 'react-native';

export const Card: React.FC = (): JSX.Element => {
    return (
        <S.Container 
            style={[{
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 1,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
            }]}
            status='full'
        >
            <S.ValueContainer>
                <S.TextsContainer>
                    <S.ValueText>R$ 150,00</S.ValueText>
                    <S.DateHourContainer>
                        <S.DateText>23/09/2023</S.DateText>
                        <S.HourText>17h00</S.HourText>
                    </S.DateHourContainer>
                </S.TextsContainer>
            </S.ValueContainer>
            <S.InfoContainer>
                <S.TravelContainer>
                    <S.SpotsContainer>
                        <S.Spots>Guarujá</S.Spots>
                    </S.SpotsContainer>
                </S.TravelContainer>
                <S.PlacesContainer>
                    <S.InfosContainer>
                        <S.TitleInfo>Assentos</S.TitleInfo>
                        <S.Info>15</S.Info>
                    </S.InfosContainer>
                    <S.InfosContainer>
                        <S.TitleInfo>Reservados</S.TitleInfo>
                        <S.Info>12</S.Info>
                    </S.InfosContainer>
                    <S.InfosContainer>
                        <S.TitleInfo>Organizador</S.TitleInfo>
                        <S.Info>Caio Malvezzi</S.Info>
                    </S.InfosContainer>
                </S.PlacesContainer>
            </S.InfoContainer>
        </S.Container>
    )
}