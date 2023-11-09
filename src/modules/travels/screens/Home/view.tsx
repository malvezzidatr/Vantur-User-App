import React from 'react';
import * as S from './styles';
import { Card } from '../../components/Home/card/card';
import { FlatList, RefreshControl } from 'react-native';
import useHomeViewModel from './view.model';

export const HomeView: React.FC = (): JSX.Element => {
  const { travels, onRefresh, refreshing } = useHomeViewModel();

  return (
    <S.Container>
      <S.HelloGuy>Ola,{'\n'}Pessoa!</S.HelloGuy>
      <FlatList
        contentContainerStyle={{ paddingHorizontal: 30, paddingVertical: 10 }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}
        data={travels}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <Card
              value={item?.value}
              destination={item?.destination}
              seats={item?.seats}
              reserveds={item?.confirmeds?.length}
              owner={`${item?.owner?.first_name} ${item?.owner?.last_name}`}
              departure={item?.departure_location}
            />
          );
        }}
      />
    </S.Container>
  );
};
