

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import WelcomeScreen from '../Screens/WelcomeScreen';
import LoginScreen from '../Screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import RegistroScreen from '../Screens/RegistroScreen';
import ScoreScreen from '../Screens/ScoreScreen';
import GameScreen from '../Screens/GameScreen';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Drawer.Screen name="Login" component={LoginScreen} />
      <Drawer.Screen name="Registro" component={RegistroScreen} />
      <Drawer.Screen name="Game" component={GameScreen} />
      <Stack.Screen name="Score" component={ScoreScreen} />
    </Drawer.Navigator>
  );
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Registro" component={RegistroScreen} />
      <Stack.Screen name="Game" component={GameScreen} />
      <Stack.Screen name="Score" component={ScoreScreen}/>
    </Stack.Navigator>
  );
}

  
export default function Navegator(){
    return(
        <NavigationContainer>
            <MyDrawer/>
        </NavigationContainer>
    )
}




