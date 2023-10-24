import { useState } from "react";
import { RegisterModel } from "./models";

const useRegisterViewModel = (): RegisterModel => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const onSubmit = async () => {
        try {
            setIsLoading(true);
            console.log({email, password, firstName, lastName})
        } catch (err) {
            console.log(err);
        } finally {
            setTimeout(() => {
                setIsLoading(false);
            }, 2000)
        }
    }

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
    }
}

export default useRegisterViewModel;