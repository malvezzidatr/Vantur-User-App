import { useCallback, useEffect, useState } from 'react';
import { getAllTravels } from '../../services/Travel/requests';
import { Travel } from '../../services/Travel/interfaces';
import { useNavigate } from 'react-router-native';
import { useStorageContext } from '../../contexts/useStorageContext';

export interface IUserData {
  first_name: string;
  last_name: string;
  id: string;
}

const useHomeViewModel = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [travels, setTravels] = useState<Travel[]>([]);
  const [search, setSearch] = useState<string>('');
  const [userData, setUserData] = useState<IUserData>();
  const [searchResult, setSearchResult] = useState<Travel[]>([]);

  const navigate = useNavigate();
  const { deleteStorageValue, getStorageValue } = useStorageContext();

  const getUserData = async () => {
    const user = await getStorageValue('userData');
    setUserData(JSON.parse(user));
  };

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

  useEffect(() => {
    getTravels();
    getUserData();
  }, []);

  useEffect(() => {
    const filteredTravels = travels?.filter(
      (travel) =>
        travel?.destination?.toLowerCase()?.includes(search?.toLowerCase()),
    );

    setSearchResult(filteredTravels);
  }, [search, travels]);

  return {
    refreshing,
    travels,
    onRefresh,
    search,
    setSearch,
    userData,
    searchResult,
  };
};

export default useHomeViewModel;
