import React from 'react';
import * as S from './styles';

export const Card: React.FC = (): JSX.Element => {
    return (
        <S.Container 
            style={[{
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 1,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
            }]}
        >
            <S.ValueContainer>
                <S.Color />
                <S.TextsContainer>

                </S.TextsContainer>
            </S.ValueContainer>
            <S.InfoContainer>

            </S.InfoContainer>
        </S.Container>
    )
}