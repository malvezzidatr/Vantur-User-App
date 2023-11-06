import React from 'react';
import { Text } from 'react-native';
import * as S from './styles';
import { Card } from '../../components/Home/card/card';

export const HomeView: React.FC = (): JSX.Element => {
    return (
        <S.Container>
            <S.HelloGuy>Ola,{'\n'}Pessoa!</S.HelloGuy>
            <Card />
        </S.Container>
    )
}