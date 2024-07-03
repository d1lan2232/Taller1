
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import WelcomeScreen from '../Screens/WelcomeScreen';
import LoginScreen from '../Screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import RegistroScreen from '../Screens/RegistroScreen';
import ScoreScreen from '../Screens/ScoreScreen';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Login" component={LoginScreen} />
      <Drawer.Screen name="Registro" component={RegistroScreen} />
    </Drawer.Navigator>
  );
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Registro" component={RegistroScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Score" component={ScoreScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}

  
export default function Navegador(){
    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
}

