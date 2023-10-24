import React from "react";
import { ActivityIndicator } from "react-native";
import useRegisterViewModel from './view.model';
import { Input } from "../../components/commom/input/Input";
import { Button } from "../../components/commom/button/Button";
import * as S from './styles';
import { TextLink } from "../../components/commom/textLink/TextLink";

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
    
    if (isLoading) {
        return (
            <S.Container justifyContent>
                <ActivityIndicator size={"large"} />
            </S.Container>
        )
    }

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
                    marginBottom: 20
                }}
            />
            <Input
                labelText="Senha"
                value={password}
                setValue={setPassword}
                placeholder="Digite sua senha"
                style={{
                    marginBottom: 100
                }}
            />
            <Button onClick={onSubmit} text="Cadastrar"/>
            <TextLink firstText="Já possui uma conta? " linkText="Entre agora."/>
        </S.Container>
    )
}