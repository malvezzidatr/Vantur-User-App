import React from 'react';
import { NativeRouter, Route, Routes } from 'react-router-native';
import { NavigationContainer } from '@react-navigation/native';
import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';

/* Screens */
import { RegisterView } from '../modules/travels/screens/Register/view';
import { LoginView } from '../modules/travels/screens/Login/view';
import { HomeView } from '../modules/travels/screens/Home/view';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Register: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
        <Stack.Screen name='Login' component={LoginView} />
        <Stack.Screen name='Home' component={HomeView} />
        <Stack.Screen name='Register' component={RegisterView} />
      </Stack.Navigator>
      {/* <Tab.Navigator>
        <Tab.Screen name='/home' component={HomeView}></Tab.Screen>
        <Tab.Screen name='/' component={LoginView}></Tab.Screen>
        <Tab.Screen name='/register' component={RegisterView}></Tab.Screen>
      </Tab.Navigator> */}
    </NavigationContainer>
  );
};

export default Router;
