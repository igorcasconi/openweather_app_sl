import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

import {Cities, Search} from '../screens';
import useColors from '../hooks/useColors';
import {Button} from '../components';

import {RouteStackParamsProps} from '../shared/types/routes';

const Stack = createNativeStackNavigator<RouteStackParamsProps>();
export type weatherRouteStack = NativeStackNavigationProp<
  RouteStackParamsProps,
  'Cities'
>;

const NavigationRoutes = () => {
  const getThemeColors = useColors();
  const navigation = useNavigation<weatherRouteStack>();

  const options: NativeStackNavigationOptions = {
    headerStyle: {backgroundColor: getThemeColors('azure')},
    headerTitleStyle: {
      fontFamily: 'Roboto-Medium',
      color: getThemeColors('white'),
    },
    headerTitleAlign: 'left',
  };

  return (
    <Stack.Navigator initialRouteName="Cities">
      <Stack.Screen
        name="Cities"
        component={Cities}
        options={{
          ...options,
          headerTitle: 'Cidades',
          headerRight: () => (
            <Button
              backgroundColor="transparent"
              mt="2px"
              onPress={() => navigation.navigate('Search')}>
              <MaterialIcons name="search" color="white" size={24} />
            </Button>
          ),
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
