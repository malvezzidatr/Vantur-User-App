import React from 'react';
import * as S from './styles';
import { Text } from 'react-native';

export interface IToast {
    text: string;
    title: string;
}

export const Toast: React.FC<IToast> = ({ text, title }): JSX.Element => {
    return (
        
            <S.ToastContainer
                style={[
                    {
                      shadowColor: '#000',
                      shadowOffset: {
                        width: 0,
                        height: 1,
                      },
                      shadowOpacity: 0.25,
                      shadowRadius: 3.84,
            
                      elevation: 5,
                    },
                  ]}
            >
                <S.ContentContainer>
                    <S.Title>{title}</S.Title>
                    <S.Text>{text}</S.Text>
                </S.ContentContainer>
            </S.ToastContainer>
    )
}