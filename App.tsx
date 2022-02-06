/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {QueryClient, QueryClientProvider} from 'react-query';

import {ThemeProvider} from 'styled-components/native';
import {NavigationRoutes} from './src/navigators';
import theme from './src/theme';

const queryClient = new QueryClient();

const App = () => {
  const backgroundStyle = {
    backgroundColor: theme.colors.azure,
    height: '100%',
    flex: 1,
    width: '100%',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle="light-content" />
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <NavigationContainer>
            <NavigationRoutes />
          </NavigationContainer>
        </QueryClientProvider>
      </ThemeProvider>
    </SafeAreaView>
  );
};

export default App;
