import React from "react";
import * as S from './styles';
import { TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
    text: string;
    onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ text, onClick, ...props }): JSX.Element => {
    return (
        <S.Button {...props} onPress={onClick}>
            <S.ButtonText>{ text }</S.ButtonText>
        </S.Button>
    )
}