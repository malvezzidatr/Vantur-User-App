import { useEffect, useState } from "react";
import { login } from "../../services/Login/requests";
import { useNavigate } from "react-router-native";
import * as SecureStore from 'expo-secure-store';
import  { useStorageContext } from "../../contexts/useStorageContext";

const useLoginViewModel = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    const { getStorageValue, setStorageValue } = useStorageContext();

    useEffect(() => {
        const checkIfIsAlreadyLoggedIn = async () => {
            const loggedIn = await getStorageValue('access_token');
            if (loggedIn) {
                navigate('/home');
            }
        }
        checkIfIsAlreadyLoggedIn()
    }, [])

    // const getKey = async (key: string) => {
    //     return await SecureStore.getItemAsync(key);
    // }

    // const saveKey = async (key: string, value: string) => {
    //     await SecureStore.setItemAsync(key, value)
    // }

    const userLogin = async () => {
        setIsLoading(true);
        try {
            const token = await login({email, password});
            setStorageValue('access_token', token);
            navigate('/home');
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    return {
        email,
        setEmail,
        password,
        setPassword,
        userLogin,
        isLoading
    }
}

export default useLoginViewModel;