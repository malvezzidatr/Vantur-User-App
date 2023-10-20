import React from 'react';
import {TextInput, Text, View } from 'react-native';

interface InputProps {
    labelText?: string;
    placeholder?: string;
}

export const Input: React.FC<InputProps> = ({ labelText, placeholder }): JSX.Element => {
    return (
        <View>
            <Text>{ labelText }</Text>
            <TextInput placeholder={placeholder}/>
        </View>
    )
}