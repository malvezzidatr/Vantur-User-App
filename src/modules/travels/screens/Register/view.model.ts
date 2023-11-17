import { useState, useEffect } from 'react';
import { RegisterModel } from './models';
import { createUser } from '../../services/User/requests';
import { useNavigate } from 'react-router-native';

const useRegisterViewModel = (): RegisterModel => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [buttonIsDisabled, setButtonIsDisabled] = useState<boolean>(true);
  const navigate = useNavigate();

  const onSubmit = async () => {
    try {
      setIsLoading(true);
      const data = {
        firstName,
        lastName,
        email,
        password,
      };
      await createUser(data);
      navigate('/')
    } catch (err: any) {
      console.error(err?.response?.data?.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const shouldDisableButton = !(email && password && firstName && lastName);
    setButtonIsDisabled(shouldDisableButton);
  }, [email, password, firstName, lastName]);

  return {
    email,
    password,
    firstName,
    lastName,
    setEmail,
    setPassword,
    setFirstName,
    setLastName,
    onSubmit,
    isLoading,
    buttonIsDisabled,
  };
};

export default useRegisterViewModel;
