import { Alert, Button, ImageBackground, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { getDatabase, ref, set } from "firebase/database";
import { db } from '../config/Config';

export default function RegistroScreen({navigation}:any) {

  const [correo, setcorreo] = useState("")
  const [contrasena, setcontrasena] = useState("")
  const [nick, setnick] = useState("")
  const [edad, setedad] = useState("")

  //Guardar usuarios 
  function guardarUsuarios() {
  set(ref(db, 'users/' + nick), {
    username: nick,
    email: correo,
    password : contrasena,
    age: edad
  });
  Alert.alert ("Mensaje", "Informacion guardada");
  setcorreo("");
  setcontrasena("");
  setnick("");
  setedad("");
}


  return (
    <ImageBackground
      source={{ uri: 'https://t3.ftcdn.net/jpg/00/88/98/18/360_F_88981880_YjJManMJ6hJmKr5CZteFJAkEzXIh8mxW.jpg' }}
      style={styles.imagen}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Registro</Text>

        <TextInput
          placeholder='Ingrese correo'
          onChangeText={(texto) => setcorreo(texto)}
          value={correo}
          style={styles.input}
          keyboardType='email-address'
        />

        <TextInput
          placeholder='Ingrese contraseña'
          onChangeText={(texto) => setcontrasena(texto)}
          value={contrasena}
          style={styles.input}
          secureTextEntry={true}
        />

        <TextInput
          placeholder='Ingrese Nick'
          onChangeText={(texto) => setnick(texto)}
          value={nick}
          style={styles.input}

        />

        <TextInput
          placeholder='Ingrese su Edad'
          style={styles.input}
          keyboardType='numeric'
          onChangeText={(texto) => setedad(texto)}
          value={edad}
        />

        <Button title='Guardar' color={styles.boton.color} 
        onPress={() => {guardarUsuarios(); navigation.navigate('Login')}}/>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 55, 27, 0.8)', 
  },
  title: {
    fontSize: 45,
    color: 'white',
    marginBottom: 20,
  },
  input: {
    backgroundColor: 'white',
    height: 50,
    width: '80%',
    margin: 10,
    padding: 10,
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 25,
    textAlign: 'center',
    borderBottomWidth: 5,
    fontSize: 18,
  },
  boton: {
    color: '#00bfff',
  },
  imagen: {
    flex: 1,
    resizeMode: 'cover',
  },
});
