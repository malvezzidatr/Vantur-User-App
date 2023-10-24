import React from "react";
import { SafeAreaView, TextInput, View, Text } from "react-native";
import useRegisterViewModel from './view.model';
import { Input } from "../../components/commom/input/Input";
import { Button } from "../../components/commom/button/Button";
import * as S from './styles';

export const RegisterView = () => {
    const {email,
        password,
        firstName,
        lastName,
        isLoading,
        onSubmit,
        setEmail,
        setFirstName,
        setLastName,
        setPassword
    } = useRegisterViewModel();

    return (
        <S.Container>
            <S.Title>Cadastro</S.Title>
            <Input
                labelText="Nome"
                value={firstName}
                setValue={setFirstName}
                placeholder="Digite seu primeiro nome"
                style={{
                    marginBottom: 20
                }}
            />
            <Input
                labelText="Sobrenome"
                value={lastName}
                setValue={setLastName}
                placeholder="Digite seu sobrenome"
                style={{
                    marginBottom: 20
                }}
            />
            <Input
                labelText="E-mail"
                value={email}
                setValue={setEmail}
                placeholder="Digite seu e-mail"
                style={{
                    marginBottom: 20
                }}
            />
            <Input
                labelText="Senha"
                value={password}
                setValue={setPassword}
                placeholder="Digite sua senha"
                style={{
                    marginBottom: 135
                }}
            />
            <Button onClick={onSubmit} text="Cadastrar"/>
            <S.LinkContainer>
                <S.Link>Já possui uma conta? </S.Link>
                <S.LinkPressable>
                    <S.LinkBold>Entre Agora.</S.LinkBold>
                </S.LinkPressable>
            </S.LinkContainer>
        </S.Container>
    )
}