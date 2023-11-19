import React from 'react';

export interface RegisterModel {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  setFirstName: React.Dispatch<React.SetStateAction<string>>;
  setLastName: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
  onSubmit: () => void;
  buttonIsDisabled: boolean;
  psswdIconName: 'eye' | 'eye-slash';
  setPsswdIconName: React.Dispatch<React.SetStateAction<'eye' | 'eye-slash'>>;
  repeatPsswdIconName: 'eye' | 'eye-slash';
  setRepeatPsswdIconName: React.Dispatch<React.SetStateAction<'eye' | 'eye-slash'>>;
  changeIconPsswd: (
    setValue: React.Dispatch<React.SetStateAction<'eye' | 'eye-slash'>>,
    value: 'eye' | 'eye-slash',
    setShowPassword: React.Dispatch<React.SetStateAction<boolean>>,
    showPassword: boolean,
  ) => void;
  showPsswd: boolean;
  setShowPsswd: React.Dispatch<React.SetStateAction<boolean>>;
  showRepeatPsswd: boolean;
  setShowRepeatPsswd: React.Dispatch<React.SetStateAction<boolean>>;

}
