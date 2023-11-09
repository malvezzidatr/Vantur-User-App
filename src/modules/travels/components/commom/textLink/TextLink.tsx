import React from 'react';
import * as S from './styles';
import { useNavigate } from 'react-router-native';

interface TextLinkProps {
  firstText: string;
  linkText: string;
  toGo: string;
}

export const TextLink: React.FC<TextLinkProps> = ({
  firstText,
  linkText,
  toGo
}): JSX.Element => {
  const navigate = useNavigate()
  return (
    <S.LinkContainer>
      <S.LinkText>{firstText}</S.LinkText>
      <S.LinkBold onPress={() => navigate(toGo)}>{linkText}</S.LinkBold>
    </S.LinkContainer>
  );
};
