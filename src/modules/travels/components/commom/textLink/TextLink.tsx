import React from 'react';
import * as S from './styles';
import { Link } from 'react-router-native';

interface TextLinkProps {
  firstText: string;
  linkText: string;
}

export const TextLink: React.FC<TextLinkProps> = ({
  firstText,
  linkText,
}): JSX.Element => {
  return (
    <S.LinkContainer>
      <S.LinkText>{firstText}</S.LinkText>
      <S.Link to="/login">
        <S.LinkBold>{linkText}</S.LinkBold>
      </S.Link>
    </S.LinkContainer>
  );
};
