import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import {Cities, Search} from '../screens';
import useColors from '../hooks/useColors';

const Stack = createNativeStackNavigator();

const NavigationRoutes = () => {
  const getThemeColors = useColors();

  const options: NativeStackNavigationOptions = {
    headerStyle: {backgroundColor: getThemeColors('azure')},
    headerTitleStyle: {
      fontFamily: 'Roboto-Medium',
      color: getThemeColors('white'),
    },
    headerTitleAlign: 'left',
  };

  return (
    <Stack.Navigator initialRouteName="Search">
      <Stack.Screen
        name="Cities"
        component={Cities}
        options={{
          ...options,
          headerTitle: 'Cidades',
        }}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          ...options,
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default NavigationRoutes;
