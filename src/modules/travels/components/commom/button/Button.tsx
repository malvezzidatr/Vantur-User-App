import React from "react";
import { Text, TouchableOpacity } from "react-native"

interface ButtonProps {
    text: string;
    onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ text, onClick }): JSX.Element => {
    return (
        <TouchableOpacity onPress={onClick}>
            <Text>{ text }</Text>
        </TouchableOpacity>
    )
}