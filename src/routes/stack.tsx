import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

/* Screens */
import { RegisterView } from '../modules/travels/screens/Register/view';
import { LoginView } from '../modules/travels/screens/Login/view';
import { ProfileView } from '../modules/travels/screens/Profile/view';
import { TravelDetailsView } from '../modules/travels/screens/TravelDetails/view';
import TabHome from './tabs';

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Register: undefined;
  TravelDetails: { id: string };
  Profile: undefined;
};

export type StackRoute = {
    route: keyof RootStackParamList;
    component: React.FC<any>;
};

const stackRoutes: StackRoute[] = [
    {route: 'Login', component: LoginView},
    {route: 'Home', component: TabHome},
    {route: 'Register', component: RegisterView},
    {route: 'TravelDetails', component: TravelDetailsView},
    {route: 'Profile', component: ProfileView},
]

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackScreens = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Group>
                {stackRoutes?.map(item => {
                    return (
                        <Stack.Screen
                            key={item.route}
                            name={item.route}
                            component={item.component}
                        />
                    )
                })}
            </Stack.Group>
        </Stack.Navigator>
    )
}

export default StackScreens;

