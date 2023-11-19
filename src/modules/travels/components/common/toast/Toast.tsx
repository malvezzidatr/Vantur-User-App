import React, { useEffect, useState } from 'react';
import * as S from './styles';

export interface IToast {
  text: string;
  statusEnum: 'warn' | 'success' | 'error';
}

export const Toast: React.FC<IToast> = ({ text, statusEnum }): JSX.Element => {
  const [title, setTitle] = useState<string>('');

  useEffect(() => {
    const titles = {
      success: 'Sucesso!',
      warn: 'Aviso!',
      error: 'Erro',
    };

    setTitle(titles[statusEnum]);
  }, []);

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
      <S.ContentContainer status={statusEnum}>
        <S.Title status={statusEnum}>{title}</S.Title>
        <S.Text>{text}</S.Text>
      </S.ContentContainer>
    </S.ToastContainer>
  );
};
