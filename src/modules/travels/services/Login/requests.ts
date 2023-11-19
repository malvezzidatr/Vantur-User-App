import { useService } from '../../hooks/useService';
import { Login } from './interfaces';

const { post } = useService();

export const login = async (dataLogin: Login): Promise<any> => {
  const response = await post('/auth/login', dataLogin);
  const { access_token, userData } = response?.data;
  return {
    access_token,
    userData,
  };
};
