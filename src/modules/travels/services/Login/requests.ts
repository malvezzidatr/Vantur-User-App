import { useService } from '../../hooks/useService';
import { Login } from './interfaces';

const { post } = useService();

export const login = async (dataLogin: Login): Promise<string> => {
  const response = await post('/auth/login', dataLogin);
  const token = response.data?.access_token
  return token;
};
