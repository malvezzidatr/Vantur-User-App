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
import { TravelDetailsView } from '../modules/travels/screens/TravelDetails/view';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useTheme } from 'styled-components';
import { Animated, TouchableOpacity, View } from 'react-native';

export type Tabs = {
  route: string;
  label: string;
  iconName: string;
  component: React.FC;
}

export type TabButtonType = {
  item: Tabs;
  onPress?: () => void;
  accessibilityState: { selected: boolean }
}

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Register: undefined;
  TravelDetails: { id: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

const TabArr: Tabs[] = [
  { route: 'Home', label: 'Home', iconName: 'map', component: HomeView},
  { route: 'MyTravels', label: 'Meus Rolês', iconName: 'calendar', component: MyTravelsView},
  { route: 'Profile', label: 'Perfil', iconName: 'user', component: ProfileView},
]

const TabButton = ({
  item,
  onPress,
  accessibilityState
}: TabButtonType) => {
  const focused = accessibilityState.selected
  const transY = useRef(new Animated.Value(0));
  const scale = useRef(new Animated.Value(1));

  useEffect(() => {
    if(focused) {
      Animated.timing(transY.current, {
        toValue: -25,
        duration: 250,
        useNativeDriver: true,
      }).start();

      Animated.timing(scale.current, {
        toValue: 1.6,
        duration: 250,
        useNativeDriver: true,
      }).start();

    } else {
      Animated.timing(transY.current, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }).start();

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
        alignItems: 'center',
      }}
    >
      <Animated.View
        style={{
          transform: [{ 
            translateY: transY.current,
          }, {
            scale: scale.current
          }],
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 50,
          height: 60,
          width: 60,
          borderColor: 'white',
          backgroundColor: focused ? '#3A3A50' : 'white',
          borderWidth: 5,
        }}
      >
        <Icon color={focused ? 'white' : undefined} name={item.iconName} solid={focused} size={15}/>
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
          backgroundColor: 'white'
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
              key={index}
              name={item.route}
              component={item.component}
              options={{
                tabBarShowLabel: false,
                tabBarIcon: ({ focused }) => (
                  <Icon name={item.iconName} solid={focused} />
                ),
                tabBarButton: (props) => <TabButton {...props} item={item} />
              }}
            />
          )
        })}
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
        <Stack.Screen name='TravelDetails' component={TravelDetailsView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
