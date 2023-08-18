import 'react-native-gesture-handler';
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { IntroScreen } from './src/Pages/IntroScreen';
import { PokemonScreen } from './src/Pages/PokemonScreen';
import { CarePokemon } from './src/Pages/CarePokemon';

const Stack = createStackNavigator();

export default function App() {

  return (
   <>
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Intro"
        component={IntroScreen}
        options={
          {
            headerShown:false
          }
        }
      />
      <Stack.Screen
        name="pokemon"
        component={PokemonScreen}
        options={
          {
            headerShown:false
          }
        }
      />
      <Stack.Screen
        name="care"
        component={CarePokemon}
        options={
          {
            headerShown:false
          }
        }
      />
    </Stack.Navigator>
   </NavigationContainer>
   </>
  );
}