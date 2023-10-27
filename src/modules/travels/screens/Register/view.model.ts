import { useState, useEffect } from "react";
import { RegisterModel } from "./models";
import { createUser } from "../../services/User/requests";

const useRegisterViewModel = (): RegisterModel => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [buttonIsDisabled, setButtonIsDisabled] = useState<boolean>(true);

    const onSubmit = async () => {
        try {
            setIsLoading(true);
            const data = {
                firstName,
                lastName,
                email,
                password
            }
            await createUser(data)
        } catch (err: any) {
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
        buttonIsDisabled
    }
}

export default useRegisterViewModel;