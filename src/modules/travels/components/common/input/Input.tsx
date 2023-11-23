// PasswordInput.tsx

import React, { useEffect, useRef, useState } from 'react';
import * as S from './styles'; // substitua pelo caminho correto
import { TextInputProps, ViewStyle, Animated, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Easing, useAnimatedRef, useAnimatedStyle, useDerivedValue, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';

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
  
  const inputRef = useRef<TextInput>(null);

  const transY = useRef(new Animated.Value(38));
  const fontSize = useRef(new Animated.Value(16));

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const defaultOnBlur = () => {
    const shouldShowEmptyError = !value;
    setEmptyError(shouldShowEmptyError);
    setFocus(false);
    if(!value) {
      Animated.timing(transY.current, {
        toValue: 40,
        duration: 300,
        useNativeDriver: true,
      }).start();
  
      Animated.timing(fontSize.current, {
        toValue: 16,
        duration: 300,
        useNativeDriver: false,
      }).start()
    }
  };

  const defaultOnFocus = () => {
    setFocus(true);
    Animated.timing(transY.current, {
      toValue: 28,
      duration: 300,
      useNativeDriver: true,
    }).start();
    
    Animated.timing(fontSize.current, {
      toValue: 12,
      duration: 300,
      useNativeDriver: false,
    }).start()
  }

  const handleTextClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <S.Container style={containerStyle}>
      <Animated.View style={[{
        position: 'relative',
        left: 20,
        bottom: 2,
        zIndex: 10,
        alignSelf: 'flex-start'
      },{ transform: [{
        translateY: transY.current
      }]}]}
      >
        <S.Text
          focus={focus}
          onPress={handleTextClick}
          style={{
            fontSize: fontSize.current,
            height: 20,
          }}
        >
          {labelText}
        </S.Text>
      </Animated.View>
      <S.Input
        ref={inputRef}
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
        placeholder={focus ? placeholder : ''}
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
          style={{ position: 'absolute', top: 26, right: !showPassword ? 8 : 9.2, padding: 12, zIndex: 99 }}
          name={showPassword ? 'eye' : 'eye-slash'}
          solid
          size={18}
          color="#a2999e"
        />
      }
    </S.Container>
  );
};
