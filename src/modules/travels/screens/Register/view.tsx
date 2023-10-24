import React from "react";
import { SafeAreaView, TextInput, View, Text } from "react-native";
import useRegisterViewModel from './view.model';

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
        <SafeAreaView>
            <View>
                <Text>Teste</Text>
                <TextInput
                    placeholder="teste"
                    value={email}
                    onChangeText={setEmail}
                />
            </View>
        </SafeAreaView>
    )
}