import { useCallback, useEffect, useState } from 'react';
import { getAllTravels } from '../../services/Travel/requests';
import { Travel } from '../../services/Travel/interfaces';
import { useNavigate } from 'react-router-native';
import { useStorageContext } from '../../contexts/useStorageContext';

const useHomeViewModel = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [travels, setTravels] = useState<Travel[]>([]);
  const [search, setSearch] = useState<string>('');
  const navigate = useNavigate();
  const { deleteStorageValue } = useStorageContext();

  useEffect(() => {
    getTravels();
  }, []);

  const getTravels = async () => {
    const { data, error } = await getAllTravels();
    if (error?.response?.status === 401) {
      deleteStorageValue('access_token');
      navigate('/');
    } else {
      setTravels(data);
    }
  };

  const onRefresh = useCallback(() => {
    try {
      setRefreshing(true);
      getTravels();
    } catch (error) {
      console.error('Error ao atualizar viagens: ', error);
    } finally {
      setRefreshing(false);
    }
  }, []);

  return {
    refreshing,
    travels,
    onRefresh,
    search,
    setSearch,
  };
};

export default useHomeViewModel;
