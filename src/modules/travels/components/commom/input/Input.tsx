import React from 'react';
import * as S from './styles';
import { TextInputProps, ViewStyle } from 'react-native';

interface InputProps extends TextInputProps {
    labelText: string;
    placeholder: string;
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    style?: ViewStyle;
}

export const Input: React.FC<InputProps> = ({
    labelText,
    placeholder,
    value,
    setValue,
    style
}): JSX.Element => {
    return (
        <S.Container>
            <S.Text>{ labelText }</S.Text>
            <S.Input
                style={[{
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5
                }, style]}
                placeholder={placeholder}
                value={value}
                onChangeText={setValue}
            />
        </S.Container>
    )
}