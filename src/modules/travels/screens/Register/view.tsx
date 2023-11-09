import React from 'react';
import { ActivityIndicator } from 'react-native';
import useRegisterViewModel from './view.model';
import { Input } from '../../components/commom/input/Input';
import { Button } from '../../components/commom/button/Button';
import * as S from './styles';
import { TextLink } from './../../components/commom/textLink/TextLink';

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
  } = useRegisterViewModel();

  if (isLoading) {
    return (
      <S.Container testID="loading" justifyContent>
        <ActivityIndicator size={'large'} />
      </S.Container>
    );
  }

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
        style={{ marginTop: 8 }}
      />
      <Input
        labelText="E-mail"
        value={email}
        setValue={setEmail}
        placeholder="Digite seu e-mail"
        style={{ marginTop: 8 }}
      />
      <Input
        labelText="Senha"
        value={password}
        setValue={setPassword}
        placeholder="Digite sua senha"
        style={{ marginTop: 8 }}
      />
      <Input
        labelText="Senha"
        value={password}
        setValue={setPassword}
        placeholder="Digite sua senha novamente"
        style={{ marginTop: 8 }}
      />
      <Button
        style={{ marginTop: 40 }}
        disabled={buttonIsDisabled}
        onClick={onSubmit}
        text="Cadastrar"
      />
      <TextLink firstText="Já possui uma conta? " linkText="Entre agora." toGo='/'/>
    </S.Container>
  );
};
