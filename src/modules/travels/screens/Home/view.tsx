import React, { useEffect, useState } from 'react';
import * as S from './styles';
import { Card } from '../../components/Home/card/card';
import { FlatList, RefreshControl } from 'react-native';
import useHomeViewModel from './view.model';
import { SearchBar } from '../../components/Home/searchBar/searchBar';
import { Travel } from '../../services/Travel/interfaces';
import { CardSkeleton } from '../../components/Home/cardSkeleton/cardSkeleton';

export const HomeView: React.FC = (): JSX.Element => {
  const { travels, onRefresh, refreshing, search, setSearch, userData } =
    useHomeViewModel();

  const [searchResult, setSearchResult] = useState<Travel[]>([]);

  useEffect(() => {
    const filteredTravels = travels?.filter((travel) =>
      travel?.destination?.toLowerCase()?.includes(search?.toLowerCase()),
    );

    setSearchResult(filteredTravels);
  }, [search, travels]);

  return (
    <S.Container>
      <S.HelloGuy>Ola,{'\n'}{userData?.first_name}!</S.HelloGuy>
      <S.SearchBarContainer>
        <SearchBar
          placeholder="Procure seu destino aqui..."
          value={search}
          setValue={setSearch}
          inputStyle={{ marginBottom: 30 }}
        />
      </S.SearchBarContainer>
      <S.EventTitle>Eventos</S.EventTitle>
      {
        searchResult.length <= 0 &&
          Array.from({ length: 4 }).map((_, index) => (
            <CardSkeleton key={index} />
          ))
      }
      <FlatList
        contentContainerStyle={{ paddingHorizontal: 30, paddingVertical: 10 }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}
        data={searchResult}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <>
              <Card
                value={item?.value}
                destination={item?.destination}
                seats={item?.seats}
                reserveds={item?.confirmeds?.length}
                owner={`${item?.owner?.first_name} ${item?.owner?.last_name}`}
                departure={item?.departure_location}
              />
            </>
          );
        }}
      />
    </S.Container>
  );
};
