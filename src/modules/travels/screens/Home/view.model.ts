import { useCallback, useEffect, useState } from 'react';
import { getAllTravels } from '../../services/Travel/requests';
import { Travel } from '../../services/Travel/interfaces';

const useHomeViewModel = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [travels, setTravels] = useState<Travel[]>([]);
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    getTravels();
  }, []);

  const getTravels = async () => {
    setTravels(await getAllTravels());
  };

  const onRefresh = useCallback(() => {
    try {
      setRefreshing(true);
      getTravels();
    } catch (error) {
      console.error(error);
    } finally {
      setRefreshing(false);
    }
  }, []);

  return {
    refreshing,
    travels,
    onRefresh,
    search,
    setSearch
  };
};

export default useHomeViewModel;
