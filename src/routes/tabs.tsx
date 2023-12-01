import React, { useEffect, useRef } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

/* Screens */
import { HomeView } from '../modules/travels/screens/Home/view';
import { MyTravelsView } from '../modules/travels/screens/MyTravels/view';
import { ProfileView } from '../modules/travels/screens/Profile/view';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useTheme } from 'styled-components';
import { Animated, StyleSheet, TouchableOpacity, View } from 'react-native';

export type Tabs = {
  route: string;
  label: string;
  iconName: string;
  component: React.FC;
};

export type TabButtonType = {
  item: Tabs;
  onPress?: () => void;
  accessibilityState: { selected: boolean };
};

const TabArr: Tabs[] = [
  { route: 'HomeTab', label: 'Home', iconName: 'map', component: HomeView },
  {
    route: 'MyTravels',
    label: 'Meus Rolês',
    iconName: 'calendar',
    component: MyTravelsView,
  },
  {
    route: 'Profile',
    label: 'Perfil',
    iconName: 'user',
    component: ProfileView,
  },
];

const Tab = createBottomTabNavigator();

const TabButton = ({ item, onPress, accessibilityState }: TabButtonType) => {
  const focused = accessibilityState.selected;
  const transY = useRef(new Animated.Value(0));
  const scale = useRef(new Animated.Value(1));

  useEffect(() => {
    if (focused) {
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
    <TouchableOpacity onPress={onPress} style={styles.tabButtonTouchable}>
      <Animated.View
        style={[
          styles.tabButtonAnimatedView,
          {
            transform: [
              {
                translateY: transY.current,
              },
              {
                scale: scale.current,
              },
            ],
            backgroundColor: focused ? '#3A3A50' : 'white',
          },
        ]}
      >
        <Icon
          color={focused ? 'white' : undefined}
          name={item.iconName}
          solid={focused}
          size={15}
        />
      </Animated.View>
    </TouchableOpacity>
  );
};

const TabHome = () => {
  const { colors } = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: '#bcbcbc',
        tabBarStyle: styles.tabBarStyle,
        tabBarLabelStyle: styles.tabBarLabelStyle,
        tabBarShowLabel: false,
      }}
    >
      {TabArr.map((item) => {
        return (
          <Tab.Screen
            key={item.route}
            name={item.route}
            component={item.component}
            options={{
              tabBarIcon: ({ focused }) => (
                <Icon name={item.iconName} solid={focused} />
              ),
              tabBarButton: (props) => <TabButton {...props} item={item} />,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export const styles = StyleSheet.create({
  tabBarStyle: {
    height: 80,
    backgroundColor: 'white',
  },
  tabBarLabelStyle: {
    fontSize: 12,
    marginTop: -10,
    marginBottom: 10,
  },
  tabButtonTouchable: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabButtonAnimatedView: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    height: 60,
    width: 60,
    borderColor: 'white',
    borderWidth: 5,
  },
});

export default TabHome;
