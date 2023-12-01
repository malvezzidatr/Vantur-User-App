import React, { useEffect, useMemo, useState } from 'react';
import * as S from './styles';
import { Card } from '../../components/Home/card/card';
import { ActivityIndicator, FlatList, RefreshControl, Text, TouchableOpacity, View } from 'react-native';
import useHomeViewModel from './view.model';
import { SearchBar } from '../../components/Home/searchBar/searchBar';
import { CardSkeleton } from '../../components/Home/cardSkeleton/cardSkeleton';
import { useStorageContext } from '../../contexts/useStorageContext';
import { TravelCard } from '../../components/Home/travelCard/travelCard';
import { useNavigation } from '@react-navigation/native';

export const HomeView: React.FC = (): JSX.Element => {
  const {
    travels,
    onRefresh,
    refreshing,
    search,
    setSearch,
    userData,
    searchResult,
    goToDetails,
    loading
  } = useHomeViewModel();

  const { deleteStorageValue } = useStorageContext();

  return (
    <S.Container>
      <TouchableOpacity onPress={() => deleteStorageValue('access_token')}>
        <Text>Logout</Text>
      </TouchableOpacity>
      <S.HelloGuy>
        Olá, {userData?.first_name}!
      </S.HelloGuy>
      <S.SearchBarContainer>
        <SearchBar
          placeholder="Procure seu destino aqui..."
          value={search}
          setValue={setSearch}
          inputStyle={{ marginBottom: 30 }}
        />
      </S.SearchBarContainer>
      <S.EventTitle>Eventos</S.EventTitle>
        <FlatList
          contentContainerStyle={{ paddingHorizontal: 30, paddingVertical: 10 }}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          showsHorizontalScrollIndicator={false}
          data={searchResult}
          keyExtractor={(item) => item.id}
          horizontal
          renderItem={({ item, index }) => {
            return (
              <S.CardsContainer>
                  <TravelCard
                    value={item?.value}
                    destination={item?.destination}
                    seats={item?.seats}
                    reserveds={item?.confirmeds?.length}
                    owner={`${item?.owner?.first_name} ${item?.owner?.last_name}`}
                    departure={item?.departure_location}
                    isFavorite={index % 2 === 0 && true}
                    goToDetails={() => goToDetails(item?.id)}
                    image={`data:image/png;base64,${item.file}`}
                  />
              </S.CardsContainer>
            );
          }}
        />
    </S.Container>
  );
};