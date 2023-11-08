import React, { useEffect, useState } from 'react';
import * as S from './styles';
import { Card } from '../../components/Home/card/card';
import { getAllTravels } from '../../services/Travel/requests';
import { Travel } from '../../services/Travel/interfaces';
import { FlatList, Text, RefreshControl } from 'react-native';

export const HomeView: React.FC = (): JSX.Element => {
    const [travels, setTravels] = useState<Travel[]>([]);

    useEffect(() => {
        const getTravels = async () => {
            setTravels(await getAllTravels());
        }
        getTravels();
    }, [])
    return (
        <S.Container>
            <S.HelloGuy>Ola,{'\n'}Pessoa!</S.HelloGuy>
            <FlatList
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
                        />
                    )
                }}
            />
        </S.Container>
    )
}