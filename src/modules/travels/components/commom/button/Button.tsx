import { Text, TouchableOpacity } from "react-native"

interface ButtonProps {
    text: string;
}

export const Button = ({ text }: ButtonProps) => {
    return (
        <TouchableOpacity className="bg-primary w-5/6 h-14 rounded-lg items-center justify-center">
            <Text className="text-xl text-white font-bold">{ text }</Text>
        </TouchableOpacity>
    )
}