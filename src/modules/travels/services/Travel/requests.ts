import { useService } from '../../hooks/useService';
import { Travel } from './interfaces';

const { get } = useService();

export const getAllTravels = async (): Promise<Travel[]> => {
  const response = await get('/travel', {}, '');
  const travels: Travel[] = response.data;

  return travels;
};
