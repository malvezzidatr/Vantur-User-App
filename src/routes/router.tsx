import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import StackScreens from './stack';

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Register: undefined;
  TravelDetails: { id: string };
  Profile: undefined;
};

const Router = () => {
  return <NavigationContainer>{StackScreens()}</NavigationContainer>;
};

export default Router;
