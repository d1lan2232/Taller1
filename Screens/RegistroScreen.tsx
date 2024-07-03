import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TextInput } from 'react-native-gesture-handler';

export default function RegistroScreen() {
  return (
    <ImageBackground
      source={{ uri: 'https://t3.ftcdn.net/jpg/00/88/98/18/360_F_88981880_YjJManMJ6hJmKr5CZteFJAkEzXIh8mxW.jpg' }}
      style={styles.imagen}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Registro</Text>

        <TextInput
          placeholder='Ingrese correo'
          style={styles.input}
          keyboardType='email-address'
        />

        <TextInput
          placeholder='Ingrese contraseña'
          style={styles.input}
          secureTextEntry={true}
        />

        <TextInput
          placeholder='Ingrese Nick'
          style={styles.input}

        />

        <TextInput
          placeholder='Ingrese Edad'
          style={styles.input}
          keyboardType='numeric'
        />

        <Button title='Guardar' color={styles.boton.color} />
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
