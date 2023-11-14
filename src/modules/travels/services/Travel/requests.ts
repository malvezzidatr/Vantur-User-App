import { useService } from '../../hooks/useService';
import { Travel } from './interfaces';
import { useStorageContext } from '../../contexts/useStorageContext';

const { get } = useService();


export const getAllTravels = async (): Promise<{data: Travel[]; error: any}> => {
  try {
    const response = await get('/travel', {}, '');
    const travels: Travel[] = response.data;
    return { data: travels, error: null }
  } catch (error) {
    return { data: [], error}
  }
};
