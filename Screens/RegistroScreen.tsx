import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler';



export default function RegistroScreen() {
  return (

   <View style={styles.container}>
      
      <Text style={{ fontSize: 45, }}>Registro</Text>
      <TextInput placeholder='Ingrese correo'
        style={styles.input}
        placeholderTextColor={'#ffe'}
        keyboardType='email-address'
        >
      </TextInput>

      <TextInput placeholder='Ingrese contraseña'
        style={styles.input}
        placeholderTextColor={'#ffe'}
        secureTextEntry={true}
        ></TextInput>

      <TextInput placeholder='Ingrese Nick'
        style={styles.input}
        placeholderTextColor={'#ffe'}
        ></TextInput>

      <TextInput placeholder='Ingrese Edad'
        style={styles.input}
        placeholderTextColor={'#ffe'}
        keyboardType='numeric'
        ></TextInput>

      <Button title='Guardar' ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '##50ede2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#a5b3f8',
    height: 60,
    fontSize: 25,
    width: '80%',
    marginTop: 10,
    borderRadius: 20,
    paddingHorizontal: 30,
    color: '#0018A8',
  },
  img: {
    width: 100,
    height: 100,
  }
});
