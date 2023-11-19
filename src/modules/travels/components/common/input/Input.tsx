import React, { useState } from 'react';
import * as S from './styles';
import { TextInputProps, ViewStyle } from 'react-native';
import Icon, { FontAwesome5IconProps } from 'react-native-vector-icons/FontAwesome5';

interface InputProps extends TextInputProps {
  labelText: string;
  placeholder: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  inputStyle?: ViewStyle;
  error?: boolean;
  errorMessage?: string;
  onBlur?: () => void;
  containerStyle?: ViewStyle;
  icon?: FontAwesome5IconProps;
  iconFunction?: () => void;
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
  containerStyle,
  icon,
  iconFunction,
  ...props
}): JSX.Element => {
  const [emptyError, setEmptyError] = useState<boolean>();

  const defaultOnBlur = () => {
    const shouldShowEmptyError = !value;
    setEmptyError(shouldShowEmptyError);
  };

  return (
    <S.Container style={containerStyle}>
      <S.Text>{labelText}</S.Text>
      <S.Input
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
      {
        icon &&
          <Icon
            onPress={iconFunction}
            style={{position: 'absolute', top: 40, right: 15}}
            name={icon.name}
            solid
            size={18}
            color={icon.color}
            
          />
      }
    </S.Container>
  );
};
