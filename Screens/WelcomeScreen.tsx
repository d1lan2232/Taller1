import { Alert, Button, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

export default function ClimaScreen() {

  return (
    <ImageBackground 
    source={{ uri: "https://png.pngtree.com/background/20230516/original/pngtree-path-through-the-forest-wallpaper-picture-image_2615805.jpg" }}
    style={styles.container}
    >
      <Text style={{ color:'hsl(48, 100%, 70%)', fontSize:50 }} >VIDEO JUEGO</Text>
     
      <Button title='Registrar'  />
      <Button title='Iniciar Sesión'  />
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  input:{
    backgroundColor: "#666",
    height: 50,
    width: "80%",
    marginBottom: 10,
    borderRadius:40,
    paddingHorizontal: 25,
    fontSize: 20,
    color: 'white'
  },
  btn:{
    margin:10,
    borderRadius:25,
  },
})