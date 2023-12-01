import React, { useEffect, useRef, useState } from 'react';
import * as S from './styles';
import { ActivityIndicator, Animated, View } from 'react-native';

export interface IToast {
  text: string;
  statusEnum: 'warn' | 'success' | 'error';
}

export const Toast: React.FC<IToast> = ({ text, statusEnum }): JSX.Element => {
  const [title, setTitle] = useState<string>('');
  const [animationFinished, setAnimationFinished] = useState<boolean>(false);
  const width = useRef(new Animated.Value(30));
  const height = useRef(new Animated.Value(30));
  const borderRadius = useRef(new Animated.Value(50));
  const left = useRef(new Animated.Value(180));
  const animationTime = 300;

  useEffect(() => {
    const titles = {
      success: 'Sucesso!',
      warn: 'Aviso!',
      error: 'Erro',
    };

    setTitle(titles[statusEnum]);
  }, []);

  useEffect(() => {
    Animated.timing(width.current, {
      toValue: 350,
      duration: animationTime,
      useNativeDriver: false,
    }).start();
    Animated.timing(height.current, {
      toValue: 90,
      duration: animationTime,
      useNativeDriver: false,
    }).start();
    Animated.timing(left.current, {
      toValue: 20,
      duration: animationTime,
      useNativeDriver: false,
    }).start();
    Animated.timing(borderRadius.current, {
      toValue: 12,
      duration: animationTime,
      useNativeDriver: false,
    }).start();
    setTimeout(() => {
      setAnimationFinished(true);
    }, animationTime);
  }, []);

  return (
    <S.NewToastContainer
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
        {
          width: width.current,
          height: height.current,
          borderRadius: borderRadius.current,
          left: left.current,
        },
      ]}
    >
      {animationFinished ? (
        <S.ContentContainer status={statusEnum}>
          <S.Title status={statusEnum}>{title}</S.Title>
          <S.Text>{text}</S.Text>
        </S.ContentContainer>
      ) : (
        <S.Indicator status={statusEnum} size={'large'} />
      )}
    </S.NewToastContainer>
  );
};
