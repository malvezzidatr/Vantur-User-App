import React from "react";

export interface RegisterModel {
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        setEmail: React.Dispatch<React.SetStateAction<string>>;
        setPassword: React.Dispatch<React.SetStateAction<string>>;
        setFirstName: React.Dispatch<React.SetStateAction<string>>;
        setLastName: React.Dispatch<React.SetStateAction<string>>;
        isLoading: boolean;
        onSubmit: () => void;
}