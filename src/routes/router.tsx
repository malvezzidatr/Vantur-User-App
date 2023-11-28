import React, { useEffect, useRef } from 'react';
import { NativeRouter, Route, Routes } from 'react-router-native';
import { NavigationContainer } from '@react-navigation/native';
import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';

/* Screens */
import { RegisterView } from '../modules/travels/screens/Register/view';
import { LoginView } from '../modules/travels/screens/Login/view';
import { HomeView } from '../modules/travels/screens/Home/view';
import { MyTravelsView } from '../modules/travels/screens/MyTravels/view';
import { ProfileView } from '../modules/travels/screens/Profile/view';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useTheme } from 'styled-components';
import { Animated, TouchableOpacity, View } from 'react-native';

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Register: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

const TabArr = [
  { route: 'Home', label: 'Home', iconName: 'map', component: HomeView},
  { route: 'MyTravels', label: 'Meus Rolês', iconName: 'calendar', component: MyTravelsView},
  { route: 'Profile', label: 'Perfil', iconName: 'user', component: ProfileView},
]

const TabButton = ({ item, onPress, accessibilityState }): JSX.Element => {
  const focused = accessibilityState.selected
  const scale = useRef(new Animated.Value(1))

  useEffect(() => {
    if(focused) {
      Animated.timing(scale.current, {
        toValue: 1.8,
        duration: 250,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(scale.current, {
        toValue: 1,
        duration: 250,
        useNativeDriver: true,
      }).start();
    }
  }, [focused]);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Animated.View
        style={{
          transform: [{ scale: scale.current}]
        }}
      >
        <Icon name={item.iconName} solid={focused} size={15}/>
      </Animated.View>
    </TouchableOpacity>
  )
}

const Home = () => {
  const { colors } = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: '#bcbcbc',
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          borderRadius: 15,
          height: 80,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginTop: -10,
          marginBottom: 10
        },
        tabBarShowLabel: false,
      }}>
        {TabArr.map((item, index) => {
          return (
            <Tab.Screen
              name={item.route}
              component={item.component}
              options={{
                tabBarShowLabel: false,
                tabBarIcon: ({ color, focused }) => (
                  <Icon name={item.iconName} solid={focused} />
                ),
                tabBarButton: (props) => <TabButton {...props} item={item} />
              }}
            />
          )
        })}
      {/* <Tab.Screen
        name='Home'
        component={HomeView}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon name='map' size={22} color={color} />
          ),
          tabBarLabel: 'Home'
        }}
      />
      <Tab.Screen
        name='MyTravels'
        component={MyTravelsView}
        options={{
          tabBarIcon: ({ size, color}) => (
            <Icon name='calendar' size={22} color={color} />
          ),
          tabBarLabel: 'Meus Rolês',
        }}
      />
      <Tab.Screen
        name='Profile'
        component={ProfileView}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon name='user' size={22} color={color} />
          ),
          tabBarLabel: 'Perfil'
        }}
      /> */}
    </Tab.Navigator>
  )
}

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
        <Stack.Screen name='Login' component={LoginView} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Register' component={RegisterView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
