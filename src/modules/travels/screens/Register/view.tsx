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
    showPsswd,
    showRepeatPsswd,
    repeatPassword,
    setRepeatPassword
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
      />
      <Input
        labelText="E-mail"
        value={email}
        setValue={setEmail}
        placeholder="Digite seu e-mail"
      />
      <Input
        labelText="Senha"
        value={password}
        setValue={setPassword}
        placeholder="Digite sua senha"
        secureTextEntry={!showPsswd}
      />
      <Input
        labelText="Repita sua senha"
        value={repeatPassword}
        setValue={setRepeatPassword}
        placeholder="Digite sua senha novamente"
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
        toGo="Login"
      />
    </S.Container>
  );
};
