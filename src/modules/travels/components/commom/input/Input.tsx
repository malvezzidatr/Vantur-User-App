import {TextInput, Text, View } from 'react-native';

interface InputProps {
    labelText: string;
    placeholder: string;
}

export const Input: React.FC<InputProps> = ({ labelText, placeholder }): JSX.Element => {
    return (
        <View className='w-full h-full'>
            <Text className='text-primary text-base font-bold'>{ labelText }</Text>
            <TextInput placeholder={placeholder} className='w-5/6 h-14 rounded-lg shadow bg-white pl-4' />
        </View>
    )
}