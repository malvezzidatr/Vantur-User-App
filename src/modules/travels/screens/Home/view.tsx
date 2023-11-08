import React, { useEffect } from 'react';
import * as S from './styles';
import { Card } from '../../components/Home/card/card';
import { getAllTravels } from '../../services/Travel/requests';

export const HomeView: React.FC = (): JSX.Element => {
    useEffect(() => {
        const teste = async () => {
            await getAllTravels();
        }
        teste();
    }, [])
    return (
        <S.Container>
            <S.HelloGuy>Ola,{'\n'}Pessoa!</S.HelloGuy>
            <Card />
        </S.Container>
    )
}