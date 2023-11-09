import React, { SetStateAction } from 'react';
import { ViewStyle } from 'react-native';
import * as S from './styles';

export interface ISearchBarProps {
  placeholder: string;
  value: string;
  setValue: React.Dispatch<SetStateAction<string>>;
  inputStyle?: ViewStyle;
}

export const SearchBar: React.FC<ISearchBarProps> = ({
  placeholder,
  value,
  setValue,
  inputStyle,
}): JSX.Element => {
  return (
    <S.Container>
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
          [inputStyle],
        ]}
        placeholder={placeholder}
        value={value}
        onChangeText={setValue}
      />
    </S.Container>
  );
};
