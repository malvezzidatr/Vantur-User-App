import { RouteProp, useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState, useMemo } from 'react';
import {
  ActivityIndicator,
  BackHandler,
  Image,
  Text,
  View,
} from 'react-native';
import { RootStackParamList } from '../../../../routes/router';
import { getOneTravel } from '../../services/Travel/requests';
import { Travel } from '../../services/Travel/interfaces';

interface Props
  extends NativeStackScreenProps<RootStackParamList, 'TravelDetails'> {}

export const TravelDetailsView: React.FC<Props> = ({ route }): JSX.Element => {
  const { params } = route;
  const [travel, setTravel] = useState<Travel | undefined>();
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigation();

  const getTravel = async (): Promise<void> => {
    setLoading(true);
    const { data } = await getOneTravel(params?.id);
    setTravel(data);
    setLoading(false);
  };

  useEffect(() => {
    getTravel();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <Image
        style={{ flex: 1 }}
        source={{ uri: `data:image/png;base64,${travel?.file}` }}
        resizeMode='cover'
      />
    </View>
  );
};
