import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { RootStackParamList } from '../../../../routes/router';
import { getOneTravel } from '../../services/Travel/requests';
import { Travel } from '../../services/Travel/interfaces';
import Carousel, { Pagination } from 'react-native-snap-carousel'

interface Props
  extends NativeStackScreenProps<RootStackParamList, 'TravelDetails'> {}

export const TravelDetailsView: React.FC<Props> = ({ route }): JSX.Element => {
  const { params } = route;
  const [travel, setTravel] = useState<Travel | undefined>();
  const [loading, setLoading] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);

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
    <View style={{ flex: 1, backgroundColor: '#f6f6f6', position: 'relative', justifyContent: 'flex-end' }}>
      <View style={{position: 'absolute', width: '100%', height: '100%'}}>
        <Carousel
          indicatorStyle='white'
          showsVerticalScrollIndicator
          windowSize={1}
          vertical
          sliderHeight={500}
          itemHeight={1000}
          autoplay
          autoplayInterval={4000}
          onSnapToItem={(index: number) => setActiveIndex(index)}
          data={travel?.file}
          renderItem={({ item }) => (
            <>
              <ImageBackground
                style={{ width: '100%', height: '100%'}}
                imageStyle={{ borderRadius: 10 }}
                source={{ uri: `data:image/png;base64,${item}` }}
                resizeMode="cover"
                resizeMethod='scale'
              >
                <LinearGradient colors={['#00000000', '#000000']} style={{height : '100%', width : '100%', borderRadius: 10}} />
              </ImageBackground>
            </>
          )}
        >
        </Carousel>
      </View>
      <View style={{paddingHorizontal: 30, marginBottom: 80}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 30, width: '100%'}}>
          <View>
            <Text style={{ fontSize: 48, color: 'white', fontWeight: 'bold' }}>{travel?.destination}</Text>
            <Text style={{ fontSize: 16, color: 'white', fontStyle: 'italic' }}>Copacabana</Text>
          </View>
          <Pagination
            containerStyle={{flexDirection: 'column', marginBottom: -20}}
            dotStyle={{backgroundColor: 'white', marginTop: 18 }}
            activeDotIndex={activeIndex}
            dotsLength={travel?.file.length}
          />
        </View>

        <View style={{width: '110%', height: 80, backgroundColor: '#0000006d', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', borderRadius: 40, alignSelf: 'center'}}>
          {[1, 2, 3, 3].map(item => (
            <View style={{height: 60, width: 60, borderRadius: 60, backgroundColor: 'black', borderWidth: 1, borderColor: 'white'}}></View>
          ))}
            <View style={{height: 60, width: 60, borderRadius: 60, backgroundColor: 'black', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: 'white'}}>
              <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>+99</Text>
            </View>
        </View>

        <View style={{flexDirection: 'row', marginTop: 50, alignItems: 'center', justifyContent: 'space-between'}}>
          <Text style={{ fontSize: 32, color: 'white' }}>Bora pro rolê</Text>
          <TouchableOpacity style={{width: 55, height: 55, backgroundColor: '#fff', borderRadius: 10, alignItems: 'center', justifyContent: 'center'}}><Text style={{fontSize: 42, color: '#3A3A50'}}>{'>'}</Text></TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
