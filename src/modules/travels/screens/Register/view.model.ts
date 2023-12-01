import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { PsswdIconNames, RegisterModel } from './models';
import { createUser } from '../../services/User/requests';
import { useToast } from '../../contexts/useToast';
import { useNavigation } from '@react-navigation/native';

const useRegisterViewModel = (): RegisterModel => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [repeatPassword, setRepeatPassword] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [buttonIsDisabled, setButtonIsDisabled] = useState<boolean>(true);
  const [showPsswd, setShowPsswd] = useState<boolean>(false);
  const [showRepeatPsswd, setShowRepeatPsswd] = useState<boolean>(false);

  const navigate = useNavigation();
  const { showToast } = useToast();

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
      showToast('Cadastrado com sucesso!', 'success');
      navigate.navigate('Login');
    } catch (err: any) {
      showToast('Erro ao cadastrar', 'error');
      console.error(err?.response?.data?.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const psswdsAreEqual = password.localeCompare(repeatPassword) === 0;
    const shouldDisableButton = !(
      email &&
      password &&
      firstName &&
      lastName &&
      repeatPassword &&
      psswdsAreEqual
    );
    setButtonIsDisabled(shouldDisableButton);
  }, [email, password, firstName, lastName, repeatPassword]);

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
    showPsswd,
    showRepeatPsswd,
    repeatPassword,
    setRepeatPassword,
  };
};

export default useRegisterViewModel;
