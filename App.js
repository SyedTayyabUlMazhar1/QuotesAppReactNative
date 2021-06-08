import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import Home from './Screens/Home';
import NewQuote from './Screens/NewQuote';
import GlobalColors from './src/assets/GlobalColors';
import {store} from './Store';

export default RootApp = () => {
  return (
    <Provider store={store}>
      <RootComponent />
    </Provider>
  );
};

const Stack = createStackNavigator();
const ScreenOptions = {
  headerStyle: {
    backgroundColor: GlobalColors.background,
  },
  headerTintColor: '#fff',
};

const RootComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={ScreenOptions}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="New Quote"
          component={NewQuote}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
