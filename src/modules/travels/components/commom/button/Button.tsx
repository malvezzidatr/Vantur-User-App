import React from "react";
import * as S from './styles';

interface ButtonProps {
    text: string;
    onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ text, onClick }): JSX.Element => {
    return (
        <S.Button onPress={onClick}>
            <S.ButtonText>{ text }</S.ButtonText>
        </S.Button>
    )
}