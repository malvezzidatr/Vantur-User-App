import { Text, TouchableOpacity } from "react-native"

interface ButtonProps {
    text: string;
    onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ text, onClick }): JSX.Element => {
    return (
        <TouchableOpacity onPress={onClick} className="bg-primary w-5/6 h-14 rounded-lg items-center justify-center">
            <Text className="text-xl text-white font-bold">{ text }</Text>
        </TouchableOpacity>
    )
}