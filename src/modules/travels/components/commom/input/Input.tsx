import React from 'react';
import * as S from './styles';

interface InputProps {
    labelText?: string;
    placeholder?: string;
}

export const Input: React.FC<InputProps> = ({ labelText, placeholder }): JSX.Element => {
    return (
        <S.Container>
            <S.Text>{ labelText }</S.Text>
            <S.Input
                style={{
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5,
                }}
                placeholder={placeholder}/>
        </S.Container>
    )
}