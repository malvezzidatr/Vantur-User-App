import React, { useEffect, useRef, useState } from "react";
import * as S from './styles';
import { Animated, Image, Text, TouchableOpacity } from "react-native";
import { BlurView } from "expo-blur";
import Icon from 'react-native-vector-icons/FontAwesome5';
import LottieView from 'lottie-react-native';

export interface ITravelCardProps {
    value: string;
    destination: string;
    seats: number;
    reserveds: number;
    owner: string;
    departure: string;
    isFavorite: boolean;
  }

export const TravelCard: React.FC<ITravelCardProps> = ({
  value,
  destination,
  seats,
  reserveds = 0,
  owner,
  departure,
  isFavorite
}): JSX.Element => {
    const [favorite, setFavorite] = useState<boolean>(isFavorite);
    const animation = useRef(null);

    useEffect(() => {
        if (!favorite) {
            animation.current?.play(20, 100)
        } else {
            animation.current?.play(0, 0);
        }
    }, [favorite]);

    return (
        <S.Container
            style={{
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 4,
                },
                shadowOpacity: 0.30,
                shadowRadius: 4.65,

                elevation: 8,
            }}
        >
            <Image style={{position: 'absolute', width: '100%', height: '100%', borderRadius: 20}} source={{uri: 'https://www.melhoresdestinos.com.br/wp-content/uploads/2019/02/passagens-aereas-paris-capa2019-02.jpg'}}/>
            <S.DateContainer>
                <S.Date>14</S.Date>
            </S.DateContainer>
            <BlurView
                intensity={60} 
                style={{
                    width: 210,
                    height: 150,
                    borderRadius: 10,
                    overflow: 'hidden',
                    marginTop: 70,
                    paddingTop: 25,
                    paddingLeft: 30
                }}>
                <S.Title>{destination}</S.Title>
                <S.OwnerContainer>
                    <S.OwnerTitle>Organizador:</S.OwnerTitle>
                    <S.Owner>{owner}</S.Owner>
                </S.OwnerContainer>
            </BlurView>
            <S.ButtonContainer>
                <TouchableOpacity onPress={() => setFavorite(!favorite)}>
                    <S.FavoriteButton>
                        <LottieView
                            loop={false}
                            ref={animation}
                            style={{
                                height: 80,
                            }}
                            source={require('../../../lotties/heart.json')}
                        />
                    </S.FavoriteButton>
                </TouchableOpacity>
                <S.GoToDetailsButton><Icon name="chevron-right" color='white' size={15} /></S.GoToDetailsButton>
            </S.ButtonContainer>
        </S.Container>
    )
}