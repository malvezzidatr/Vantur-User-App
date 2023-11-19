import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { RegisterModel } from './models';
import { createUser } from '../../services/User/requests';
import { useNavigate } from 'react-router-native';
import { useToast } from '../../contexts/useToast';

const useRegisterViewModel = (): RegisterModel => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [buttonIsDisabled, setButtonIsDisabled] = useState<boolean>(true);
  const [psswdIconName, setPsswdIconName] = useState<'eye' | 'eye-slash'>('eye-slash');
  const [repeatPsswdIconName, setRepeatPsswdIconName] = useState<'eye' | 'eye-slash'>('eye-slash');
  const [showPsswd, setShowPsswd] = useState<boolean>(false);
  const [showRepeatPsswd, setShowRepeatPsswd] = useState<boolean>(false);

  const navigate = useNavigate();
  const { showToast } = useToast();

  const changeIconPsswd = (
    setValue: Dispatch<SetStateAction<'eye' | 'eye-slash'>>,
    value: 'eye' | 'eye-slash',
    setShowPassword: Dispatch<SetStateAction<boolean>>,
    showPassword: boolean,
  ) => {
    setValue(value)
    setShowPassword(!showPassword);
  }

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
      navigate('/');
    } catch (err: any) {
      showToast('Erro ao cadastrar', 'error');
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
    psswdIconName,
    setPsswdIconName,
    repeatPsswdIconName,
    setRepeatPsswdIconName,
    changeIconPsswd,
    showPsswd,
    setShowPsswd,
    showRepeatPsswd,
    setShowRepeatPsswd,
  };
};

export default useRegisterViewModel;
