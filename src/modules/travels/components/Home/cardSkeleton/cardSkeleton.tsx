import React from 'react';
import * as S from '../card/styles';
import { View } from 'react-native';
import { Skeleton } from 'moti/skeleton';

export const CardSkeleton = () => {
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
              marginHorizontal: 30, 
            },
          ]}
          status="empty"
        >
        <S.ValueContainer>
            <S.TextsContainer>
              <Skeleton show width={70} colorMode='light' >
                <S.ValueText></S.ValueText>
              </Skeleton>
              <Skeleton show width={80} colorMode='light' height={20}>
                <S.DateHourContainer>
                  <S.DateText></S.DateText>
                  <S.HourText></S.HourText>
                </S.DateHourContainer>
              </Skeleton>
            </S.TextsContainer>
        </S.ValueContainer>
        <S.InfoContainer>
          <S.TravelContainer>
            <View>
              <Skeleton show height={20} colorMode='light'>
                <S.SpotsContainer>
                  <S.Spots></S.Spots>
                </S.SpotsContainer>
              </Skeleton>
              <Skeleton show height={20} colorMode='light'>
                <S.SpotsContainer>
                  <S.Spots></S.Spots>
                </S.SpotsContainer>
              </Skeleton>
            </View>
          </S.TravelContainer>
          <S.PlacesContainer>
            <Skeleton show width={50} height={30} colorMode='light'>
              <S.InfosContainer>
                  <S.TitleInfo></S.TitleInfo>
                  <S.Info></S.Info>
              </S.InfosContainer>
            </Skeleton>
            <Skeleton show width={50} height={30} colorMode='light'>
              <S.InfosContainer>
                <S.TitleInfo></S.TitleInfo>
                <S.Info></S.Info>
              </S.InfosContainer>
            </Skeleton>
            <Skeleton show width={50} height={30} colorMode='light'>
              <S.InfosContainer>
                <S.TitleInfo></S.TitleInfo>
                <S.Info></S.Info>
              </S.InfosContainer>
            </Skeleton>
          </S.PlacesContainer>
        </S.InfoContainer>
      </S.Container>
    )
  }