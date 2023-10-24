import { useState } from "react";

const useRegisterViewModel = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const onSubmit = async () => {
        console.log({email, password, firstName, lastName})
        try {
            setIsLoading(true);
        } catch (err) {
            console.log(err);
        } finally {
            setIsLoading(false);
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
        isLoading
    }
}

export default useRegisterViewModel;