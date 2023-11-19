import React from 'react';
import useRegisterViewModel from './view.model';
import { Input } from '../../components/common/input/Input';
import { Button } from '../../components/common/button/Button';
import * as S from './styles';
import { TextLink } from '../../components/common/textLink/TextLink';

export const RegisterView: React.FC = (): JSX.Element => {
  const {
    email,
    password,
    firstName,
    lastName,
    isLoading,
    onSubmit,
    setEmail,
    setFirstName,
    setLastName,
    setPassword,
    buttonIsDisabled,
    psswdIconName,
    repeatPsswdIconName,
    setPsswdIconName,
    setRepeatPsswdIconName,
    changeIconPsswd,
    showPsswd,
    setShowPsswd,
    showRepeatPsswd,
    setShowRepeatPsswd
  } = useRegisterViewModel();

  return (
    <S.Container>
      <S.Title>Cadastro</S.Title>
      <Input
        labelText="Nome"
        value={firstName}
        setValue={setFirstName}
        placeholder="Digite seu primeiro nome"
      />
      <Input
        labelText="Sobrenome"
        value={lastName}
        setValue={setLastName}
        placeholder="Digite seu sobrenome"
        containerStyle={{ marginTop: 8 }}
      />
      <Input
        labelText="E-mail"
        value={email}
        setValue={setEmail}
        placeholder="Digite seu e-mail"
        containerStyle={{ marginTop: 8 }}
      />
      <Input
        labelText="Senha"
        value={password}
        setValue={setPassword}
        placeholder="Digite sua senha"
        containerStyle={{ marginTop: 8 }}
        icon={{name: psswdIconName}}
        iconFunction={() => changeIconPsswd(setPsswdIconName, psswdIconName === 'eye' ? 'eye-slash' : 'eye', setShowPsswd, showPsswd)}
        secureTextEntry={!showPsswd}
      />
      <Input
        labelText="Repita sua senha"
        value={password}
        setValue={setPassword}
        placeholder="Digite sua senha novamente"
        containerStyle={{ marginTop: 8 }}
        icon={{name: repeatPsswdIconName}}
        iconFunction={() => 
          changeIconPsswd(setRepeatPsswdIconName, repeatPsswdIconName === 'eye' ? 'eye-slash' : 'eye', setShowRepeatPsswd, showRepeatPsswd)}
        secureTextEntry={!showRepeatPsswd}
      />
      <Button
        style={{ marginTop: 40 }}
        disabled={buttonIsDisabled}
        onClick={onSubmit}
        text="Cadastrar"
        isLoading={isLoading}
      />
      <TextLink
        firstText="Já possui uma conta? "
        linkText="Entre agora."
        toGo="/"
      />
    </S.Container>
  );
};
