import { RouteProp, useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, BackHandler, Image, Text, View } from "react-native";
import { RootStackParamList } from "../../../../routes/router";
import { getOneTravel } from "../../services/Travel/requests";
import { Travel } from "../../services/Travel/interfaces";

interface Props extends NativeStackScreenProps<RootStackParamList, 'TravelDetails'> {}

const TravelDetailsView: React.FC<Props> = ({ route }) => {
    const { params } = route;
    const [travel, setTravel] = useState<Travel | undefined>();
    const [loading, setLoading] = useState<boolean>(false);

    const navigate = useNavigation();

    const getTravel = async (): Travel => {
        setLoading(true);
        const { data } = await getOneTravel(params?.id);
        setTravel(data);
        setLoading(false);
    }

    useEffect(() => {
        getTravel();
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <Text style={{marginTop: 100}} onPress={() => navigate.navigate('Register')}>Teste</Text>
            <Image style={{flex: 1}} source={{ uri: `data:image/png;base64,${travel?.file}` }} />
        </View>
    );
};

const MemoizedTravelDetailsView = React.memo(TravelDetailsView);

export { MemoizedTravelDetailsView as TravelDetailsView };
