import React, { useState } from 'react';
import * as S from './styles';
import { TextInputProps, ViewStyle } from 'react-native';

interface InputProps extends TextInputProps {
  labelText: string;
  placeholder: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  inputStyle?: ViewStyle;
  error?: boolean;
  errorMessage?: string;
  onBlur?: () => void;
}

export const Input: React.FC<InputProps> = ({
  labelText,
  placeholder,
  value,
  setValue,
  inputStyle,
  error,
  errorMessage,
  onBlur,
  ...props
}): JSX.Element => {
  const [emptyError, setEmptyError] = useState<boolean>();

  const defaultOnBlur = () => {
    const shouldShowEmptyError = !value;
    setEmptyError(shouldShowEmptyError);
  };

  return (
    <S.Container {...props}>
      <S.Text>{labelText}</S.Text>
      <S.Input
        style={[
          {
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          },
          inputStyle,
        ]}
        placeholder={placeholder}
        value={value}
        onChangeText={setValue}
        error={error || emptyError}
        onBlur={onBlur ?? defaultOnBlur}
      />
      {error && (
        <S.ErrorText>
          {errorMessage ?? 'Algo está errado com este campo'}
        </S.ErrorText>
      )}
      {emptyError ? (
        <S.ErrorText>Este campo não pode ficar vazio</S.ErrorText>
      ) : (
        <S.ErrorText></S.ErrorText>
      )}
    </S.Container>
  );
};
