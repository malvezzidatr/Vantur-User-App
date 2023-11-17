import React from 'react';
import * as S from './styles';
import { Image } from 'react-native';
import { Input } from '../../components/commom/input/Input';
import { Button } from '../../components/commom/button/Button';
import { TextLink } from '../../components/commom/textLink/TextLink';
import useLoginViewModel from './view.model';

export const LoginView: React.FC = (): JSX.Element => {
  const { email, setEmail, password, setPassword, userLogin, isLoading } =
    useLoginViewModel();

  return (
    <>
      <S.Container>
        <S.Title>Vantur</S.Title>
        <Image
          style={{ marginBottom: 40 }}
          source={require('./assets/imagemLogin.png')}
          alt="Imagem da tela de login"
        />

        <Input
          labelText="E-mail"
          placeholder="example@gmail.com"
          value={email}
          setValue={setEmail}
        />
        <Input
          labelText="Senha"
          placeholder="****************"
          value={password}
          setValue={setPassword}
          style={{ marginTop: 5 }}
        />

        <Button text="Login" onClick={userLogin} isLoading={isLoading} />
        <TextLink
          firstText="Não tem uma conta? "
          linkText="Registre-se agora."
          toGo="/register"
        />
      </S.Container>
    </>
  );
};
