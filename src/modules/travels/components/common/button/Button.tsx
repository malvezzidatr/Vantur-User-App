import React from 'react';
import * as S from './styles';
import { TouchableOpacityProps, ActivityIndicator } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  text: string;
  onClick: () => void;
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  isLoading,
  ...props
}): JSX.Element => {
  return (
    <S.Button testID="button" {...props} onPress={onClick}>
      {isLoading ? (
        <ActivityIndicator color={'#B6E7F2'} size={'large'} />
      ) : (
        <S.ButtonText>{text}</S.ButtonText>
      )}
    </S.Button>
  );
};
