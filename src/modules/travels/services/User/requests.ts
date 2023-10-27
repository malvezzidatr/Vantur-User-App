import { useService } from "../../hooks/useService"

const { post } = useService();

export const createUser = async (data: CreateUser) => {
    const { firstName: first_name, lastName: last_name, email, password } = data

    await post('/user/create', {
        first_name,
        last_name,
        email,
        password
    });
}