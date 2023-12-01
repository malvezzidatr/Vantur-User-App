import { useEffect, useState } from 'react';
import { login } from '../../services/Login/requests';
import { useStorageContext } from '../../contexts/useStorageContext';
import { useToast } from '../../contexts/useToast';
import { useNavigation } from '@react-navigation/native';
import { BackHandler } from 'react-native';

const useLoginViewModel = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigation();

  const { getStorageValue, setStorageValue } = useStorageContext();

  useEffect(() => {
    const checkIfIsAlreadyLoggedIn = async () => {
      const loggedIn = await getStorageValue('access_token');
      if (loggedIn) {
        navigate.navigate('Home');
      }
    };
    checkIfIsAlreadyLoggedIn();
  }, []);

  const userLogin = async () => {
    setIsLoading(true);
    try {
      const { access_token, userData } = await login({ email, password });
      setStorageValue('access_token', access_token);
      setStorageValue('userData', JSON.stringify(userData));
      navigate.navigate('Home');
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    userLogin,
    isLoading,
  };
};

export default useLoginViewModel;
