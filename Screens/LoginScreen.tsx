import { ImageBackground, StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import React from 'react'
import { TextInput } from 'react-native-gesture-handler';

export default function LoginScreen() {
  return (
    
  <ImageBackground
      source={{ uri: 'https://media.istockphoto.com/id/1333010525/vector/simple-flat-pixel-art-illustration-of-cartoon-outdoor-landscape-background-pixel-arcade.jpg?s=170667a&w=0&k=20&c=6Ga9NO3Tl_eSOMCWTbH7qY4LEra7aUwCQZXldsHYtQ0=' }}
      style={styles.imagen}
    >

    <View style={styles.container}>
      <Text style={styles.titulo}>Login</Text>

      <TextInput
      placeholder='Ingrese su usuario'
      style={styles.input}/>
      <TextInput
      placeholder='Ingrese su contraseña'
      style={styles.input}/>
 
      <Button title='Ingresar' />
    </View>

    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  imagen: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(7, 49, 21, 0.8)', 
  },
  titulo:{
    fontSize: 45,
    color: 'white',
    marginBottom: 20,
  },
  input:{
    backgroundColor: 'white',
    height: 50,
    width: '55%',
    margin: 10,
    marginBottom: 25,
    padding: 10,
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 25,
    textAlign: 'center',
    borderBottomWidth: 5,
    fontSize: 18,
  },

})