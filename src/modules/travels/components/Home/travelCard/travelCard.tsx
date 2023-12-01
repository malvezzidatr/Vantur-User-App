import React, { useEffect, useMemo, useRef, useState } from 'react';
import * as S from './styles';
import { Animated, Image, Text, TouchableOpacity, View } from 'react-native';
import { BlurView } from 'expo-blur';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LottieView from 'lottie-react-native';
import { LinearGradient } from 'expo-linear-gradient';

export interface ITravelCardProps {
  value: string;
  destination: string;
  seats: number;
  reserveds: number;
  owner: string;
  departure: string;
  isFavorite: boolean;
  goToDetails: () => void;
  image: string;
}

const TravelCard: React.FC<ITravelCardProps> = ({
  value,
  destination,
  seats,
  reserveds = 0,
  owner,
  departure,
  isFavorite,
  goToDetails,
  image,
}): JSX.Element => {
  const [favorite, setFavorite] = useState<boolean>(isFavorite);
  const animation = useRef(null);

  useEffect(() => {
    if (!favorite) {
      animation.current?.play(20, 100);
    } else {
      animation.current?.play(0, 0);
    }
  }, [favorite]);

  return (
    <S.Container
      style={{
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,

        elevation: 8,
      }}
    >
      <S.TravelImage source={{ uri: image }} />
      <S.DateContainer>
        <S.Date>14</S.Date>
      </S.DateContainer>

      <S.MiddleContainer>
        <S.Title>{destination}</S.Title>
        <S.OwnerContainer>
          <S.OwnerTitle>Organizador:</S.OwnerTitle>
          <S.Owner>{owner}</S.Owner>
        </S.OwnerContainer>
      </S.MiddleContainer>
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
        <S.GoToDetailsButton onPress={() => goToDetails()}>
          <Icon name="chevron-right" color="white" size={15} />
        </S.GoToDetailsButton>
      </S.ButtonContainer>
    </S.Container>
  );
};

const MemoizedTravelCard = React.memo(TravelCard);

export { MemoizedTravelCard as TravelCard };
