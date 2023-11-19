// PasswordInput.tsx

import React, { useState } from 'react';
import * as S from './styles'; // substitua pelo caminho correto
import { TextInputProps, ViewStyle } from 'react-native';
import Icon, { FontAwesome5IconProps } from 'react-native-vector-icons/FontAwesome5';

interface PasswordInputProps extends TextInputProps {
  labelText: string;
  placeholder: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  inputStyle?: ViewStyle;
  error?: boolean;
  errorMessage?: string;
  onBlur?: () => void;
  containerStyle?: ViewStyle;
  helperText?: string;
}

export const Input: React.FC<PasswordInputProps> = ({
  labelText,
  placeholder,
  value,
  setValue,
  inputStyle,
  error,
  errorMessage,
  onBlur,
  containerStyle,
  helperText,
  ...props
}): JSX.Element => {
  const [emptyError, setEmptyError] = useState<boolean>();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [focus, setFocus] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const defaultOnBlur = () => {
    const shouldShowEmptyError = !value;
    setEmptyError(shouldShowEmptyError);
    setFocus(false);
  };

  const defaultOnFocus = () => {
    setFocus(true);
  }

  return (
    <S.Container style={containerStyle}>
      <S.Text>{labelText}</S.Text>
      <S.Input
        focus={focus}
        {...props}
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
        onFocus={defaultOnFocus}
        secureTextEntry={props?.secureTextEntry && !showPassword}
      />
      {error && (
        <S.ErrorText>
          {errorMessage ?? 'Algo está errado com este campo'}
        </S.ErrorText>
      )}
      {emptyError ? (
        <S.ErrorText>Este campo não pode ficar vazio</S.ErrorText>
      ) :
        <S.ErrorText></S.ErrorText>
      }
      {
        helperText && !error && !emptyError && (
          <S.HelperText>
            {helperText}
          </S.HelperText>
        )
      }
      {
        props?.secureTextEntry &&
        <Icon
          onPress={togglePasswordVisibility}
          style={{ position: 'absolute', top: 40, right: 15 }}
          name={showPassword ? 'eye' : 'eye-slash'}
          solid
          size={18}
          color="black"
        />
      }
    </S.Container>
  );
};
