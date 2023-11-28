import React from 'react';
import * as S from './styles';
import { useNavigation } from '@react-navigation/native';

interface TextLinkProps {
  firstText: string;
  linkText: string;
  toGo: 'Home' | 'Login' | 'Register';
}

export const TextLink: React.FC<TextLinkProps> = ({
  firstText,
  linkText,
  toGo,
}): JSX.Element => {
  const navigation = useNavigation();
  return (
    <S.LinkContainer>
      <S.LinkText>{firstText}</S.LinkText>
      <S.LinkBold onPress={() => navigation.navigate(toGo)}>{linkText}</S.LinkBold>
    </S.LinkContainer>
  );
};
