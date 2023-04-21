import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainPage from './MainPage';
import componente_switch from './componente_switch';
import Menu from './Menu';
import Resto from './Resto';
import snake from './snake';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Switch" component={componente_switch} />
        <Stack.Screen name="Resto" component={Resto} />
        <Stack.Screen name="snake" component={snake} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}





